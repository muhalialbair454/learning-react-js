import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        // ConditionalRendering 1:
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <p> <b><i>Conditional Rendering(true) : </i></b> Welcome <b>Muhammad Ali Albair</b></p>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             <p> <b><i>Conditional Rendering(false) : </i></b> Welcome <b>Guest</b></p>
        //         </div>
        //     )
        // }

        // ConditionalRendering 2:
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div><p> <b><i>Conditional Rendering(true) : </i></b> Welcome <b>Muhammad Ali Albair</b></p></div>
        // }else{
        //     message = <div><p> <b><i>Conditional Rendering(false) : </i></b> Welcome <b>Guest</b></p></div>
        // }

        // return(
        //     <div>{message}</div>
        // )

        // recommended : 3-4 (make simple code)

        // ConditionalRendering 3:
        // return(
        //     this.state.isLoggedIn ? 
        //     <div><p> <b><i>Conditional Rendering(true) : </i></b> Welcome <b>Muhammad Ali Albair</b></p></div> :
        //     <div><p> <b><i>Conditional Rendering(false) : </i></b> Welcome <b>Guest</b></p></div>
        // )

        return this.state.isLoggedIn ? (
            <div><p> <b><i>Conditional Rendering(true) : </i></b> Welcome <b>Muhammad Ali Albair</b></p></div> 
        ) : (
            <div><p> <b><i>Conditional Rendering(false) : </i></b> Welcome <b>Guest</b></p></div> 
        )
    }
}

export default ConditionalRendering
