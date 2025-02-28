import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from './src/components/screens/BookListScreen';
import AddBookScreen from './src/components/screens/AddBookScreen';
import BookDetailScreen from './src/components/screens/BookDetailScreen';
import EditBookScreen from './src/components/screens/EditBookScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BookList" component={BookListScreen} options={{ title: "My Books" }} />
        <Stack.Screen name="AddBook" component={AddBookScreen} options={{ title: "Add a Book" }} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{ title: "Book Details" }} />
        <Stack.Screen name="EditBook" component={EditBookScreen} options={{ title: "Edit Book" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
