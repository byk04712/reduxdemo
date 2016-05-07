'use strict';

import React, {Component} from 'React';
import { StyleSheet, View, Text } from 'react-native';
import {bindActionCreators} from 'redux';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {editTodo, toggleTodo, deleteTodo} from '../actions/TodoActions';

/**
 * 列表
 */
class TodoListContainer extends Component {

	render() {
		return (
			<View style={styles.container}>
				<TodoList
					{...this.props}
					todos={this.props.todos}
					onToggle={this.props.toggleTodo}
					onEdit={this.props.editTodo}
					onDelete={this.props.deleteTodo}
				/>
				<Text style={styles.tip}>长按任务栏可进行编辑</Text>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {flex:1,marginBottom: 15, alignItems: 'center'},
	tip: {color:'#999',marginTop:5}
});

module.exports = connect(
	(state) => ({todos: state.todo}),
	(dispatch) => bindActionCreators({editTodo, toggleTodo, deleteTodo}, dispatch)
)(TodoListContainer);