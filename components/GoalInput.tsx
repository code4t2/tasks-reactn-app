import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

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
        <Image style={styles.heroImage} source={require("./../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="input your goal here"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
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
    padding: "1%",
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: "1%",
  },
  buttonStyle: {
    width: "48%",
    marginHorizontal: "1%",
  },
  heroImage: {
    height: 100,
    width: 100,
    margin: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#130438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
});

export default GoalInput;

