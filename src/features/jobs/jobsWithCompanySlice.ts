import { fetchJobsWithCompany } from "@/services/jobs";
import { JobsWithCompany } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  jobsWithCompany: {
    jobs: JobsWithCompany[];
    page: number;
  };
  categories: string[];
  appliedJobs: JobsWithCompany[];
  favoriteJobs: JobsWithCompany[];
  recentlyViewJobs: JobsWithCompany[];
  loading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  jobsWithCompany: {
    jobs: [],
    page: 1,
  },
  categories: [],
  appliedJobs: [],
  favoriteJobs: [],
  recentlyViewJobs: [],
  loading: false,
  error: false,
};

export const getJobsWithCompany = createAsyncThunk(
  "jobsWithCompany/get",
  async (page: number) => {
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
    // add applied jobs
    applyJob: (state, action) => {
      state.appliedJobs = [...state.appliedJobs, action.payload];
    },
    // remove applied jobs
    removeJob: (state, action) => {
      state.appliedJobs = state.appliedJobs.filter(
        (job) => job.id !== action.payload
      );
    },
    // add favorite jobs
    addFavoriteJob: (state, action) => {
      state.favoriteJobs = [...state.favoriteJobs, action.payload];
    },
    // remove favorite job
    removeFavoriteJob: (state, action) => {
      state.favoriteJobs = state.favoriteJobs.filter(
        (job) => job.id !== action.payload
      );
    },
    // remove all favorite job
    removeAllFavoriteJobs: (state) => {
      state.favoriteJobs = initialState.favoriteJobs;
    },
    // add recently view jobs
    addRecentlyViewJobs: (state, action) => {
      const existJob = state.recentlyViewJobs.findIndex(
        (job) => job.id === action.payload.id
      );

      if (existJob === -1) {
        state.recentlyViewJobs.push(action.payload);
      }
    },
    // remove recently view job
    removeRecentlyViewJobs: (state, action) => {
      state.recentlyViewJobs = state.recentlyViewJobs.filter(
        (job) => job.id !== action.payload
      );
    },
    // remove all recently view jobs
    removeAllRecentlyViewJobs: (state) => {
      state.recentlyViewJobs = initialState.recentlyViewJobs;
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

export const {
  getCategories,
  applyJob,
  removeJob,
  addFavoriteJob,
  removeFavoriteJob,
  removeAllFavoriteJobs,
  addRecentlyViewJobs,
  removeRecentlyViewJobs,
  removeAllRecentlyViewJobs
} = jobsWithCompanySlice.actions;
export default jobsWithCompanySlice.reducer;
