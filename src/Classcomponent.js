import React, { Component } from 'react'

export default class Classcomponent extends Component {
    render() {
        return (
            <div>
                <hi>Hi i am Classcomponent</hi>
                <h2> I am props {this.props.name} </h2>
                <h3>I am ankit jain {this.props.name2}</h3>
            </div>
        )
    }
}
