import React from 'react';
import {connect} from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selector';
import {requestTodos, toggleTodo, destroyTodo, createTodo} from '../../actions/todo_actions';
import TodoForm from './todo_form';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos()),
  toggleTodo: (todo) => dispatch(toggleTodo(todo)),
  destroyTodo: (todo) => dispatch(destroyTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
