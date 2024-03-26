import { fetchCompanies } from "@/services/companies";
import { CompanyType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  companiesByPage: {
    companies:CompanyType[],
    page: number,
  }
  loading: boolean;
  error: boolean;
};

const initialState: InitialState = {
  companiesByPage: {
    companies: [],
    page: 1,
  },
  loading: false,
  error: false,
};

export const getCompanies = createAsyncThunk("companies/get", async (page:number) => {
  const res = await fetchCompanies(page);
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
      state.companiesByPage.companies = [
        ...state.companiesByPage.companies,
        ...action.payload,
      ];
      state.companiesByPage.page++;
    });
    builder.addCase(getCompanies.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default companySlice.reducer;
