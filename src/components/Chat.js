import React from 'react';
import io from 'socket.io-client';
import '../App.css';
import config from '../config';

import Message from './Message'
import MessageInput from './MessageInput'

export default class Chat extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onSend = this.onSend.bind(this);

    // Connect to the server
    this.socket = io(config.api, { query: `username=${props.username}` }).connect();

    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  componentDidMount() {
    const messageList = document.getElementsByClassName('message-list')
    messageList.scrollTop = messageList.scrollHeight;
  }

  onSend(message) {
    const messageObject = {
      username: this.props.username,
      message,
    };

    // Emit the message to the server
    this.socket.emit('client:message', messageObject);

    messageObject.tome = 'tome';
    this.addMessage(messageObject);
  }

  addMessage(message) {
    const { messages } = this.state
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    const { messages } = this.state
    const messageList = messages.map((message, idx) => {
      return (
        <Message 
          key={idx}
          tome={message.tome}
          username={message.username}
          message={message.message}
        />
      )    
    })

    return (
      <div className='container'>
        <div className='message-list'>{messageList}</div>
        <MessageInput onSend={this.onSend} />
      </div>
    );
  }
}