import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { orange } from './constants/color';

import { MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import DetailLocation from './screens/locataire/DetailLocation';
import DetailNotifications from './screens/locataire/DetailNotifications';
import Notifications from './screens/locataire/Notifications';
import PaymentDetails from './screens/locataire/PaymentDetails';
import Rechargement from './screens/locataire/Rechargement';

import AdvancePayment from './screens/components/AdvancePayment';
import Assistance from './screens/components/Assistance';
import BonaSavoire from './screens/components/BonaSavoire';
import Currentmonth from './screens/components/Currentmonth';
import DetailAdvancePay from './screens/components/DetailAdvancePay';
import Detailpayment from './screens/components/Detailpayment';
import Historyofpaimenets from './screens/components/Historyofpaimenets';
import Monthspass from './screens/components/Monthspass';
import Nextmonth from './screens/components/Nextmonth';
import PaiementDavance from './screens/components/PaiementDavance';
import UnpaidRent from './screens/components/UnpaidRent';

import DetailCompte from './screens/components/DetailCompte';
import MesLocations from './screens/locataire/MesLocations';
import MethodSelect from './screens/locataire/MethodSelect';
import MobileMoney from './screens/locataire/MobileMoney';
import ValidateSelect from './screens/locataire/ValidateSelect';


// Authentification
import Admin_Login from './screens/Authentification/Admin_Login';
import Admin_Mdp from './screens/Authentification/Admin_Mdp';
import Admin_OtpVerification from './screens/Authentification/Admin_OtpVerification';
import Admin_Register from './screens/Authentification/Admin_Register';

// Home
import Add_Admin from './screens/Administration/Add_Admin';
import Home_Admin from './screens/Administration/Home_Admin';
import UserLocation from './screens/Administration/UserLocation';

import Auth from './screens/Auth';
import FirstLogin from './screens/FirstLogin';
import Login from './screens/Login';
import OtpVerification from './screens/OtpVerification';
import Register from './screens/Register';
import Compte from './screens/locataire/Compte';
import Home from './screens/locataire/Home';

import User from "./assets/user.jpg";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackNavigation(){
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Tab" component={TabNavigation} />
            <Stack.Screen name="Tab2" component={TabNavigationAdmin} />
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
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
            <Stack.Screen name="MethodSelect" component={MethodSelect} />
            <Stack.Screen name="UnpaidRent" component={UnpaidRent} />
            <Stack.Screen name="AdvancePayment" component={AdvancePayment} />
            <Stack.Screen name="PaiementDavance" component={PaiementDavance} />
            <Stack.Screen name="DetailAdvancePay" component={DetailAdvancePay} />
            <Stack.Screen name="ValidateSelect" component={ValidateSelect} />
            <Stack.Screen name="DetailNotifications" component={DetailNotifications} />
            <Stack.Screen name="DetailLocation" component={DetailLocation} />
            <Stack.Screen name="MesLocations" component={MesLocations} />

            <Stack.Screen name="DetailCompte" component={DetailCompte} />
            <Stack.Screen name="BonaSavoire" component={BonaSavoire} />
            <Stack.Screen name="Assistance" component={Assistance} />

            {/* Admin routes */}
            <Stack.Screen name="Admin_Login" component={Admin_Login} />
            <Stack.Screen name="Admin_Register" component={Admin_Register} />
            <Stack.Screen name="Admin_OtpVerification" component={Admin_OtpVerification} />
            <Stack.Screen name="Admin_Mdp" component={Admin_Mdp} />
            <Stack.Screen name="Add_Admin" component={Add_Admin} />
            <Stack.Screen name="UserLocation" component={UserLocation} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigation(){

  const navigation = useNavigation();

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
                <MaterialCommunityIcons name="home-outline" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen 
            name='Notifications'
            component={Notifications}
            options={{
              tabBarLabel: 'Notifications',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell-outline" color={color} size={30} />
              ),
            }}
          />

          {/* <Tab.Screen 
            name='Compte'
            component={DrawerNavigation}
            options={{
              tabBarLabel: 'Compte',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell-outline" color={color} size={30} />
              ),
            }}
          /> */}

          <Tab.Screen
            name='Assistance'
            component={Assistance}
            options={{
              tabBarLabel: 'Assistance',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-outline" color={color} size={30} />
              ),
            }}
          />

        </Tab.Navigator>
    );
  }

function DrawerNavigation(){

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Isabella Joanna</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >Product Manager</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />

        <Drawer.Screen
          name="Notifications"
          options={{
            drawerLabel: "Notifications",
            title: "Notifications",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={Notifications}
        />
        <Drawer.Screen
          name="Compte"
          options={{
            drawerLabel: "Compte",
            title: "Compte",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            )
          }}
          component={Compte}
        />


      </Drawer.Navigator>
    </NavigationContainer>
  );

  }

const TabNavigationAdmin = () => {

    return (

      <Tab.Navigator
      initialRouteName="Home_Admin"
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

      <Tab.Screen
        name='Home'
        component={Home_Admin}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='BonaSavoire'
        component={BonaSavoire}
        options={{
          tabBarLabel: 'BonaSavoire',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={30} />
          ),
        }}
      />
      </Tab.Navigator>
    );

  };


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
