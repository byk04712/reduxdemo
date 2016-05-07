'use strict';

import React, {Component} from 'React';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Input from './Input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/TodoActions';

const {width,height} = Dimensions.get('window');

/**
 * 输入框
 */
class AddTodoInputContainer extends Component {

	render() {
		const { addTodo, ...rest } = this.props;
		console.log('输入框 ' , rest);
		return (
			<View style={styles.container}>
				<View style={styles.input}>
					<Input
						placeholder='新增带办事项'
						returnKeyType='send'
						{...rest}
						onSubmitText={addTodo}
					/>
				</View>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		height: 60
	},
	input: {
		width: width - 50,
		height: 40
	}
});

module.exports = connect(
	undefined,
	(dispatch) => bindActionCreators({ addTodo }, dispatch)
)(AddTodoInputContainer);