import { fetchJobs } from "@/services/jobs";
import { JobType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  job: JobType;
  loading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  job: null,
  loading: false,
  error: false,
};

export const getJobById = createAsyncThunk("job/get", async () => {
  const res = await fetchJobs();
  return res;
});

export const selectedJobSlice = createSlice({
  name: "selectedJob",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobById.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getJobById.fulfilled, (state, action) => {
      state.loading = false;
      state.job = action.payload;
    });
    builder.addCase(getJobById.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default selectedJobSlice.reducer;
