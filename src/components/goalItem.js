import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ goalText, index, deleteHandler, id }) {
  return (
    <Pressable onPress={deleteHandler.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>
          {index}. {goalText}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
