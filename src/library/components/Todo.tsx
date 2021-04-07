import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {TodoDetail} from '../../shared/interfaces/todo.interface'

interface Props {
  todo: TodoDetail;
}
class Todo extends Component<Props> {

  render() {
    return (
      <View>
        <Text>{this.props.todo.text}</Text>
        <Text>{this.props.todo.complete}</Text>
      </View>
    )
  }
}

export default Todo;