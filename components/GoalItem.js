import { StyleSheet, View, Text, Pressable } from "react-native";
export const GoalItem = (props) => {
  const handleDelete = () => {
    props.onDeleteHandler(props.goal.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={handleDelete}
        style={(pressedData) =>
          pressedData.pressed ? styles.pressedItem : null
        }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "red",
  },
});
