import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles/ToDoItemStyle'

const TodoItem = ({ task, onDelete }) => {
  return (
    <TouchableOpacity style={styles.taskContainer} onPress={onDelete}>
      <Text style={styles.taskText}>{task.text}</Text>
      <Image
        style={styles.deleteIcon}
        source={require('./assets/img/delete.png')}
      />
    </TouchableOpacity>

  );
};



export default TodoItem;
