import {createSlice} from "@reduxjs/toolkit";
const userState={
    name:'peter',
    amount:1000,
  
    
}
export const userSlice=createSlice({
name:'user',
initialState:userState,
reducers:{
   userUpdate:(state,action)=>{
    console.log(action.payload,'val')
    console.log(state.amount,'am')
    state.amount =state.amount+action.payload
   } ,
   userReduce:(state,action)=>{
    state.amount =state.amount-action.payload
   }
   
}
})
export const {userUpdate,userReduce}= userSlice.actions;
export default userSlice.reducer