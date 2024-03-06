import { fetchJobs } from "@/services/jobs";
import { JobCategory, JobType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  jobs: JobType[];
  categories:string[];
  selectedCategory:string;
  loading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  jobs: [],
  categories:[],
  selectedCategory:null,
  loading: false,
  error: false,
};

export const getJobs = createAsyncThunk("jobs/get", async () => {
  const res = await fetchJobs();
  return res;
});

export const jobSlice = createSlice({
  name: "jobs",
  initialState: initialState,
  reducers: {
    getCategories:(state)=>{
      state.jobs.map((job)=>{
        if(!state.categories.includes(job.categories[0]?.name) && job.categories[0]?.name !== "Unknown" && job.categories[0]?.name !== undefined){
          state.categories.push(job.categories[0].name)
        }
      })
    },
    selectCategory:(state,action)=>{
      state.selectedCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    });
    builder.addCase(getJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const {getCategories,selectCategory} = jobSlice.actions;
export default jobSlice.reducer;