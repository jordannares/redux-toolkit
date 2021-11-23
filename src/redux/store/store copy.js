import { configureStore } from '@reduxjs/toolkit'
// import counterSlices from '../slices/counterSlices';
import counterReducer from '../slices/counterSlices';

const store = configureStore({
    reducer:{
        counter: counterReducer,
    },
});

export default store;
