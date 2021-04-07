import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import {TodoDetail} from "../../shared/interfaces/todo.interface";

interface Props {
  todo: TodoDetail;
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
    margin: 5,
    padding: 5,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
});
class Todo extends Component<Props> {
  render() {
    const {todo} = this.props;
    return (
      <View style={styles.pill}>
        <Text>{todo.text}</Text>
        <Text>{todo.complete}</Text>
      </View>
    );
  }
}

export default Todo;
