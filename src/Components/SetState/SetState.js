import React, { Component } from 'react'

export class SetState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0             
        }
    }
    

    increment(){
        // (prevState , props) => ... 2 parameter
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
        console.info(this.state.count);
    }

    render() {
        return (
            <div>
                <div><b><i>SetState : </i></b>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default SetState
