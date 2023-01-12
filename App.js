import { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [listGoal, setListGoal] = useState([]);

  function goalInputHandler(text) {
    setGoal(text);
  }
  function addGoalHandler() {
    setListGoal((currentGoal) => [
      ...currentGoal,
      { text: goal, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goal"
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={listGoal}
          renderItem={(goal) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>
                {goal.index + 1}. {goal.item.text}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
