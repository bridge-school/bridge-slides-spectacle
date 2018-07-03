// We need createStore to creat the store and also applyMiddleware to apply middleware to our redux store
import { createStore, applyMiddleware } from 'redux';

// This is the `thunk` middleware
import thunk from 'redux-thunk';

// We import our existing root reducer here.
import { rootReducer } from './store';

// We use applyMiddleware to create store based on
// the thunk middleware.
export const initializeStore = () =>
  createStore(rootReducer, undefined, applyMiddleware(thunk));
