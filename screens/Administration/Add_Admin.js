import { Image, StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useRef} from 'react'
import { blue, orange ,noire} from '../../constants/color'
import { TextInput, Button,Appbar,Paragraph } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ReactNativePhoneInput from 'react-native-phone-input'
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';


const Add_Admin = ({navigation}) => {


    const [userRole, setUserRole] = useState('');
    const [time, setTime] = useState(true)
    const [image, setImage] = useState(null);
    const otpRef = useRef();


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


    const handleRoleChange = (value) => {
        setUserRole(value);

        console.log(userRole)
      };


    return (

            <View style={{flex:1}}>

            <Appbar.Header style={{ backgroundColor :"white", marginBottom: 20  }}>
                 <Appbar.BackAction  onPress={() => { navigation.goBack() }} />
                 <Text style={{ fontSize: 15,marginRight:10,color:noire.hover, }}>AJOUTER UN ADMINISTRATEUR</Text>
          </Appbar.Header>

                    <View style={styles.container}>

                        <View style={{flex:3, padding:20, backgroundColor:'#fff', borderTopLeftRadius:30, borderTopRightRadius:30}}>
                        
                        <ScrollView style={{ flex: 1}}>

                            <View style={styles.form}>
                            
                                <View style={styles.pickerContainer}>
                                    <RNPickerSelect
                                        onValueChange={(value) => handleRoleChange(value)}
                                        items={[
                                        { label: 'Administrateur principal/Propriétaire/Agent', value: '' },
                                        { label: 'PROPRIETAIRE', value: 'PROPRIETAIRE' },
                                        { label: 'AGENT', value: 'AGENT' },
                                        { label: 'PROPRIETAIRE PRINCIPAL', value: 'PRINCIPAL' },
                                        ]}
                                        placeholder={{ label: 'Selectionnez votre statut', value: null }}
                                        value={userRole}
                                    />
                                </View>


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
                   
                                <View style={{flexDirection:'row', width:"100%", borderWidth:1,marginBottom:20, borderRadius:5, padding:2}}>
                                    <ReactNativePhoneInput  ref={otpRef}  initialCountry={'ci'}   textProps={{ placeholder: 'Enter a phone number...' }} style={{borderRightWidth:0.5, width:90}} />
                                    <TextInput  outlineColor='#fff' keyboardAppearance='light' keyboardType='number-pad' underlineColor='#fff' underlineStyle={{borderWidth:0}} activeOutlineColor='#fff' style={{flex:1, height: 48, marginLeft:5, backgroundColor:"#fff",}} />
                                </View>

                                {/* <TextInput mode='outlined' placeholder='Profession' style={{marginBottom:10 , backgroundColor:"#fff"}} /> */}

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
                                    
                                    <View style={styles.containers}>
                                        <View style={styles.divider} />
                                        <Text style={styles.text}>OU ?</Text>
                                        <View style={styles.divider} />
                                    </View>
                                    
                                    <View style={{ bottom:10, width:"100%"}}>
                                            <TouchableOpacity style={{padding:10, marginBottom: 5,borderRadius:10 }} >
                                                    <View >
                                                    <Text style={{textAlign:"center", fontSize:11, color:noire.hover,}}>Entre le numero locatif du Propriétaire {"\n"} s'il a déjà un compte </Text>
                                                    </View>
                                            </TouchableOpacity>
                                    </View>

                                    
                                    <TextInput mode="outlined" label="Saisissez ici" style={{fontSize:10}}   placeholder="Saisissez ici"  placeholderTextColor="gray"
                                        style={{
                                        backgroundColor: 'white',
                                        paddingHorizontal: 15,
                                        color: 'orange',
                                        borderColor: 'orange',
                                        borderWidth: 0,
                                        borderRadius: 5,
                                        outline: 'none',
                                        marginBottom:50,
                                        }}
                                        theme={{ colors: { primary: 'orange', placeholder: 'Saisissez ici' } }}
                                        right={<TextInput.Affix text="" />}
                                    />

                                    
                                    <View style={{position:"", bottom:10, width:"100%"}}>
                                        <Button mode='contained' style={{backgroundColor:orange, borderRadius:20}} onPress={() => redirect(time)}>Enregistrer</Button>
                                    </View>

                            </View>



                        </ScrollView> 

                        </View>
                    </View>

            </View>
     
    )
}

export default Add_Admin

const styles = StyleSheet.create({

    containers: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:10,
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




})