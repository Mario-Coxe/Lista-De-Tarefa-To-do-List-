import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import TodoList from './ToDoList';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#121212' }}>
      <StatusBar
        backgroundColor="#121212" // Cor de fundo escura
        barStyle="light-content"   // Cor do texto da barra de status clara
      />
      <TodoList />
    </View>
  );
};

export default App;
