import React from 'react';
import '../App.css';

export default class Message extends React.Component {
  render() {
    const { tome, username, message } = this.props
    
    return (
      <div className={`message ${tome}`}>
        <div className='user-name'>{username}</div>
        <div className='message-body'>{message}</div>
      </div>
    );
  }
}