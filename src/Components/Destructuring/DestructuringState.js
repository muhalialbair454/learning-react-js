import React, { Component } from 'react'

export class DestructuringState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName:"Muhammad Ali Albair"
        }
    }
    

    render() {
        const {fullName} = this.state
        return (
            <div>
                <p><b><i>Destructuring With State :</i></b>  Hello <b>{fullName}</b></p>
            </div>
        )
    }
}

export default DestructuringState
