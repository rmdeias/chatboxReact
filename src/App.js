
import React, { Component } from 'react'
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import './App.css';


export default class App extends Component {
  
  state ={
    messages: {},
    pseudo:this.props.match.params.pseudo
  }
  addMessage = (message) => {
    const messages = { ...this.state.messages}
    messages['message-'+Date.now()] = message
    this.setState({messages})
  }
  
  render() {
    return (
      <div className="box">
      <div>
        <div className="messages">
         <Message/>
        </div>
      </div>
      <Formulaire pseudo={this.state.pseudo}
      addMessage ={this.addMessage} length = {150}/>
     </div>
    )
  }
}
