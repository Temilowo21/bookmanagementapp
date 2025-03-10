import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export const AddBookScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Add a New Book</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddBookScreen;
