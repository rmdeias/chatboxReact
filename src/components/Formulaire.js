import React, { Component } from 'react'

export default class Formulaire extends Component {
    
    state ={
        message:''
    }
    
    createMessage = ()=>{
        const{addMessage,pseudo} = this.props

        const message ={
            pseudo,
            message: this.state.message
        }
        addMessage(message)
        this.setState({message: ''})
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.createMessage()

    }

    handleChange = (event) =>{
        const message=event.target.value
        this.setState({message})
    }

    render() {
        return (
            <form className='form' onSubmit ={this.handleSubmit}>
                <textarea onChange={this.handleChange}
                required
                value ={this.state.message}
                maxLength='140'/>

                <div className='info'>
                    140
                </div>

                <button type="submit">
                    Envoyer
                </button> 
            </form>
        )
    }
}
