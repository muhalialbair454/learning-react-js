import React, { Component } from 'react'
import LifecycleD from './LifecycleD'

export class LifecycleC extends Component {

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
        console.info(`LifecycleC constructor`)
    }
    
    static getDerivedStateFromProps(props, state){
        console.info(`LifecycleC getDerivedStateFromProps`)
        return null;
    }

    componentDidMount(){
        console.info(`LifecycleC componentDidMount`)
    }

    shouldComponentUpdate(){
        console.info(`LifecycleC shouldComponentUpdate`)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.info(`LifecycleC getSnapshotBeforeUpdate`)
        return null
    }

    componentDidUpdate(){ // lebih sering digunakaan pada updating lifecycle
        console.info(`LifecycleC componentDidUpdate`)
    }

    changeState = () => {
        this.setState({
            username: `Codevolution`
        })
    }

    render() { // lebih sering digunakaan pada updating lifecycle
        console.info(`LifecycleC render`);
        return (
            <div>
                <p><b><i>Component Updating Lifecycle Methods :</i></b> LifecycleC</p>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleD />
            </div>
        )
    }
}

export default LifecycleC
