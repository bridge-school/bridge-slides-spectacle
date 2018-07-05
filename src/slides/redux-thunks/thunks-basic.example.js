import { ADD_TODO, ADD_TODO_ERROR } from '../redux-intro/action-example';

const addToDo = () => {
  // returns the function thunked -> with a dispatch so you can invoke redux actions and also getState to update state
  return function(dispatch, getState) {
    fetch('/addTodo')
      .then(res => res.json())
      .then(data => {
        // addToDos() is an action creator that gets called once we have perform the async call successfully
        dispatch(ADD_TODO());
      })
      .catch(err => {
        // addToDosError() is an action creator that gets called if something went wrong during an API call
        dispatch(
          ADD_TODO_ERROR('Oops! Something went wrong with the todos API'),
        );
      });
  };
};
