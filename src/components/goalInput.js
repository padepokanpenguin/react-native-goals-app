import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ addGoalHandler, visible, onCancel }) {
  const [goal, setGoal] = useState("");

  function goalInputHandler(text) {
    setGoal(text);
  }

  function addGoal() {
    addGoalHandler(goal);
    setGoal("");
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goal"
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 12,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
