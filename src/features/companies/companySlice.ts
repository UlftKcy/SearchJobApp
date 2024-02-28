import { fetchCompanies } from "@/services/companies";
import { CompanyType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  companies: CompanyType[];
  loading: boolean;
  error: boolean;
};

const initialState: InitialState = {
  companies: [],
  loading: false,
  error: false,
};

export const getCompanies = createAsyncThunk("companies/get", async () => {
  const res = await fetchCompanies();
  return res;
});

const companySlice = createSlice({
  name: "companies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.companies = action.payload;
    });
    builder.addCase(getCompanies.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default companySlice.reducer;
