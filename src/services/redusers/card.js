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

        dellAllItems:(store)=>{
            return {
                ...store,
                cartItems: []
            }
        },

        closeOrOpenOrder: (store, actions)=>{
            return {
                ...store,  
                isOpenCard: !store.isOpenCard
            };
        }
    }
})

export const {
    addItems,
    dellItems,
    dellAllItems,
    closeOrOpenOrder
} = sliceCard.actions

export default sliceCard.reducer