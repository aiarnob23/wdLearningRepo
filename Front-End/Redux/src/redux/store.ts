import { configureStore } from "@reduxjs/toolkit";
import countreReducer from "./features/counterSlice"

export const store = configureStore({
    reducer: {
        counter:countreReducer,
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch