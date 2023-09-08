import { StyleSheet } from "react-native";

export default StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#blue',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
      },
      taskText: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: '#000',
        fontWeight: 'bold',
      },
      deleteIcon: {
        width: 24,
        height: 24,
      },
  });