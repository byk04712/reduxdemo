'use strict';

import React, {Component, PropTypes} from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * 头
 */
class Header extends Component {

	static propTypes = {
		username: PropTypes.string,
		todoCount: PropTypes.number
	}

	static defaultProps = {
		username: '路人甲',
		todoCount: 0
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Todos</Text>
				<Text style={styles.subTitle}>
					嗨，
					<Text style={styles.username}>{this.props.username}</Text>：您今天有 
					<Text style={styles.count}> {this.props.todoCount}</Text> 条待办任务！
				</Text>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 32,
		paddingBottom: 8,
		paddingHorizontal: 16
	},
	title: {
		fontWeight: 'bold',
		fontSize: 45,
		textAlign: 'center',
		paddingBottom: 16
	},
	subTitle: {
		fontWeight: '300',
		fontSize: 17,
		color: 'rgba(0,0,0,0.54)'
	},
	username: {
		fontWeight: 'bold',
		color: '#333'
	},
	count: {
		color: 'red'
	}
});

module.exports = Header;