import Immutable from 'immutable';
import shortid from 'shortid';
import ActionTypes from '../constants/ActionTypes';


const TodoRecord = Immutable.Record({
	id: null,
	content: null,
	completed: false
})


const _createTodoRecord = (todo) => new TodoRecord({
	id: shortid(),
	content: todo.content,
	completed: todo.completed || false
});


const initialState = [
	{ content: '初学redux体验' },
	{ content: 'redux真神奇' },
	{ content: '还是要多动手敲代码' },
	{ content: '完结了', completed: true }
].map(_createTodoRecord);


const _findIndexById = (todos, id) => todos.findIndex((todo) => todo.id === id);


const _toggleTodo = (todos, id) =>
	todos.update(_findIndexById(todos, id), (todo) => todo.set('completed', !todo.completed));


const _editTodo = (todos, id, content) =>
	todos.update(_findIndexById(todos, id), (todo) => todo.set('content', content));


const _deleteTodo = (todos, id) =>
	todos.delete(_findIndexById(todos, id));


const _addTodo = (todos, content) =>
	todos.push(_createTodoRecord({ content }));


module.exports = (state = Immutable.List(initialState), action) => {
	switch(action.type) {
		case ActionTypes.ADD_TODO:
			return _addTodo(state, action.content);
		case ActionTypes.TOGGLE_TODO:
			return _toggleTodo(state, action.id);
		case ActionTypes.EDIT_TODO:
			return _editTodo(state, action.id, action.content);
		case ActionTypes.DELETE_TODO:
			return _deleteTodo(state, action.id);
	}
	return state;
}