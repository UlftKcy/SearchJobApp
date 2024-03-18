import { fetchFilteredJobs } from "@/services/jobs";
import { JobsWithCompany } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  searchText: string;
  filteredJobs: {
    jobs: JobsWithCompany[];
    page: number;
  };
  loading: boolean;
  error: boolean;
  selectedCategory: string;
};

const initialState: InitialState = {
  searchText: "",
  filteredJobs: {
    jobs: [],
    page: 1,
  },
  loading: false,
  error: false,
  selectedCategory: null,
};

export const getFilteredJobs = createAsyncThunk(
  "filtered-jobs/get",
  async ({ page, category }: { page: number; category: string }) => {
    const res = await fetchFilteredJobs(page, category);
    return res;
  }
);

const filterByJobSlice = createSlice({
  name: "filterByJob",
  initialState: initialState,
  reducers: {
    searchQueryByJob: (state, action) => {
      const searchQuery = action.payload;
      state.searchText = searchQuery;
      state.filteredJobs.jobs = state.filteredJobs.jobs.filter((job)=>job.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredJobs.jobs = [];
      state.searchText = "";
      state.filteredJobs.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilteredJobs.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getFilteredJobs.fulfilled, (state, action) => {
      state.loading = false;
      
      // filter && search
      if(state.searchText !== ""){
        const filteredJobsBySearchText = action.payload.filter((job)=>job.name.toLocaleLowerCase().includes(state.searchText.toLocaleLowerCase()));
        state.filteredJobs.jobs = [...state.filteredJobs.jobs, ...filteredJobsBySearchText];
      }else{
        state.filteredJobs.jobs = [...state.filteredJobs.jobs, ...action.payload];
      }

      state.filteredJobs.page++;
    });
    builder.addCase(getFilteredJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { searchQueryByJob, selectCategory } = filterByJobSlice.actions;
export default filterByJobSlice.reducer;
