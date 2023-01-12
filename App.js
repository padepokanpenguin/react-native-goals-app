import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./src/components/goalInput";
import GoalItem from "./src/components/goalItem";

export default function App() {
  const [listGoal, setListGoal] = useState([]);

  function addGoalHandler(goal) {
    setListGoal((currentGoal) => [
      ...currentGoal,
      { text: goal, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={listGoal}
          renderItem={(goal) => (
            <GoalItem index={goal.index + 1} goalText={goal.item.text} />
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

  goalsContainer: {
    flex: 4,
  },
});
