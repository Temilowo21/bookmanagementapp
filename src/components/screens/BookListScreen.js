import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export const BookListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Book List</Text>
      <Button title="Add a New Book" onPress={() => navigation.navigate('AddBook')} />
      <Button title="View Book Details" onPress={() => navigation.navigate('BookDetail')} />
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

export default BookListScreen;
