import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.info(`Button Clicked`)
    }

    render() {
        return (
            <div>
                <b><i>Event Handling with Class : </i></b><button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick
