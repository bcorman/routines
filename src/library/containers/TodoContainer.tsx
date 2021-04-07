import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TodoList, TodoDetail} from '../../shared/interfaces/todo.interface'
import Todo from '../components/Todo'
interface Props {
  todoList: TodoList;
}
class TodoContainer extends Component<Props> {
  render() {
    const todos = this.props.todoList.map((todo: TodoDetail, i: number) => <Todo todo={todo} key={i}/>);
    return (
      <View style={styles.todoContainer}>
        {todos.length ? 
          todos : 
          <Text>Add a todo using the form below</Text>}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  todoContainer: {
    flex: 4,
    backgroundColor: 'pink'
  }
})

export default TodoContainer;