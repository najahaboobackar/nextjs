import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type initialState={
    value:AuthState;
} 
type AuthState={
    isAuth:Boolean,
    username:string,
    uid:string,
    isModerator:boolean,

}

const intialState={
    value:{
        isAuth:false,
        username:" ",
        uid:"",
        isModerator:false,
    } as AuthState,
}as initialState;
export const auth=createSlice({
    name:"auth",
    initialState,
    reducer:{
        logout :()=>{
            return initialState;
        },

    },
})