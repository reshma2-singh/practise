import React from 'react'
import {useSelector} from "react-redux"
function Form() {
    const data=useSelector(state=>state.todo)
    console.log(data,'form')
  return (
    <div>Form</div>
  )
}

export default Form