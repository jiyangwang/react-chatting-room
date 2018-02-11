import React from 'react';

export default class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };

    this.onChangeMessageInput = this.onChangeMessageInput.bind(this);
    this.onSubmitMessageInput = this.onSubmitMessageInput.bind(this);
  }

  onChangeMessageInput(e) {
    this.setState({ input: e.target.value });
  }

  onSubmitMessageInput(e) {
    e.preventDefault();
    this.props.onSend(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state

    return (
      <form className='message-input' onSubmit={this.onSubmitMessageInput}>
        <input type='text'
          onChange={this.onChangeMessageInput}
          value={input}
          placeholder='Type someting here...'
          required='true'
        />  
      </form>
    );
  }
}