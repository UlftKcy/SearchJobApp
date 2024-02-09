import { fetchJobs } from "@/services/jobs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  jobs: [];
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
  return res.data;
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
