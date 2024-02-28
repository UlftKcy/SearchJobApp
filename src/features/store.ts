import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobs/jobSlice";
import companySlice from "./companies/companySlice";
import jobsAndCompaniesSlice from "./jobs/jobsAndCompaniesSlice";
import searchSlice from "./search/searchSlice";

export const store = configureStore({
    reducer:{
        jobs:jobSlice,
        jobsAndCompanies:jobsAndCompaniesSlice,
        companies:companySlice,
        search:searchSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch