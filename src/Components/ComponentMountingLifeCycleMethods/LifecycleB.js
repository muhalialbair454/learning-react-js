import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: `Muhammad Ali Albair`
        }
        console.info(`LifecycleB constructor`)
    }
    
    static getDerivedStateFromProps(props, state){
        console.info(`LifecycleB getDerivedStateFromProps`)
        return null;
    }

    componentDidMount(){
        console.info(`LifecycleB componentDidMount`)
    }

    render() {
        console.info(`LifecycleB render`);
        return (
            <div>
                <p><b><i>Component Mounting Lifecycle Methods :</i></b> LifecycleB</p>
            </div>
        )
    }
}

export default LifecycleB
