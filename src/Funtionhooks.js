import React, {useState} from 'react'

export default function Funtionstate() {

const[Count,setCount]=useState(0)
const[Text,setText]=useState("Ankit")

    return (
        <div>
            <h1>{Count}</h1> 
            <button onClick={()=>setCount(Count+1)} >Incremetn state</button>
            <button  onClick={()=>setCount(Count-1)} >decrement state</button>
            <h2>{Text}</h2>
            <button onClick={()=>setText(Text + " " + "Jain")} >Name Change</button>
        </div>
    )
}
