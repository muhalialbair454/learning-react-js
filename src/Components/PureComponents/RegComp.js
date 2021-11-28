import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.info(`Regular Component render`)
        return (
            <div>
                Regular Component {this.props.username}
            </div>
        )
    }
}

export default RegComp

