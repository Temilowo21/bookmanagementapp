import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export const BookDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Book Details</Text>
      <Button title="Edit Book" onPress={() => navigation.navigate('EditBook')} />
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

export default BookDetailScreen;
