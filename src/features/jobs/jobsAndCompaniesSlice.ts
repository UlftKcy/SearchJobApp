import { fetchJobsWithCompany } from "@/services/jobs";
import { JobType, JobsAndCompanies } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  jobsAndCompanies: JobsAndCompanies[];
  loading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  jobsAndCompanies: [],
  loading: false,
  error: false,
};

export const getJobsAndCompanies = createAsyncThunk("jobsAndCompanies/get", async (page: number) => {
  const res = await fetchJobsWithCompany(page);
  return res;
});

export const jobsAndCompaniesSlice = createSlice({
  name: "jobsAndCompanies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobsAndCompanies.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getJobsAndCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.jobsAndCompanies = [...state.jobsAndCompanies,...action.payload];
    });
    builder.addCase(getJobsAndCompanies.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default jobsAndCompaniesSlice.reducer;
