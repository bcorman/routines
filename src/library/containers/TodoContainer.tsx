import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {TodoList, TodoDetail} from "../../shared/interfaces/todo.interface";
import Todo from "../components/Todo";

interface Props {
  todoList: TodoList;
}

const styles = StyleSheet.create({
  todoContainer: {
    flex: 4,
    backgroundColor: "pink",
  },
});
class TodoContainer extends Component<Props> {
  render() {
    const {todoList} = this.props;
    return (
      <View style={styles.todoContainer}>
        {todoList.length ? (
          todoList.map((todo: TodoDetail) => <Todo todo={todo} key={todo.id} />)
        ) : (
          <Text>Add a todo using the form below</Text>
        )}
      </View>
    );
  }
}

export default TodoContainer;
