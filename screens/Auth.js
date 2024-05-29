import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { orange } from '../constants/color'
import { Button } from 'react-native-paper'

const Auth = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground style={styles.container} source={require('../assets/estate.jpg')}>
        <View style={{flex:1, justifyContent:'center', padding:20}}>
          <View style={{borderLeftWidth:3, borderColor: orange, padding:20}}>
            <Text style={{color: "#fff", fontSize: 30, fontWeight:"500"}}>CHOISISSEZ {'\n'}VOTRE STATUT</Text>
          </View>
        </View>
        <View style={{flex:3, justifyContent:"center", padding:20}}>
          <Button mode='contained' style={styles.buttonOrange} labelStyle={{fontSize:20}} onPress={() => navigation.navigate('Admin_Register')}>Je suis Propriétaire</Button>
          <Button style={styles.buttonOverlay} labelStyle={{color:orange, fontSize:20}} onPress={() => navigation.navigate('Login')}>Je suis Locataire</Button>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  buttonOrange:{
    backgroundColor: orange,
    borderRadius:10,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#fff",
    marginBottom:10,
  },
  buttonOverlay:{
    borderWidth:2, 
    borderColor:orange, 
    borderRadius:10, 
    backgroundColor:"#000", 
    opacity:0.8, 
    height:50, 
    justifyContent:"center", 
    alignItems:"center"
  }
})