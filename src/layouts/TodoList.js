'use strict';

import React, {Component,PropTypes} from 'React';
import { StyleSheet, ListView, View, Text, Dimensions } from 'react-native';
import Immutable from 'immutable';
import TodoItem from './TodoItem';

const ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
});


const {width,height} = Dimensions.get('window');

/**
 * todolist
 */
class TodoList extends Component {

	static propTypes = {
		todos: PropTypes.instanceOf(Immutable.List).isRequired,
		onToggle: PropTypes.func.isRequired,
		onEdit: PropTypes.func.isRequired,
		onDelete: PropTypes.func.isRequired
	};

	render() {
		const { todos } = this.props;
		const todoArray = todos.toArray();

		return (
			<ListView
				enableEmptySections
				initialListSize={todoArray.length}
				style={styles.todoList}
				dataSource={ds.cloneWithRows(todoArray)}
				renderRow={this._renderRow.bind(this)}
			/>
		);
	}

	_renderRow(todo) {
		const { onToggle, onEdit, onDelete } = this.props;
		console.log(this.props);
		return (
			<View style={styles.todoItem}>
				<TodoItem
					content={todo.content}
					completed={todo.completed}
					onToggle={()=>onToggle(todo.id)}
					onEdit={(content)=>onEdit(todo.id, content)}
					onDelete={()=>onDelete(todo.id)}
				/>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	todoList: {
		width: width - 40,
	    marginHorizontal: 16,
	    borderColor: 'rgba(0,0,0,0.3)',
	    borderWidth: 1,
	    paddingHorizontal: 5
	},
	todoItem: {
		paddingVertical: 8,
		borderBottomColor: 'rgba(0,0,0,0.12)',
		borderBottomWidth: 1
	}
});

module.exports = TodoList;