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
        <TextInput/>
        <Button onPress={()=> alert('Submitted')} title="Add Todo"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoForm: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 5,
    padding: 5,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center'
  }
})

export default TodoForm;