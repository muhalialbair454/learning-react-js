import React, { Component } from 'react'

export class FormHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: "",
            comments: "",
            skills: ""
        }
    }

    handleUsernameChange = (event) => {
        this.setState ({
                username: event.target.value
        })
        // console.info(this.username)
    }

    handleCommentsChange = (event) => {
        this.setState ({
            comments: event.target.value
        })
        // console.info(this.comments)
    }

    
    handleSkillsChange = (event) => {
        this.setState ({
            skills: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username}. ${this.state.comments}. ${this.state.skills}.`)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <b><i>Form Handling :</i></b>

                    <div>
                        <label>Username : </label>
                        <input 
                            type="text" 
                            name="txtusername" 
                            id="txtusername" 
                            placeholder="username" 
                            value={this.state.username} 
                            onChange={this.handleUsernameChange}
                        />
                    </div>

                    <div>
                        <label>Comments : </label>
                        <textarea 
                            name="txtaComments" 
                            id="txtaComments"
                            placeholder="comments"
                            value={this.state.comments}
                            onChange={this.handleCommentsChange} >

                        </textarea>
                    </div>

                    <div>
                        <label>Skills : </label>
                        <select name="ddskills" id="ddskills" value={this.state.skills} onChange={this.handleSkillsChange}>
                            <option value="">Select One</option>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormHandling
