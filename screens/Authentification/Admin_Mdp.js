import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useRef, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import OtpInputs from 'react-native-otp-inputs-expo'
import { Button } from 'react-native-paper'
import { blue, orange } from '../../constants/color'

const OtpVerification = ({navigation}) => {
    const [otpCode, setOtpCode] = useState('');
    // using ref
    const otpRef = useRef();
    return (
        <View style={{flex:1}}>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image source={require('../../assets/estate.jpg')} />
            </View>
            <View style={{flex:3, padding:20, backgroundColor:'#fff', borderTopLeftRadius:30, borderTopRightRadius:30}}>
                <View style={{height:3, width:80, backgroundColor: blue, alignSelf:"center", marginBottom:10}}></View>
                
                <Text style={{fontWeight:"bold", textAlign:"center", fontSize:20, marginBottom:20}}>
                     <MaterialCommunityIcons name="lock" size={30}  style={{ marginRight: 10 }} />
                </Text>

                <View style={{ alignItems: 'center', marginBottom: 50 }}>
                     <Text>Créer votre code secret </Text>
                </View>

                <View style={{flex:1, padding:10}}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                        <MaterialCommunityIcons name="lock" size={30}  style={{ marginRight: 10 }} />
                        <Text>Créer votre code secret </Text>
                    </View>
                    
                    <OtpInputs  ref={otpRef}  handleChange={(code) => setOtpCode(code)}
                     numberOfInputs={4}
                        style={{width:"100%", flexDirection:"row", justifyContent:"space-evenly", marginTop:10, marginBottom:"8%"}}
                        inputContainerStyles={{borderColor: orange, borderRadius: 10, borderWidth:2, width:"20%", height:40, justifyContent:"center", alignItems:"center"}}
                        keyboardType='number-pad'
                        inputStyles={{color: "#000", fontSize: 25}}
                        cursorColor="#000"
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                        <MaterialCommunityIcons name="lock" size={30}  style={{ marginRight: 10 }} />
                        <Text>Entrez a nouveau votre secret</Text>
                    </View>
                    
                    <OtpInputs  ref={otpRef}  handleChange={(code) => setOtpCode(code)}
                     numberOfInputs={4}
                        style={{width:"100%", flexDirection:"row", justifyContent:"space-evenly", marginTop:10, marginBottom:"10%"}}
                        inputContainerStyles={{borderColor: orange, borderRadius: 10, borderWidth:2, width:"20%", height:40, justifyContent:"center", alignItems:"center"}}
                        keyboardType='number-pad'
                        inputStyles={{color: "#000", fontSize: 25}}
                        cursorColor="#000"
                    />


                    <View style={{position:"absolute", bottom:10, width:"100%", marginLeft:10}}>
                        <Button mode='contained' style={{backgroundColor:orange, borderRadius:10}} onPress={() => navigation.navigate('Admin_OtpVerification')}>Créer</Button>
                    </View>

                </View>
            </View>
        </View>
        </View>
    )
}

export default OtpVerification

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    form:{
        flex:1,
    }
})