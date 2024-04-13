import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState, useRef} from 'react'
import { blue, orange } from '../constants/color'
import { TextInput, Button } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ReactNativePhoneInput from 'react-native-phone-input'

const OtpVerification = ({navigation}) => {
    const otpRef = useRef();
    return (
        <View style={{flex:1}}>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image source={require('../assets/estate.jpg')} />
            </View>
            <View style={{flex:3, padding:20, backgroundColor:'#fff', borderTopLeftRadius:30, borderTopRightRadius:30}}>
                <View style={{height:3, width:80, backgroundColor: blue, alignSelf:"center", marginBottom:10}}></View>
                <View style={{flex:1, padding:10, alignItems:"center"}}>
                    <View style={{width:150, height:150, marginBottom:15, borderWidth:1, justifyContent:"center", alignItems:"center", borderRadius:75}}>
                        <MaterialCommunityIcons name="camera-outline" size={80} />
                    </View>
                    <Text style={{marginBottom:30}}>Ajouter une photo</Text>
                    <View style={{flexDirection:'row', width:"100%", borderWidth:1, borderRadius:5, padding:2}}>
                    <ReactNativePhoneInput 
                        ref={otpRef}
                        initialCountry={'ci'}
                        textProps={{
                            placeholder: 'Enter a phone number...'
                        }}
                        style={{borderRightWidth:0.5, width:90}}
                    />
                    <TextInput outlineColor='#fff' keyboardAppearance='light' keyboardType='number-pad' underlineColor='#fff' underlineStyle={{borderWidth:0}} activeOutlineColor='#fff' style={{flex:3, marginLeft:5, backgroundColor:"#fff",}} />

                    </View>
                    <View style={{position:"absolute", bottom:20, width:"100%", marginLeft:10}}>
                        <Button mode='contained' style={{backgroundColor:orange, borderRadius:10}} onPress={() => navigation.navigate('OtpVerification')}>Confirmer</Button>
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
    }
})