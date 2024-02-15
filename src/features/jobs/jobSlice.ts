import { fetchJobs } from "@/services/jobs";
import { JobType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  jobs: JobType[];
  loading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  jobs: [],
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
  reducers: {},
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

export default jobSlice.reducer;