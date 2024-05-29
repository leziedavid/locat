import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useRef, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import PhoneInput from "react-native-phone-number-input"
import RNPickerSelect from 'react-native-picker-select'
import { blue, orange } from '../../constants/color'

const Admin_Register = ({navigation}) => {

    const [userRole, setUserRole] = useState('PROPRIETAIRE');
    const [time, setTime] = useState(true)
    const [image, setImage] = useState(null);
    const otpRef = useRef();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidNumber, setIsValidNumber] = useState(false);
    const phoneInputRef = React.useRef(null);

    const handleOnChangePhoneNumber = (number) => {
        setPhoneNumber(number);
        console.log("Numéro de téléphone saisi:", phoneNumber);
    };


    const redirect = (time) => {
        if(time === true){
            navigation.navigate('Admin_Mdp')
        }
    }

    const login = (time) => {

        if(time === true){
            navigation.navigate('Admin_Login')
        }
    }

    const pickImage = async () => {

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


    const handleRoleChange = (value) => {
        setUserRole(value);
        console.log(userRole)
        };


    return (

            <View style={{flex:1}}>

                    <View style={styles.container}>

                        <View style={{flex:1}}>
                            <Image source={require('../../assets/estate.jpg')} />
                        </View>

                            <View style={{flex:3, padding:20, backgroundColor:'#fff', borderTopLeftRadius:30, borderTopRightRadius:30}}>
                            <View style={{height:3, width:80, backgroundColor: blue, alignSelf:"center", marginBottom:15}}></View>
                            
                                {/* <ScrollView> */}

                                    <View style={{backgroundColor:'lightgray', margin:10, height:"auto", borderRadius:20, flexDirection:"row", marginBottom:"8%"}}>
                                        <Button  mode='contained' 
                                            style={{ 
                                                flex:1.1,
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
                                            }} >

                                            CREER UN COMPTE
                                        </Button>
                                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                            <Text  onPress={() => login(time)}  style={{fontWeight:"bold"}}>J'ai un compte</Text>
                                        </View>
                                    </View>
                                
                                    <View style={styles.pickerContainer}>
                                        <RNPickerSelect
                                            onValueChange={(value) => handleRoleChange(value)}
                                            items={[
                                            // { label: 'Selectionnez votre statut', value: '' },
                                            { label: 'PROPRIETAIRE / GERANT', value: 'PROPRIETAIRE' },
                                            // { label: 'GERANT', value: 'GERANT' },
                                            { label: 'AGENCE IMMOBILIERE', value: 'AGENCE' },
                                            ]}
                                            placeholder={{ label: 'Selectionnez votre statut', value: null }}
                                            value={userRole}
                                        />
                                    </View>

                                    {userRole === 'AGENCE' && (
                                        <View style={styles.imagescontainer}>
                                                <TouchableOpacity onPress={pickImage} style={styles.cameraIconContainer}>
                                                    <View style={styles.cameraIcon}>
                                                        {image ? (
                                                            <Image source={{ uri: image }} style={styles.image} />
                                                        ):(
                                                            <MaterialCommunityIcons name="camera-outline" size={24} color="#888" />
                                                        )}
                                                    </View>
                                                </TouchableOpacity>
                                            <TextInput style={styles.textInput} placeholder="Ajouter une photo de profil" editable={false} />
                                        </View>
                                    )}
                                    
                                    {userRole === 'AGENCE' && (
                                            <TextInput mode="outlined" label="Denomination social"  placeholder="Denomination social"  placeholderTextColor="gray"
                                            style={{
                                            backgroundColor: 'white',
                                            paddingHorizontal: 15,
                                            color: 'orange',
                                            borderColor: 'orange',
                                            borderWidth: 0,
                                            borderRadius: 5,
                                            outline: 'none',
                                            marginBottom:10,
                                            }}
                                            theme={{ colors: { primary: 'orange', placeholder: 'Denomination social' } }}
                                            right={<TextInput.Affix text="" />}
                                            />
                                        )}

                                    {userRole === 'PROPRIETAIRE' && (
                                        <TextInput
                                            mode="outlined" label="Nom"  placeholder="Nom"  placeholderTextColor="gray"
                                            style={{
                                            backgroundColor: 'white',
                                            paddingHorizontal: 15,
                                            color: 'orange',
                                            borderColor: 'orange',
                                            borderWidth: 0,
                                            borderRadius: 5,
                                            outline: 'none',
                                            marginBottom:10,
                                            }}
                                            theme={{ colors: { primary: 'orange', placeholder: 'Nom' } }}
                                            right={<TextInput.Affix text="" />}
                                        />
                                    )}
                                        {userRole === 'PROPRIETAIRE' && (
                                        <TextInput mode="outlined" label="Prénom"  placeholder="Prénom"  placeholderTextColor="gray"
                                            style={{
                                            backgroundColor: 'white',
                                            paddingHorizontal: 15,
                                            color: 'orange',
                                            borderColor: 'orange',
                                            borderWidth: 0,
                                            borderRadius: 5,
                                            outline: 'none',
                                            marginBottom:10,
                                            }}
                                            theme={{ colors: { primary: 'orange', placeholder: 'Prénom' } }}  right={<TextInput.Affix text="" />}
                                        />
                                    )}
                                    <View style={styles.phoneInputContainer}>
                                        <PhoneInput ref={phoneInputRef}  defaultValue={phoneNumber}  defaultCode="CI"  onChangeText={handleOnChangePhoneNumber} 
                                        onChangeFormattedText={(text) => { setIsValidNumber(phoneInputRef.current?.isValidNumber(text)); }}
                                        containerStyle={styles.phoneInputContainerStyle}
                                        textContainerStyle={styles.phoneInputTextContainer}
                                        textInputStyle={styles.phoneInputTextInput}  withDarkTheme   autoFocus placeholder="Numéro de téléphone" />
                                    </View>
                                    
                                    <TextInput  mode="outlined" label="Email"  placeholder="Email"  placeholderTextColor="gray"
                                        style={{
                                        backgroundColor: 'white',
                                        paddingHorizontal: 15,
                                        color: 'orange',
                                        borderColor: 'orange',
                                        borderWidth: 0,
                                        borderRadius: 5,
                                        outline: 'none',
                                        marginBottom:10,
                                        }}
                                        theme={{ colors: { primary: 'orange', placeholder: 'Email' } }}
                                        right={<TextInput.Affix text="" />}
                                    />
                                    
                                    {userRole === 'PROPRIETAIRE' && (
                                        <TextInput mode="outlined" label="N* CNI"  placeholder="N* CNI"  placeholderTextColor="gray"
                                            style={{
                                            backgroundColor: 'white',
                                            paddingHorizontal: 15,
                                            color: 'orange',
                                            borderColor: 'orange',
                                            borderWidth: 0,
                                            borderRadius: 5,
                                            outline: 'none',
                                            marginBottom:10,
                                            }}
                                            theme={{ colors: { primary: 'orange', placeholder: 'N* CNI' } }}
                                            right={<TextInput.Affix text="" />}
                                        />
                                    )}
                                    
                                    {userRole === 'AGENCE' && (
                                        <TextInput mode="outlined" label="NCC"  placeholder="NCC"  placeholderTextColor="gray"
                                            style={{
                                            backgroundColor: 'white',
                                            paddingHorizontal: 15,
                                            color: 'orange',
                                            borderColor: 'orange',
                                            borderWidth: 0,
                                            borderRadius: 5,
                                            outline: 'none',
                                            marginBottom:10,
                                            }}
                                            theme={{ colors: { primary: 'orange', placeholder: 'NCC' } }}
                                            right={<TextInput.Affix text="" />}
                                        />
                                    )}

                                    <View style={{position:"", bottom:0, width:"100%"}}>
                                        <Button mode='contained' style={{backgroundColor:orange, borderRadius:8}} onPress={() => redirect(time)}>Enregistrer</Button>
                                    </View>

                                {/* </ScrollView> */}

                        </View>

                    </View>

            </View>
    
    )
}

export default Admin_Register

const styles = StyleSheet.create({
    
    container: {
        flex:1
    },
    form:{
        flex:1,
    },

    imagescontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor:"#fff"
    },

    textInput: {
    flex: 1,
    height: 55,
    backgroundColor:"#fff"
    },

    input: {
    flex: 1,
    marginLeft: 10,
    marginBottom:20,
    },

    iconContainer: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -12 }], // Aligner l'icône verticalement avec le centre de l'input
    },

    cameraIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40, // Ajustez la taille selon vos besoins
    height: 40, // Ajustez la taille selon vos besoins
    borderRadius: 25, // Un demi de la largeur ou hauteur pour former un cercle
    borderWidth: 1,
    borderColor: 'black', // Couleur du cercle
    },
    cameraIcon: {
    width: 24, // Ajustez la taille selon vos besoins
    height: 24, // Ajustez la taille selon vos besoins
    },

    image: {
    width: 25,
    height: 25,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    },

    pickerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    marginBottom: 10,
    },


    phoneInputContainer: {
    position: 'relative',
    width: '100%',
    
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
    fontSize: 12,
    color: 'orange',
    },

})