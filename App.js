import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./src/components/goalInput";
import GoalItem from "./src/components/goalItem";

export default function App() {
  const [modalVisible, setModal] = useState(false);
  const [listGoal, setListGoal] = useState([]);

  function StartAddGoal() {
    setModal(true);
  }

  function addGoalHandler(goal) {
    setListGoal((currentGoal) => [
      ...currentGoal,
      { text: goal, id: Math.random().toString() },
    ]);
    endGoalHandler();
  }

  function endGoalHandler() {
    setModal(false);
  }

  function deleteGoalHandler(id) {
    setListGoal((goals) => {
      return goals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={StartAddGoal} />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalVisible}
          onCancel={endGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={listGoal}
            renderItem={(goal) => (
              <GoalItem
                deleteHandler={deleteGoalHandler}
                index={goal.index + 1}
                goalText={goal.item.text}
                id={goal.item.id}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 4,
  },
});
