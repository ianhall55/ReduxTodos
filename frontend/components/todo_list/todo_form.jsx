import React from 'react';


export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="Title"
          onChange={this.update('title')}/>
        <input
          type="text"
          value={this.state.body}
          placeholder="Body"
          onChange={this.update('body')}/>
        <button>Create Todo</button>
      </form>
    );
  }
}
