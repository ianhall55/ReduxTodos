import React from 'react';
import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const configureStore = () =>(createStore(rootReducer, MasterMiddleware));

export default configureStore;
