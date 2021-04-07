import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TodoList} from '../shared/interfaces/todo.interface'
import TodoContainer from '../library/containers/TodoContainer'
import TodoForm from '../library/components/TodoForm';

interface TodoScreenState {
  todos: TodoList;
}
class TodoScreen extends Component<{}, TodoScreenState> {
  state: TodoScreenState = {
    todos: [
      {
        text: "Do the dishes",
        complete: false
      }
    ]
  }

  render() {
    return (
      <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         contentContainerStyle={styles.container}>
          <TodoContainer todoList={this.state.todos}/>
          <TodoForm />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: 'flex',
    backgroundColor: 'blue',
    justifyContent: 'space-between'
  }
})

export default TodoScreen;