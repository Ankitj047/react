import React, {useRef, useState} from 'react'

export default function Refhooks() {
    const inputRef = useRef();
    const submit=() =>{
        inputRef.current.focus()
        inputRef.current.value=""
        console.log(inputRef.current.value)
    }

    return (
        <div>
             <h1>I am refrence</h1>
            <input type="text" placeholder='please type' ref={inputRef}/>
            <button onClick={submit}>submit</button>

        </div>
    )
    }
