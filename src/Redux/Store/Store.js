import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../CounterSlice/CounterSlice";
import AuthReducer from "../AuthSlice/AuthSlice";

export const store = configureStore ({
    reducer : {
        counter : CounterSlice,
        auth : AuthReducer,
    }
})