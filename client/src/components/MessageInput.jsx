import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="input-field col s12">
        <input
          className="validate"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          placeholder="e.g Hi"
          required
        />
        <label htmlFor="name"> Message</label>
      </div>
    );
  }
}

export default MessageInput;
