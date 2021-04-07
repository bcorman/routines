import React, {Component} from "react";

import {View, TextInput, Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  todoForm: {
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
class TodoForm extends Component {
  render() {
    return (
      <View style={styles.todoForm}>
        <TextInput />
        <Button onPress={() => alert("Submitted")} title="Add Todo" />
      </View>
    );
  }
}

export default TodoForm;
