'use strict';

import React, {Component} from 'React';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';

/**
 * 头部
 */
class HeaderContainer extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Header {...this.props}/>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		height: 140
	}
});



module.exports = connect(state => ({
	//获取待办任务
	todoCount: state.todo.count(todo => !todo.completed)
}))(HeaderContainer);