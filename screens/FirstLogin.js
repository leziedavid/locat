import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper'
import PhoneInput from "react-native-phone-number-input"
import { blue, orange } from '../constants/color'

const OtpVerification = ({navigation}) => {
    const [image, setImage] = useState(null);
    const otpRef = useRef();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidNumber, setIsValidNumber] = useState(false);
    const phoneInputRef = React.useRef(null);

    const handleOnChangePhoneNumber = (number) => {
        setPhoneNumber(number);
        console.log("Numéro de téléphone saisi:", phoneNumber);
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

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
                    
                            <View style={styles.phoneInputContainer}>
                                <PhoneInput ref={phoneInputRef}  defaultValue={phoneNumber}  defaultCode="CI"  onChangeText={handleOnChangePhoneNumber}
                                onChangeFormattedText={(text) => { setIsValidNumber(phoneInputRef.current?.isValidNumber(text)); }}
                                containerStyle={styles.phoneInputContainerStyle}
                                textContainerStyle={styles.phoneInputTextContainer}
                                textInputStyle={styles.phoneInputTextInput}  withDarkTheme   autoFocus placeholder="Numéro de téléphone" />
                                
                            </View>

                    <View style={{position:"absolute", bottom:-10, width:"100%", marginLeft:10}}>
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

 
phoneInputContainer: {
    position: 'relative',
    width: '109%',
    // padding:-50
    
    },
phoneInputContainerStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 15,
    width: '100%',
    },
phoneInputTextContainer: {
    borderBottomWidth: 0,
    },
phoneInputTextInput: {
    fontSize: 14,
    color: 'orange',
    },


})