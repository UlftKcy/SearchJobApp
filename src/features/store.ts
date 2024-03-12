import { configureStore } from "@reduxjs/toolkit";
import companySlice from "./companies/companySlice";
import filterByJobSlice from "./search/filterByJobSlice";
import jobsWithCompanySlice from "./jobs/jobsWithCompanySlice";

export const store = configureStore({
    reducer:{
        jobsWithCompany:jobsWithCompanySlice,
        companies:companySlice,
        filterByJob:filterByJobSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch