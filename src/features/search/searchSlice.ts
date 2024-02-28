import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText : ""
}

const searchSlice = createSlice({
    name:"search",
    initialState:initialState,
    reducers:{
        searchQuery:(state,action)=>{
            state.searchText = action.payload;
        }
    }

})

export const {searchQuery} = searchSlice.actions;
export default searchSlice.reducer;