import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: `2sec`
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                username: `Muhammad Ali Albair`
            })
        }, 2000)
    }
    
    render() {
        console.info(`==============================Parent Component Render==============================`)
        return (
            <div>
                <div>
                <b><i>Pure Component Example :</i></b>
                </div>
                Parent Component
                <RegComp username={this.state.username} /> 
                <PureComp username={this.state.username} />
            </div>
        )
    }
}

export default ParentComp
