import React from 'react';


export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle (e) {
    e.preventDefault();
    this.props.toggleTodo();
  }
  handleDelete (e) {
    e.preventDefault();
    this.props.destroyTodo(this.props.todo);
  }
  render () {
    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.handleToggle}>Toggle</button>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}
