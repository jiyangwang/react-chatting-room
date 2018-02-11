import React, { Component } from 'react';
import './App.css';

import Chat from './components/Chat';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      login: false,
      messages: [],
    };

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onSubmitUserName = this.onSubmitUserName.bind(this);
  }

  onChangeUserName(e) {
    this.setState({ username: e.target.value })
  }

  onSubmitUserName(e) {
    e.preventDefault();
    this.setState({ login: true })
  }

  render() {
    const { login, messages } = this.state

    if (login) {
      return <Chat messages={messages} />
    }

    return (
      <form className='user-name' onSubmit={this.onSubmitUserName}>
        <h1>React Chatting Room</h1>
        <div>
          <input 
            type='text'
            onChange={this.onChangeUserName}
            placeholder='Enter your name...'
            require='true'
          />
          <input type='submit' value='Submit' />
        </div>
      </form>
    );
  }
}

export default App;
