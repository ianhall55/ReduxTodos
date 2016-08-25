import {TODO_CONSTANTS, requestTodos,
   receiveTodos, receiveTodo, removeTodo} from '../actions/todo_actions';
import {fetchTodos, createTodo,
   destroyTodo, updateTodo} from '../util/todo_api_util';

export default (store) => next => action => {
  let success;
  switch (action.type) {
    case TODO_CONSTANTS.REQUEST_TODOS:
      success = (todos) => (store.dispatch(receiveTodos(todos)));
      fetchTodos(success);
      return next(action);
    case TODO_CONSTANTS.CREATE_TODO:
      success = (todo) => (store.dispatch(receiveTodo(todo)));
      createTodo(action.todo, success);
      return next(action);
    case TODO_CONSTANTS.UPDATE_TODO:
      success = (todo) => (store.dispatch(receiveTodo(todo)));
      updateTodo(action.todo, success);
      return next(action);
    case TODO_CONSTANTS.DESTROY_TODO:
      success = (todo) => (store.dispatch(removeTodo(todo)));
      destroyTodo(action.todo, success);
      return next(action);
    default:
      return next(action);
  }
};
