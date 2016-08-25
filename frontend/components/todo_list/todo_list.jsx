import React from 'react';
import TodoListItem from './todo_list_items';
import TodoForm from './todo_form';



class TodoList extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const todos = this.props.todos.map(todo => {
      return <TodoListItem todo={todo} key={todo.id} toggleTodo={this.props.toggleTodo} destroyTodo={this.props.destroyTodo} />;
    });

    return (
      <ul>
        <TodoForm createTodo={this.props.createTodo}/>
        {todos}
      </ul>
    );
  }
}

export default TodoList;
