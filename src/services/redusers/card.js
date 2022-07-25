import { createSlice } from "@reduxjs/toolkit";

const sliceCard = createSlice({
    name: 'card',
    initialState:{
        cartItems: [],
        isOpenCard: false
    },
    reducers:{
        addItems:(state, actions)=>{
            console.log(actions.payload)
            return {...state, cartItems: [...state.cartItems, actions.payload]}
        },
        dellItems:(store, actions)=>{
            return {
                ...store,
                cartItems: [
                    ...store.cartItems.filter(cartItems => cartItems.title !== actions.payload),
                    ...store.cartItems.filter(cartItems => cartItems.title === actions.payload).slice(0,-1)
                ]
            }
        },
        closeOrOpenOrder: (state)=>{
            return {
                ...state,  
                isOpenCard: !state.isOpenCard
            };
        }
    }
})

export const {
    addItems,
    dellItems,
    closeOrOpenOrder
} = sliceCard.actions

export default sliceCard.reducer