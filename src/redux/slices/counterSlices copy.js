//Contain create slices
//Mapping

import { createSlice } from "@reduxjs/toolkit";
// import { counterSlices } from "./counterSlices";


const initialState = {
    value: 0,
};

export const counterSlices = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value++;
        },
        decrement: (state, action) => {
            state.value--;
        },
        increaseByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

//Generate the action creators
export const { increment, decrement, increaseByAmount } = counterSlices.actions;

//Export reducers
export default counterSlices.reducer;