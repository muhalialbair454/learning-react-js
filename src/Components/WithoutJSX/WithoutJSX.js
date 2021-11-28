import React, { Component } from "react";


class WithoutJSX extends Component{
    render(){
        return React.createElement('h1', null, 'Without JSX')
    }
}

export default WithoutJSX