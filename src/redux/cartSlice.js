import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:["vada pav", "samosa"]
    },
    reducers:{
        addItem:(state, action) => {
            state.cartItems.push(action.payload)
        },  
        removeItem:(state,action)=>{
            state.cartItems.pop(action.payload)
        },
        clearCart:(state) => {
            state.cartItems.length = 0 // []
        }
    }
})

export const { addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer;