import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from './screens/Auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigation(){
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="stack">
        {/* On va ajouter les pages de la navigation tab */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <StackNavigation/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
