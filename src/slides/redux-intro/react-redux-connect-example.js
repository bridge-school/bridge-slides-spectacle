import React from "react";
import { connect } from 'react-redux';
import { ADD_TODO } from './action-example';

export class StatefulComponent extends React.Component {
  render() {
    return (
      <div>
        Add a ToDo: <input type="button" name="Add" onClick={this.props.addToDo()} />
        {/* This is the todos object from your reducer which mapStateToProps lets you to access. Since todos is an an array hence we are only displaying the first element */}
        {/* Display the todos here: */}
        {this.props.todos[1]}
      </div>
    );
  }
}

// whatever we declare in mapStateToProps and mapDispatchToProps, we can obtain those as props in our component.
const mapStateToProps = (state, ownProps) => ({
  // you can access the redux store state here from what you saw in the reducers
  // look at your reducer file to see how you can access redux store state here
  todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // invokes the action to update the todo but it is our job to give it the necessary text from our textbox above but for now, our action does not take any text so we will always add a todo called `Go to the swimming pool`
  addToDo: () => dispatch(ADD_TODO())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatefulComponent);