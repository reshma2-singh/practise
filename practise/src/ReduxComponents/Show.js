import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {todoRemove, toggleComplete} from "../reducer/todoSlice"
function Show({item,id},index) {
    const dispatch=useDispatch();
   
  return (
    <div className='todoCard'>
          <input type="checkbox"
        onClick={()=>dispatch(toggleComplete({id:id}))} 
        />
        <p className='item'>{item}</p>
      
        <input type="date"/>
        <button className='btnn' onClick={()=>dispatch(todoRemove({id:id}))}>delete</button>
    </div>
  )
}

export default Show