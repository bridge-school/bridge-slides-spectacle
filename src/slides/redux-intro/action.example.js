export const ADD_TODO = () => ({
  type: 'ADD_TODO',
  text: 'Go to swimming pool',
});
export const ADD_TODO_ERROR = message => ({
  type: 'ADD_TODO',
  message,
});
export const TOGGLE_TODO = { type: 'TOGGLE_TODO', index: 1 };
export const SET_VISIBILITY_FILTER = {
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_ALL',
};
