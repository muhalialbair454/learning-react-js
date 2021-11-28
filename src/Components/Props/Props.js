import React, { Component } from 'react'

export class Props extends Component {
    render() {
        return (
            <div>
                <p> <b><i>With Props : </i></b>Welcome <b>{this.props.firstName} {this.props.middleName} {this.props.lastName}</b>  </p>
            </div>
        )
    }
}

export default Props
