import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

class TodoForm extends Component {
  render() {
    return (
      <View style={styles.todoForm}>
        <Text>Add a todo</Text>
        <TextInput/>
        <Button onPress={()=> alert('Submitted')} title="Submit"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoForm: {
    flex: 1,
    backgroundColor: 'green'
  }
})

export default TodoForm;