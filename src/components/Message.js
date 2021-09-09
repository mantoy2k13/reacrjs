import React, { Components } from 'react' 
import { Component } from 'react'
class Message extends Component {
    
    constructor(props){
        super(props)
        this.state={
            count : 0 
        }
    }
    
    additional(){
        this.setState((preveState) => ({
            count: preveState.count + 1
        }))

        console.log(this.state.count)
    }
    increment(){
        this.additional()
        this.additional()
        this.additional()
        this.additional()
        this.additional()
    }
    render (){
        return (
            <div>
                <div>Count - {this.state.count}   </div> 
                <button  onClick={ () => this.increment()}> Count On </button>
                
            </div>
        )
    }
}

export default Message