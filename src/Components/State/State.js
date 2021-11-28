import React, { Component } from 'react'

export class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: "Muhammad",
             middleName: "Ali",
             lastName: "Albair"
        }
    }
    

    render() {
        return (
            <div>
            <p> <b><i>With State : </i></b>Welcome <b>{this.state.firstName} {this.state.middleName} {this.state.lastName}</b>  </p>
        </div>
        )
    }
}

export default State
