import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Jabirullah"
        }

        // Binding Event Handlers
        this.sayHi = this.sayHi.bind(this)
    }
    
    sayHi(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <b><i>Method as Props :</i></b> 
                <ChildComponent sayHi={this.sayHi}/>
            </div>
        )
    }
}

export default ParentComponent
