import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./companies/companySlice";
import filterByJobSlice from "./search/filterByJobSlice";
import jobsWithCompanySlice from "./jobs/jobsWithCompanySlice";
import selectedJobSlice from "./jobs/selectedJobSlice";

export const store = configureStore({
    reducer:{
        jobsWithCompany:jobsWithCompanySlice,
        companies:companySlice,
        filterByJob:filterByJobSlice,
        selectedJob:selectedJobSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch