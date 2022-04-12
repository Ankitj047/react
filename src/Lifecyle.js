import React, { Component } from 'react'

export default class lifecyle extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {   //method runs after the component output has been rendered to the DOM.
      }
    
      componentWillUnmount() {
      }
    
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
