import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    handleCommentsChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                    value={this.state.comments} 
                    onChange={this.handleCommentsChange}
                    >

                    </textarea>
                </div>
                <button type="submit">Button</button>
            </form>
        )
    }
}

export default Form
