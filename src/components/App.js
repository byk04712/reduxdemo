import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import HeaderContainer from './HeaderContainer';
import AddTodoInputContainer from './AddTodoInputContainer';
import TodoListContainer from './TodoListContainer';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer username="Jason" />
        <View style={styles.inputContainer}>
          <AddTodoInputContainer />
        </View>
        <TodoListContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    marginBottom: 8,
    paddingHorizontal: 16
  }
});

module.exports = App;
