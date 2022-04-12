// State is private and fully controlled by the component
// in class component constructor is first method
// we can create state only in class component
// mutation-possible to update/modify the state
// infact state are used for storing private data
// setState() used to update state


import React, { Component } from 'react'

export default class StateClassComponent extends Component {
    constructor()
    {
        super();
        this.state={data:1}
    }

updateAnkit()
{

    this.setState({data:this.state.data+1})
}
updateKajal ()
{
    this.setState({data:this.state.data-1})
}

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.updateAnkit()} >Please click here</button> 
                <button onClick={()=>this.updateKajal()}>decrement</button>
            </div>
        )
    }
}
