import { createSlice } from "@reduxjs/toolkit";

const HomeSlice=createSlice({
    name: "home",
    initialState:{
        url:{},
        genres:{}
    },
    reducers:{
        getApiConfiguration:(state,action)=>{
            state.url=action.payload



        },

        getGenres:(state,action)=>{
            state.url=action.payload

        }
    }
})

export const {getApiConfiguration,getGenres}=HomeSlice.actions;
export default HomeSlice.reducer;