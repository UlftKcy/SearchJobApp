import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobs/jobSlice";
import companySlice from "./companies/companySlice";
import allJobSlice from "./jobs/allJobSlice";

export const store = configureStore({
    reducer:{
        jobs:jobSlice,
        allJobs:allJobSlice,
        companies:companySlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch