import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { blue, orange } from '../../constants/color'

const Admin_Login = ({navigation}) => {
    const [time, setTime] = useState(true)

    const redirect = (time) => {
        if(time === true){
            navigation.navigate('Admin_OtpVerification')
        }
    }

    const registers = (time) => {
        if(time === true){
            navigation.navigate('Admin_Register')
        }
    }

    return (
        <View style={{flex:1}}>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image source={require('../../assets/estate.jpg')} />
            </View>
            <View style={{flex:3, padding:20, backgroundColor:'#fff', borderTopLeftRadius:30, borderTopRightRadius:30}}>
                <View style={{height:3, width:80, backgroundColor: blue, alignSelf:"center", marginBottom:15}}></View>
               
                <View style={styles.form}>

                    <View style={{backgroundColor:'lightgray', margin:10, height:"auto", borderRadius:20, flexDirection:"row", marginBottom:"20%"}}>


                    <View style={{flex:1.1, alignItems:"center", justifyContent:"center"}}>
                        <Text onPress={() => registers(time)} style={{fontWeight:"bold"}}>Créer un compte</Text>
                    </View>

                    <Button 
                        mode='contained' 
                        style={{ 
                            flex:1.2,
                            backgroundColor:orange, 
                            borderWidth:2, 
                            borderColor:"#fff",
                            fontSize:17, 
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.36,
                            shadowRadius: 6.68,
                            elevation: 11
                        }}
                        >
                        J'AI UN COMPTE
                    </Button>


                    </View>


                    <View style={styles.containers}>
                        <View style={styles.divider} />
                            <Text style={styles.text}>EN TANT QUE ENTREPRISE </Text>
                        <View style={styles.divider} />
                    </View>
                                    
                    <TextInput mode='outlined' placeholder="Entrez l'email de votre entreprise" style={{fontSize:14,marginBottom:50, backgroundColor: 'white',paddingVertical: 1, paddingHorizontal: 10,}} />

                    <View style={styles.containers}>
                        <View style={styles.divider} />
                            <Text style={styles.text}>EN TANT QUE ADMINISTRATEUR </Text>
                        <View style={styles.divider} />
                    </View>
                    
                    <TextInput mode='outlined' placeholder="Entrez votre numéro locatif" style={{fontSize:14,marginBottom:50, backgroundColor: 'white',paddingVertical: 1, paddingHorizontal: 10,}} />

                    <View style={styles.contenue}>
                        <Button mode='contained' style={{backgroundColor:orange, width: '100%', borderRadius:10}} onPress={() => redirect(time)}>Confirmer</Button>
                    </View>

                </View>
            </View>
        </View>
        </View>
    )
}

export default Admin_Login

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    form:{
        flex:1,
    },


      containers: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:40,
      },
      divider: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'black',
        marginHorizontal: 5,
        
      },
      text: {
        marginHorizontal: 10,
        fontSize: 10,
        color:orange,
        fontWeight: 'bold',
      },

      contenue: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        bottom:10,
      },

})