import React, { Component } from 'react'
import MemoComp from './MemoComp'

export class ParentCompo extends Component {
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
                Parent Component
                <MemoComp username={this.state.username}/>
                {/* <RegComp username={this.state.username} /> 
                <PureComp username={this.state.username} /> */}
            </div>
        )
    }
}

export default ParentCompo
