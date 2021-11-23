//CreateThunk

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Actions

export const fetchPost = createAsyncThunk(
    "post/list",
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try{
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            return data;
        } catch(error) {
            return error?.response;
        }
    },
);

//Slices

const postSlices = createSlice({
    name:"post",
    initialState: {},
    extraReducers: {
        //Handle Pending State
        [fetchPost.pending]: ( state, action )=>{
            state.loading = true;
        },
        //Handle Fulfilled
        [fetchPost.fulfilled]: ( state, action )=>{
            state.postsList = action.payload;
            state.loading = false; 
        },
        //Handle Rejection
        [fetchPost.rejected]: ( state, action )=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default postSlices.reducer;