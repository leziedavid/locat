import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import ReactNativePhoneInput from 'react-native-phone-input'
import { blue, orange } from '../constants/color'

const OtpVerification = ({navigation}) => {
    const [image, setImage] = useState(null);
    const otpRef = useRef();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        // console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{flex:1}}>
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image source={require('../assets/estate.jpg')} />
            </View>
            <View style={{flex:3, padding:20, backgroundColor:'#fff', borderTopLeftRadius:30, borderTopRightRadius:30}}>
                <View style={{height:3, width:80, backgroundColor: blue, alignSelf:"center", marginBottom:10}}></View>
                <View style={{flex:1, padding:10, alignItems:"center"}}>
                    <TouchableOpacity style={{width:150, height:150, marginBottom:15, borderWidth:1, justifyContent:"center", alignItems:"center", borderRadius:75}} onPress={pickImage}>
                        {image ? (
                            <Image source={{ uri: image }} style={styles.image} />
                        ):(
                            <MaterialCommunityIcons name="camera-outline" size={80} />
                        )}
                    </TouchableOpacity>
                    <Text style={{marginBottom:30}}>Ajouter une photo</Text>
                    

                    <View style={{flexDirection:'row', width:"100%", borderWidth:1,marginBottom:20, borderRadius:5, padding:2}}>
                        <ReactNativePhoneInput  ref={otpRef}  initialCountry={'ci'}   textProps={{ placeholder: 'Enter a phone number...' }} style={{borderRightWidth:0.5, width:90}} />
                        <TextInput outlineColor='#fff' keyboardAppearance='light' keyboardType='number-pad' underlineColor='#fff' underlineStyle={{borderWidth:0}} activeOutlineColor='#fff' style={{flex:1, height: 47, marginLeft:5, backgroundColor:"#fff",}} />
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
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
})