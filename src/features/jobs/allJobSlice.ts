import { fetchAllJobs } from "@/services/jobs";
import { JobType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  allJobs: JobType[];
  loading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  allJobs: [],
  loading: false,
  error: false,
};

export const getAllJobs = createAsyncThunk("allJobs/get", async (page: number) => {
  const res = await fetchAllJobs(page);
  return res;
});

export const allJobSlice = createSlice({
  name: "allJobs",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.allJobs = action.payload;
    });
    builder.addCase(getAllJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default allJobSlice.reducer;
