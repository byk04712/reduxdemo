'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Platform, SwitchIOS, SwitchAndroid, TouchableOpacity } from 'react-native';
import Input from './Input';

/**
 * item
 */
class TodoItem extends Component {

	static propTypes = {
		content: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		onToggle: PropTypes.func.isRequired,
		onEdit: PropTypes.func.isRequired,
		onDelete: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			editable: false
		}
	}

	toggleEditable() {
		this.setState({
			editable: !this.state.editable
		});
	}

	render() {
		const {content, completed, onToggle, onEdit, onDelete } = this.props;
		const Switcher = Platform.OS === 'ios' ? SwitchIOS : SwitchAndroid;

		if (this.state.editable) {
			return <Input
				style={styles.editField}
				defaultValue={content}
				returnKeyType='send'
				autoFocus={true}
				onSubmitText={(content) => {
					if (content !== '') {
						onEdit(content);
					}
					this.toggleEditable();
				}}
				onBlur={this.toggleEditable.bind(this)}
			/>
		}

		return (
			<View style={styles.container}>
				<Switcher
					style={styles.checkbox}
					value={completed}
					onValueChange={onToggle}
				/>
				<TouchableOpacity
					style={styles.contentContainer}
					onLongPress={this.toggleEditable.bind(this)}
				>
					<Text style={[styles.content, completed && styles.completed]}>
						{content}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={onDelete}
				>
					<Text style={styles.deteleBtn}>X</Text>
				</TouchableOpacity>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 4
	},
	checkbox:{
		marginRight: 8
	},
	contentContainer: {
	    flex: 1,
	    marginRight: 8
	},
	content: {
		fontSize: 15,
		color: 'rgba(0,0,0,0.87)'
	},
	completed: {
		fontStyle: 'italic',
		fontWeight: '300',
		color: 'rgba(0,0,0,0.54)',
		textDecorationLine: 'line-through'
	},
	deteleBtn: {
		paddingHorizontal: 16,
	    fontSize: 15,
	    color: '#ff4081'
	},
	editField: {
		height: 39
	}
});

module.exports = TodoItem;