import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from './screens/Auth';
import Login from './screens/Login';
import OtpVerification from './screens/OtpVerification';
import FirstLogin from './screens/FirstLogin';
import Register from './screens/Register';
import Home from './screens/locataire/Home';
import Notifications from './screens/locataire/Notifications';
import PaymentDetails from './screens/locataire/PaymentDetails';
import Rechargement from './screens/locataire/Rechargement';

import Nextmonth from './screens/components/Nextmonth';
import Currentmonth from './screens/components/Currentmonth';
import Monthspass from './screens/components/Monthspass';
import Historyofpaimenets from './screens/components/Historyofpaimenets';
import Detailpayment from './screens/components/Detailpayment';
import MobileMoney from './screens/locataire/MobileMoney';

import Compte from './screens/locataire/Compte';
import { PaperProvider } from 'react-native-paper';
import { orange } from './constants/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="FirstLogin" component={FirstLogin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="Nextmonth" component={Nextmonth} />
        <Stack.Screen name="Currentmonth" component={Currentmonth} />
        <Stack.Screen name="Monthspass" component={Monthspass} />
        <Stack.Screen name="Historyofpaimenets" component={Historyofpaimenets} />
        <Stack.Screen name="Detailpayment" component={Detailpayment} />
        <Stack.Screen name="MobileMoney" component={MobileMoney} />
        <Stack.Screen name="Rechargement" component={Rechargement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigation(){
  return (
      <Tab.Navigator
        initialRouteName="Home" 
        screenOptions={{ 
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarActiveTintColor: orange,
        }}
      >
        {/* On va ajouter les pages de la navigation tab */}
        <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name='Notifications' 
          component={Notifications}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell-outline" color={color} size={26} />
            ),
          }}  
        />
        <Tab.Screen 
          name='Compte' 
          component={Compte}
          options={{
            tabBarLabel: 'Compte',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-outline" color={color} size={26} />
            ),
          }}  
        />
      </Tab.Navigator>
  );
}
export default function App() {
  return (
    <PaperProvider>
      <StackNavigation/>
    </PaperProvider>
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
