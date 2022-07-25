import { createSlice } from "@reduxjs/toolkit";

const sliceComponents= createSlice({
    name: 'components',
    initialState:{
        listItems: []
    },
    reducers:{
        addAllItems:(state, actions)=>{
            console.log(actions.payload)
            return {...state, listItems: [...actions.payload]}
        },
    }
})

export const {
    addAllItems
} = sliceComponents.actions

export default sliceComponents.reducer