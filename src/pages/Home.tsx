import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

interface Tasks {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const data = {
      id: Number(new Date().getTime()),
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldState) => [...oldState, data]);
    console.log(data);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const findItem = updatedTasks.find((item) => item.id === id);

    if (!findItem) {
      return;
    }

    findItem.done = !findItem.done;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks((oldState) => oldState.filter((task) => task.id !== id));

    //TODO - remove task from state
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
