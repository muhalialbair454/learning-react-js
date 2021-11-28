import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {

    /*Mounting
        The mounting phase is when the component is inserted into the real DOM 
        and it has four built-in methods that are called in this order

        1. constructor()
        2. getDerivedStateFromProps()
        3. render()
        4. componentDidMount()

        https://www.w3schools.com/react/react_lifecycle.asp
        https://medium.com/@rachid1982fsb/react-component-mounting-lifecycle-methods-3b1527878850
    */

    constructor(props) {
        super(props)
    
        this.state = {
             username: `Muhammad Ali Albair`
        }
        console.info(`LifecycleA constructor`)
    }
    
    static getDerivedStateFromProps(props, state){
        console.info(`LifecycleA getDerivedStateFromProps`)
        return null;
    }

    componentDidMount(){
        console.info(`LifecycleA componentDidMount`)
    }

    render() {
        console.info(`LifecycleA render`);
        console.info(`----------------------------------------------`)
        return (
            <div>
                <p><b><i>Component Mounting Lifecycle Methods :</i></b> LifecycleA</p>
                
                <LifecycleB /> 
            </div>
        )
    }
}

export default LifecycleA
