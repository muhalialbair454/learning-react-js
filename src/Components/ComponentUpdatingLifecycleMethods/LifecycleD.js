import React, { Component } from 'react'

export class LifecycleD extends Component {

    /*Update
        The next phase in the lifecycle is when a component is updated.

        A component is updated whenever there is a change in the component's state or props.

        React has five build-in methods that gets called, in this order, when a component is updated:

        1. getDerivedStateFromProps()
        2. shouldComponentUpdate()
        3. render()
        4. getSnapshotBeforeUpdate()
        4. componentDidUpdate()

        https://www.w3schools.com/react/react_lifecycle.asp
        https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d
    */

    constructor(props) {
        super(props)
    
        this.state = {
             username: `Muhammad Ali Albair`
        }
        console.info(`LifecycleD constructor`)
    }
    
    static getDerivedStateFromProps(props, state){
        console.info(`LifecycleD getDerivedStateFromProps`)
        return null;
    }

    componentDidMount(){
        console.info(`LifecycleD componentDidMount`)
    }

    shouldComponentUpdate(){
        console.info(`LifecycleD shouldComponentUpdate`)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.info(`LifecycleD getSnapshotBeforeUpdate`)
        return null
    }

    componentDidUpdate(){
        console.info(`LifecycleD componentDidUpdate`)
    }
    

    render() {
        console.info(`LifecycleD render`);
        console.info(`----------------------------------------------`)
        return (
            <div>
                <p><b><i>Component Updating Lifecycle Methods :</i></b> LifecycleD</p>
            </div>
        )
    }
}

export default LifecycleD
