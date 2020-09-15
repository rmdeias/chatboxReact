import React, { Component } from 'react'

export default class Formulaire extends Component {
    
    state ={
        message:'',
        length: this.props.length,
        pseudo: this.props.pseudo,
        addMessage: this.props.addMessage
    }
    
    createMessage = ()=>{
        const {length, pseudo,addMessage} = this.state
        
        const message ={
            pseudo,
            message: this.state.message
        }
        addMessage(message)
        this.setState({message: '', length})
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.createMessage()

    }

    handleChange = (event) =>{
        const message=event.target.value
        const length = this.props.length - message.length
        this.setState({message , length})

    }

    render() {
        return (
            <form className='form' onSubmit ={this.handleSubmit}>
                <textarea onChange={this.handleChange}
                required
                value ={this.state.message}
                maxLength= {this.props.length}/>

                <div className='info'>
                    {this.state.length}
                </div>

                <button type="submit">
                    Envoyer
                </button> 
            </form>
        )
    }
}
