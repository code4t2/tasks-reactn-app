import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

function Index() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((c) => [...c, { text: enteredGoalText, id: Math.random().toString() }]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onPressAddGoal={addGoalHandler} />
      <View>
        <FlatList
          data={courseGoals}
          style={styles.goalsContainer}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
          }}
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

export default Index;
