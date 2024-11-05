import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onPressAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal animationType="slide" visible={props.isVisible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="input your goal here"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    padding: "1%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: "1%",
  },
  buttonStyle: {
    width: "48%",
    marginHorizontal: "1%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#808080",
    width: "100%",
    padding: 8,
  },
});

export default GoalInput;

