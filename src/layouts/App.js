'use strict';

import React, {Component} from 'React';
import { StyleSheet, View, Dimensions } from 'react-native';
import HeaderContainer from './HeaderContainer';
import AddTodoInputContainer from './AddTodoInputContainer';
import TodoListContainer from './TodoListContainer';


const {width,height} = Dimensions.get('window');


/**
 * 首页
 */
class App extends Component {

	render() {
		return (
			<View style={styles.container}>
				<HeaderContainer username='醉生梦死'/>
				<AddTodoInputContainer/>
				<TodoListContainer/>
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
	container:{flex:1,alignItems: 'center',width,height},
	inputContainer: {flex:1,marginBottom:8,paddingHorizontal:16}
});

module.exports = App;
