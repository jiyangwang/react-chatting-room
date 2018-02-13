import React from 'react';
import '../App.css';

export default class Message extends React.Component {
  render() {
    const { me, username, message } = this.props

    return (
      <div className={`message ${me ? 'me' : 'tome'}`}>
        <div className='user-name'>{username}</div>
        <div className='message-body'>{message}</div>
      </div>
    );
  }
}