import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: { // this reducer is a apps big reducer
        cart: cartReducer // it consist of small reducers from the slices
    }
})
export default appStore;