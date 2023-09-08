import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from './ToDoItem';
import styles from './styles/ToDoListStyle'

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const saveTask = async () => {
    if (task.trim() === '') {
      return;
    }

    const newTask = { id: Date.now().toString(), text: task };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setTask('');
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

  const deleteTask = async (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Adicionar" onPress={saveTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem task={item} onDelete={() => deleteTask(item.id)} />
        )}
      />
    </View>
  );
};



export default TodoList;
