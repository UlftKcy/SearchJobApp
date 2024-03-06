import { fetchFilteredJobs } from "@/services/jobs";
import { JobType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  searchText: string;
  filteredJobs: {
    jobs:JobType[];
    page:number;
  };
  loading: boolean;
  error: boolean;
  selectedCategory: string;
};

const initialState: InitialState = {
  searchText: "",
  filteredJobs: {
    jobs:[],
    page:1,
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
      state.searchText = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredJobs.jobs = [];
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
      state.filteredJobs.jobs = [
        ...state.filteredJobs.jobs,
        ...action.payload,
      ];
    });
    builder.addCase(getFilteredJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { searchQueryByJob, selectCategory } = filterByJobSlice.actions;
export default filterByJobSlice.reducer;
