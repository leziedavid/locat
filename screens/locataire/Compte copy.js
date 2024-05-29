import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawerContent from '../../screens/components/customDrawerContent';



const Compte = () => {
  return (

    <Drawer
        screenOptions={{
            drawerLabelStyle: {
                marginLeft: -20
            },
        }}
        drawerContent={CustomDrawerContent}
    >

        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: 'Home',
                title: 'Home',
                drawerIcon: ({size, color})=>(
                    <Ionicons name='md-home' size={size} color={color} />
                )

            }}
        />
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: 'About',
                title: 'About',
                drawerIcon: ({size, color})=>(
                    <Ionicons name='ios-information-circle' size={size} color={color} />
                )

            }}
        />
        
    </Drawer>
    
  )
}

export default Compte

const styles = StyleSheet.create({})