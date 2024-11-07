import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";
import { StatusBar } from "expo-status-bar";

function Index() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function endGoalHandler() {
    setIsModalVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((c) => [...c, { text: enteredGoalText, id: Math.random().toString() }]);
    endGoalHandler();
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add new Goal" color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput isVisible={isModalVisible} onPressAddGoal={addGoalHandler} onCancel={endGoalHandler} />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 4,
  },
});

export default Index;
