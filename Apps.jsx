import React, { useState } from "react"

const Apps=()=>{
    const[InpItem,SetInpItem]=useState("")
    const[InsideBox,SetInsideBox]=useState([])
    const InputEvent=(event)=>{
        const value=event.target.value
        SetInpItem(value)
    }
    const submit=()=>{
        SetInsideBox((PreValue)=>{
            return[...PreValue,InpItem]
        })
        SetInpItem("")
    }
    return(
        <>
        <h1>To do Application</h1>
        <input type="text" name="" id="" value={InpItem} onChange={InputEvent} />
        <button onClick={submit}>Add</button>
        {InsideBox.map((val,ind)=>{
            return <li key={ind}>{val}</li>
            })}
        </>
    )
}

export default Apps;
