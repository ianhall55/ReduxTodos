import configureStore from './store/store';
import React from 'react';
import ReactDOM from 'react-dom';
import allTodos from './reducers/selector';
import {requestTodos, createTodo} from './actions/todo_actions';
import Root from './components/root';

const store = window.store = configureStore();

// window.allTodos = allTodos;
window.requestTodos = requestTodos;
window.createTodo = createTodo;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} /> , root);
});
