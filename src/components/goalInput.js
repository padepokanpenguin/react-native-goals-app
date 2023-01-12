import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function GoalInput({ addGoalHandler }) {
  const [goal, setGoal] = useState("");

  function goalInputHandler(text) {
    setGoal(text);
  }

  function addGoal() {
    addGoalHandler(goal);
    setGoal("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your course goal"
        value={goal}
      />
      <Button title="Add Goal" onPress={addGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
