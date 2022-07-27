import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name: 'user',
    initialState:{
        userData: {
            name: '',
            email:'',
            password: '',
        },

        userDataCards: [
            { 
                name: '',
                number: '',
                data: '',
                security:'',
                zipCode:''
            },
        ],

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
        saveCard:(state, action)=>{
            console.log(action)
            return {
                ...state, userDataCards: [ ...state.userDataCards, action.payload]
            }
        }
    }
    
})

export const{
    setLogin,
    setUserData,
    saveCard
} = userSlice.actions

export default userSlice.reducer