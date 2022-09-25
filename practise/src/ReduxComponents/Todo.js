import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {todoUpdate} from "../reducer/todoSlice"
import {useSelector} from "react-redux";
import Show from './Show';
function Todo() {
    const[value,setValue]=useState('')
    const dispatch=useDispatch()
    const onSubmit=(e)=>{
        e.preventDefault();
        if(value){
            dispatch(todoUpdate(value))
        }
        setValue("")
    }
    const data=useSelector(state=>state.todo)
    console.log(data,'fo')
  return (
    <div>
        <h1 className='title'>TodoList</h1>
        <form onSubmit={onSubmit}>
            <input className='input'
            type="text"
            placeholder='add a todo...'
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />
            <button className='btn' type="submit">Add</button>
        </form>
        {
            data.map((item,index)=><Show item={item} key={index} id={index} index={index}/>)
        }
        </div>
  )
}

export default Todo