import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.cbRef = null //cb = callback
        this.setCbRef =  element => {
            this.cbRef = element
        }
    }
    
    componentDidMount(){
        if(this.cbRef){ // with callback, no need current()
            this.cbRef.focus()
        }
        // this.inputRef.current.focus() // without callback
        // console.info(this.inputRef)
    }

    clickHandler = () => {
        if(this.inputRef.current.value){ // if hanya saya yang nambahin sebenarnya hanya alert(this.inputRef.current.value)
            alert(this.inputRef.current.value)
        }else{
            alert(this.cbRef.value)
        }
    }

    render() {
        return (
            <div>
                <b><i>Refs :</i></b>
                <h1>
                Refs Demo
                </h1>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
