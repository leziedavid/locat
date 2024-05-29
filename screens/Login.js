import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { blue, orange } from '../constants/color'
import { TextInput, Button } from 'react-native-paper'

const Login = ({navigation}) => {
    const [time, setTime] = useState(true)

    const redirect = (time) => {
        if(time === true){
            navigation.navigate('FirstLogin')
        }else{
            navigation.navigate('OtpVerification')
        }
    }

    const registers = (time) => {
        if(time === true){
            navigation.navigate('Register')
        }
    }

    return (
        <View style={{flex:1}}>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image source={require('../assets/estate.jpg')} />
            </View>
            <View style={{flex:3, padding:20, backgroundColor:'#fff', borderTopLeftRadius:30, borderTopRightRadius:30}}>
                <View style={{height:3, width:80, backgroundColor: blue, alignSelf:"center", marginBottom:15}}></View>
                <View style={styles.form}>
                    <View style={{backgroundColor:'lightgray', margin:10, height:"auto", borderRadius:20, flexDirection:"row", marginBottom:"20%"}}>
                        <Button 
                            mode='contained' 
                            style={{ 
                                flex:1,
                                backgroundColor:orange, 
                                borderWidth:2, 
                                borderColor:"#fff", 
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

                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                            <Text onPress={() => registers(time)} style={{fontWeight:"bold"}}>Creer un compte</Text>
                        </View>

                    </View>
                    <TextInput mode='outlined' placeholder="Entrez votre numéro locatif" style={{ backgroundColor: 'white', fontSize: 14, marginBottom:20,  }} theme={{ colors: { primary: 'orange',  },  }} />

                    <Text>Votre <Text style={{fontWeight: "bold"}}>numéro locatif</Text> est unique et fait partie à present de votre identité, alors conservez-le bien.</Text>
                    
                    <View style={{ position:'',flex: 1, justifyContent: 'center', alignItems: 'center',  width: "100%", bottom: 10,}} >
                   
                    </View>


                    <View style={{bottom:20, width:"100%"}}>
                        <Button mode='contained' style={{backgroundColor:orange, borderRadius:10}} onPress={() => redirect(time)}>Verifier</Button>
                    </View>
                    
                </View>
            </View>

        </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    form:{
        flex:1,
    }
})