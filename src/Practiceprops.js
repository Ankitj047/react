import React from 'react'
import Classcomponent from './Classcomponent'
export default function practiceprops(props) {
    return (
        <div>
            <h1>Hi I am from props {props.about}</h1>
            <h2>Hi i am from props array {props.name}</h2>
            <h3>hi i am from {props.def}</h3>
<Classcomponent name2={props.about} ></Classcomponent>
        </div>
    )
}

practiceprops.defaultProps = {
    def: "I am from default"
}

// practiceprops.Prototype={
//     about: protoType.string,
// }