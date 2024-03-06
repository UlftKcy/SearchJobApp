import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobs/jobSlice";
import companySlice from "./companies/companySlice";
import jobsAndCompaniesSlice from "./jobs/jobsAndCompaniesSlice";
import filterByJobSlice from "./search/filterByJobSlice";

export const store = configureStore({
    reducer:{
        jobs:jobSlice,
        jobsAndCompanies:jobsAndCompaniesSlice,
        companies:companySlice,
        filterByJob:filterByJobSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch