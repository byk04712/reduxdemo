'use strict';

import React, {Component} from 'React';
import { StyleSheet, TextInput } from 'react-native';

/**
 * 输入框
 */
class Input extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: undefined
		};
	}

	render() {
		const {style, onSubmitText, ...rest } = this.props;
		console.log('输入框 ' , rest);
		return (
			<TextInput
				style={[styles.textField, style]}
				{...rest}
				value={this.state.value}
				onChangeText={(value)=>this.setState({value})}
				onSubmitEditing={(event)=>{
					if (onSubmitText) {
						this.setState({value:''});
						onSubmitText(event.nativeEvent.text);
					}
				}}
			/>
		);
	}
	
}

const styles = StyleSheet.create({
	textField: {
		flex:1,
		padding: 8,
		fontSize: 15,
		borderWidth: 1,
		borderColor: '#CCC'
	}
});

module.exports = Input;