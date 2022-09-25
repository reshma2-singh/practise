import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import { userUpdate,userReduce } from '../reducer/userSlice';
function User() {
  const[val,setVal]=useState(0)
  const data =useSelector(state=>state.user)
  const{name,amount,result}=data;
  const dispatch=useDispatch();
console.log(data);
function handleIncrease(){
dispatch(userUpdate(Number(val)))
}
function handleDecrease(){
  dispatch(userReduce(Number(val)))
}
  return (
    <div>
      <h1>Name:{data.name}</h1>
      <h1>Amount:{data.amount}</h1>
     
      <div>
        <input type="number" value={val} onChange={(e)=>setVal(e.target.value)}/>
      </div>
      <button onClick={handleIncrease}>add</button>
      <button onClick={handleDecrease}>subtract</button>
    </div>
  )
}

export default User