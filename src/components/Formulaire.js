import React, { Component } from 'react'

export default class Formulaire extends Component {
    
    state ={
        message:'',
        length: this.props.length,
        pseudo: this.props.pseudo,
        addMessage: this.props.addMessage
    }
    
    createMessage = ()=>{
        const { pseudo,addMessage} = this.state
        const length = this.props.length
        
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

    handleKeyUp = (event) =>{
        if(event.key === 'Enter'){
            this.createMessage()
        }
    }

    render() {
        return (
            <form className='form' onSubmit ={this.handleSubmit}>
                <textarea 
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
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
