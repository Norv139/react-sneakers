import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name: 'user',
    initialState:{
        userData: {
            name: '',
            email:'',
            password: '',
        },
        isLogin:false
    },
    reducers:{
        setLogin:(state, action)=>{
            return {
                ...state, isLogin: action.payload
            }
        },
        setUserData:(state, action)=>{
            return {
                ...state, userData: action.payload
            }
        },
    }
    
})

export const{
    setLogin,
    setUserData
} = userSlice.actions

export default userSlice.reducer