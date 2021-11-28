import React, { Component } from 'react'

export class DestructuringProps extends Component {
    render() {
        const {fullName} = this.props
        return (
            <div>
                <p><b><i>Destructuring With Props :</i></b>  Hello <b>{fullName}</b></p>
            </div>
        )
    }
}

export default DestructuringProps
