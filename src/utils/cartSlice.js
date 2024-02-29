import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", // name of the slice
    initialState: {
        items: [] // initial state of the slice
    },
    reducers:{
        addItems(state, action){
            // in rtk directly mutating the state rtk uses immer behind the scenes its makes easier
            state.items.push(action.payload)
        },
        removeItem(state,action){
            state.items.pop()
        },
        clearCart(state,action){
            state.items.length = 0
            // return {items : []} 
        }
    }
})

// exporting actions and reducer
// {actions: additems, removeitems,clcart, reducers: ....} = cartSlice
// cartslice is like big object it has reducer and actions properties

export const {addItems, removeItem, clearCart } = cartSlice.actions; 
export default cartSlice.reducer;