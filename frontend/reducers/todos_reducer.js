import React from 'react';
import {TODO_CONSTANTS} from '../actions/todo_actions';
import merge from 'lodash/merge';

// const defaultState = {
//   "1": {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   "2": {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };

const todosReducer = (state = {}, action) => {
  switch(action.type){
    case TODO_CONSTANTS.RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo =>( newState[todo.id] = todo));
      return newState;
    case TODO_CONSTANTS.RECEIVE_TODO:
      const newtodo = {[action.todo.id] : action.todo};
      const nexState = merge({}, state , newtodo);
      return nexState;
    case TODO_CONSTANTS.REMOVE_TODO:
      const nState = merge({}, state);
      delete nState[action.todo.id];
      return nState;
    default:
      return state;
  }
};

export default todosReducer;
