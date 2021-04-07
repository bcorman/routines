import React, {Component} from "react";
import {ScrollView, StyleSheet} from "react-native";
import {TodoList} from "../shared/interfaces/todo.interface";
import TodoContainer from "../library/containers/TodoContainer";
import TodoForm from "../library/components/TodoForm";

interface TodoScreenState {
  todoList: TodoList;
}

const styles = StyleSheet.create({
  container: {
    margin: "2%",
    padding: 5,
    display: "flex",
    height: "98%",
  },
});

class TodoScreen extends Component<{}, TodoScreenState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      todoList: [
        {
          text: "Do the dishes",
          complete: false,
          id: 0,
        },
      ],
    };
  }

  render() {
    const {todoList} = this.state;
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <TodoContainer todoList={todoList} />
        <TodoForm />
      </ScrollView>
    );
  }
}

export default TodoScreen;
