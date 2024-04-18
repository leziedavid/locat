import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react'
import { blue, orange } from '../constants/color'
import { TextInput, Button } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ReactNativePhoneInput from 'react-native-phone-input'
import * as ImagePicker from 'expo-image-picker';


const Register = ({navigation}) => {

    const [time, setTime] = useState(true)

    const [image, setImage] = useState(null);

    const otpRef = useRef();

    const redirect = (time) => {
        if(time === true){
            navigation.navigate('Login')
        }else{
            navigation.navigate('OtpVerification')
        }
    }

    const login = (time) => {

        if(time === true){
            navigation.navigate('Login')
        }
    }

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
                <View style={{height:3, width:80, backgroundColor: blue, alignSelf:"center", marginBottom:15}}></View>

                <View style={styles.form}>
                    <View style={{backgroundColor:'lightgray', margin:10, height:"auto", borderRadius:20, flexDirection:"row", marginBottom:"20%"}}>

                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                            <Text  onPress={() => login(time)}  style={{fontWeight:"bold"}}>J'ai un compte</Text>
                        </View>

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
                           CREE UN COMPTE
                        </Button>
                    </View>



                    <View style={styles.imagescontainer}>

                    {/* <TouchableOpacity onPress={pickImage} style={styles.cameraIcon}>
                        <MaterialCommunityIcons name="camera-outline" size={24} color="#888" />
                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={pickImage} style={styles.cameraIconContainer}>
                        <View style={styles.cameraIcon}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.image} />
                            ):(
                                <MaterialCommunityIcons name="camera-outline" size={24} color="#888" />
                            )}
                        </View>
                    </TouchableOpacity>

                    <TextInput 
                        style={styles.textInput}
                        placeholder="Ajouter une photo de profil"
                        editable={false}
                    />
                    </View>
                    
                    <TextInput mode='outlined' placeholder='Nom' style={{marginBottom:20 , backgroundColor:"#fff"}} />
                    <TextInput mode='outlined' placeholder='Prénom' style={{marginBottom:20 , backgroundColor:"#fff"}} />

                    <View style={{flexDirection:'row', width:"100%", borderWidth:1,marginBottom:20, borderRadius:5, padding:2}}>
                        <ReactNativePhoneInput  ref={otpRef}  initialCountry={'ci'}   textProps={{ placeholder: 'Enter a phone number...' }} style={{borderRightWidth:0.5, width:90}} />
                        <TextInput outlineColor='#fff' keyboardAppearance='light' keyboardType='number-pad' underlineColor='#fff' underlineStyle={{borderWidth:0}} activeOutlineColor='#fff' style={{flex:1, height: 47, marginLeft:5, backgroundColor:"#fff",}} />
                    </View>

                    <TextInput mode='outlined' placeholder='Profession' style={{marginBottom:20 , backgroundColor:"#fff"}} />
                    <TextInput mode='outlined' placeholder='N* CNI' style={{marginBottom:20 , backgroundColor:"#fff"}} />

                    <View style={{position:"absolute", bottom:20, width:"100%"}}>
                        <Button mode='contained' style={{backgroundColor:orange, borderRadius:10}} onPress={() => redirect(time)}>Enregistrer</Button>
                    </View>

                </View>
            </View>
        </View>
        </View>
    )
}

export default Register

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
    marginBottom: 20,
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




})