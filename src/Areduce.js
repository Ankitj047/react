import React, {useReducer} from 'react'


export default function Areduce() {
const initialstate = 0

const reducer = (state,action)=>{
    if (action.type == "increment") {
        return state+1
    }

    if (action.type == "Decremnet") {
        return state-1
    }
}


const [state,dispatch]= useReducer(reducer,initialstate)


    return (
        <div>
            <button onClick={()=>dispatch({type:"increment"})}>Inc</button> <span> {state} </span>
            <button onClick={()=>dispatch({type:"Decremnet"})}>Dec</button>

        </div>
    )
}
