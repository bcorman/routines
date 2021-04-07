import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {TodoDetail} from '../../shared/interfaces/todo.interface'

interface Props {
  todo: TodoDetail;
}
class Todo extends Component<Props> {

  render() {
    return (
      <View style={styles.pill}>
        <Text>{this.props.todo.text}</Text>
        <Text>{this.props.todo.complete}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pill: {
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

export default Todo;