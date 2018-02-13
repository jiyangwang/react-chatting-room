import React, { Component } from 'react';
import './App.css';

import Chat from './components/Chat';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      login: false,
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
    const { login, username } = this.state
    const disabled = !username || !username.length

    if (login) {
      return (
        <div className='app'>
          <h1>React Chatting Room</h1>
          <Chat username={username} />  
        </div>
      );
    }

    return (
      <div className='app'>
        <h1>React Chatting Room</h1>
        <form className='login' onSubmit={this.onSubmitUserName}>
            <input
              type='text'
              onChange={this.onChangeUserName}
              placeholder='Please enter your name...'
            />
            <input type='submit' disabled={disabled} value='Submit' />
        </form>
      </div>  
    );
  }
}

export default App;
