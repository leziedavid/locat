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
                <Text style={{fontWeight:"bold", textAlign:"center", fontSize:18, marginBottom:20}}>Confirmer</Text>
                <View style={{flex:1, padding:10}}>
                    <Text style={{textAlign:"left", fontSize:15, marginBottom:10}}>Entrez le code de confirmation vous avez reçu au mail : <Text style={{fontWeight:"bold", color: blue}}>teste@gmail.com</Text></Text>
                    <OtpInputs
                        ref={otpRef}
                        handleChange={(code) => setOtpCode(code)}
                        numberOfInputs={5}
                        style={{width:"100%", flexDirection:"row", justifyContent:"space-evenly", marginTop:20, marginBottom:"10%"}}
                        inputContainerStyles={{borderColor: orange, borderRadius: 10, borderWidth:2, width:"17%", height:40, justifyContent:"center", alignItems:"center"}}
                        keyboardType='number-pad'
                        inputStyles={{color: "#000", fontSize: 25}}
                        cursorColor="#000"
                    />
                    <Text style={{fontSize:15, marginBottom:10, fontWeight:"bold"}}>Renvoyez</Text>
                    <Text style={{fontSize:15, marginBottom:10, fontWeight:"bold"}}>Modifier</Text>

                    <View style={{position:"absolute", bottom:20, width:"100%", marginLeft:10}}>
                        <Button mode='contained' style={{backgroundColor:orange, borderRadius:10}} onPress={() => navigation.navigate('Tab2')}>Confirmer</Button>
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