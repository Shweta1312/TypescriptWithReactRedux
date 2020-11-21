import { connect } from 'react-redux';
import React from 'react';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hello there!</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

//connect() function connects a React component to a Redux store
export const App = connect(mapStateToProps, { fetchTodos })(_App);
