import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

module.exports = connect((state) => ({
  todoNumber: state.todos.count((todo) => !todo.completed)
}))(HeaderContainer);
