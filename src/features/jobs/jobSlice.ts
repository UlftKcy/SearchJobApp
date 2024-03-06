import { fetchJobs } from "@/services/jobs";
import { JobType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  jobs: JobType[];
  categories: string[];
  loading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  jobs: [],
  categories: [],
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
    getCategories: (state) => {
      state.jobs.map((job) => {
        if (
          !state.categories.includes(job.categories[0]?.name) &&
          job.categories[0]?.name !== "Unknown" &&
          job.categories[0]?.name !== undefined
        ) {
          state.categories.push(job.categories[0].name);
        }
      });
    },
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

export const { getCategories } = jobSlice.actions;
export default jobSlice.reducer;
