import {createSlice} from "@reduxjs/toolkit";

export const todoSlice=createSlice({
name:'todo',
initialState:[],
reducers:{
    todoUpdate:(state,action)=>{
    state.push(action.payload)
       
    },
    todoRemove:(state,action)=>{
        return [...state.slice(0, action.payload.id), ...state.slice(action.payload.id + 1)]
        
    
    },
    toggleComplete:(state,action)=>{
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        console.log(index,'in')
        // state[index]=action.payload
    }
   
}
})
export const {todoUpdate,todoRemove, toggleComplete}= todoSlice.actions;
export default todoSlice.reducer