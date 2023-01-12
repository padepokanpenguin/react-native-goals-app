import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ goalText, index, deleteHandler, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteHandler.bind(this, id)}
      >
        <Text style={styles.goalText}>
          {index}. {goalText}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
