import { fetchJobsWithCompany } from "@/services/jobs";
import { JobsWithCompany } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  jobsWithCompany: {
    jobs: JobsWithCompany[];
    page: number;
  };
  categories: string[];
  loading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  jobsWithCompany: {
    jobs: [],
    page: 1,
  },
  categories: [],
  loading: false,
  error: false,
};

export const getJobsWithCompany = createAsyncThunk(
  "jobsWithCompany/get",
  async (page: number) => {
    console.log(page)
    const res = await fetchJobsWithCompany(page);
    return res;
  }
);

const jobsWithCompanySlice = createSlice({
  name: "jobsWithCompany",
  initialState: initialState,
  reducers: {
    getCategories: (state) => {
      state.jobsWithCompany.jobs.map((job) => {
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
    builder.addCase(getJobsWithCompany.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getJobsWithCompany.fulfilled, (state, action) => {
      state.loading = false;
      state.jobsWithCompany.jobs = [
        ...state.jobsWithCompany.jobs,
        ...action.payload,
      ];
      state.jobsWithCompany.page++;
    });
    builder.addCase(getJobsWithCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { getCategories } = jobsWithCompanySlice.actions;
export default jobsWithCompanySlice.reducer;
