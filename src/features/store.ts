import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobs/jobSlice";
import companySlice from "./companies/companySlice";

export const store = configureStore({
    reducer:{
        jobs:jobSlice,
        companies:companySlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch