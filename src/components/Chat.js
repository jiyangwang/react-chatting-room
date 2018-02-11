import React from 'react';

import Message from './Message'
import MessageInput from './MessageInput'

export default class Chat extends React.Component {
  componentDidMount() {
    const messageList = document.getElementsByClassName('message-list')
    messageList.scrollTop = messageList.scrollHeight;
  }

  onSend(message) {
  }

  render() {
    const { messages } = this.props
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
        <h3>React Chatting Room</h3>
        <div className='message-list'>{messageList}</div>
        <MessageInput onSend={this.onSend} />
      </div>
    );
  }
}