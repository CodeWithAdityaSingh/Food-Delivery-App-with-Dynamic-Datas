

import { createSlice } from "@reduxjs/toolkit";


let createAppSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {


        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItems: (state, action) => {

            state.items.pop()
        },
        clearCart: (state, action) => {
            state.items.length = 0
        }


    }
})


export const { addItems, removeItems, clearCart } = createAppSlice.actions

export default createAppSlice.reducer