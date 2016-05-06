import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo } from '../actions/TodoActions';

class AddTodoInputContainer extends React.Component {
  render() {
    const { addTodo, ...rest } = this.props;
    return (
      <Input
        placeholder="新增待辦事項 :p"
        returnKeyType="send"
        {...rest}
        onSubmitText={addTodo} />
    );
  }
}

module.exports = connect(
  undefined,
  (dispatch) => bindActionCreators({ addTodo }, dispatch)
)(AddTodoInputContainer);
