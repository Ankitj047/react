import React from 'react'

function Firstprops(props) {
    return (
        <div>
            <h1>this is Ankit</h1>
            <h2>my name is {props.kname} and my age is {props.kage}</h2>
        </div>
    )
}


function Name1 () {
    return ( 
<div>
        <h1>Ankit</h1>
        <h2>Kajal</h2>
        </div>
    )
}

export {Firstprops,Name1}