import { FontAwesome5 } from '@expo/vector-icons'; // Importer FontAwesome5 pour les icônes
import React, { useRef, useState } from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import { green, noire, orange, red } from '../../constants/color';
import * as ImagePicker from 'expo-image-picker'


const DetailCompte = ({navigation}) => {

  const [image, setImage] = useState(null);

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

  const userData = {
    id: "123",
    fullName: "Muriel koné touré",
    contact: "+225 05 05 45 67 89",
    email: "john.doe@example.com",
    country: "Côte d'ivoire Yopougon"
  };

  const [menuVisible, setMenuVisible] = React.useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);



  return (
    <View style={{flex:1}}>
        <View style={styles.container}>

              <Appbar.Header style={{ backgroundColor: "#fed2d2", elevation: 0,  top: -40, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Appbar.Action icon="arrow-left"  color={"white"}  onPress={() => navigation.goBack()} />
                    <Menu visible={menuVisible} onDismiss={closeMenu}  anchor={<Appbar.Action icon="dots-vertical"  color={"white"}  onPress={openMenu} />} >
                      <Menu.Item onPress={() => { }} title="Modifier" />
                      <Menu.Item onPress={() => { }} title="Langue" />
                  </Menu>

              </Appbar.Header>
              

              <View style={styles.headerView}>

                <View style={styles.card}>

    

                  <View style={styles.circleContainer}>
                    <View style={styles.circle}>

                      {image ? (
                            <Image source={{ uri: image }} style={styles.image} />
                          ):(
                            <Image source={require('../../assets/hommes.jpeg')} style={{ width: '100%', height: '100%', borderRadius: 90 }} />
                          )}
                      <TouchableOpacity  onPress={pickImage}  style={{ position: 'absolute', bottom: 0, right: 0 }}>
                        <FontAwesome5 name="edit" size={19} color={noire.normal} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text style={{ textAlign:"center", fontWeight:"bold", marginBottom:0,top:-40,color:noire.hover}}>PROFIL</Text>

                        <View style={{backgroundColor:"#f7f8ff", padding:10, borderRadius:0, width:"100%", marginBottom:5 ,flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}>
                            <Text style={{color: orange, fontSize: 12}}> ID I MACI209084</Text>
                            <Text style={{color: orange, fontSize: 12}}> <FontAwesome5 name="copy" size={15} color={noire.hover} /> </Text>
                        </View>
                        
                          <View style={{marginBottom:5}}>
                            <Text style={{marginBottom:10, color:noire.normal,fontSize:13}}>
                                <View style={styles.userInfoItem}>
                                  <FontAwesome5 name="user" size={19} color={noire.hover} />
                                  <Text style={styles.userInfoText}>{userData.fullName}</Text>
                                </View>
                            </Text>
                          </View>
                        
                          <View style={{marginBottom:5}}>
                            <Text style={{marginBottom:10, color:noire.normal,fontSize:13}}>
                                <View style={styles.userInfoItem}>
                                  <FontAwesome5 name="phone" size={19} color={noire.hover} />
                                  <Text style={styles.userInfoText}>{userData.contact}</Text>
                                </View>
                            </Text>
                          </View>
                          
                            <View style={{marginBottom:5}}>
                              <Text style={{marginBottom:10, color:noire.normal,fontSize:13}}>
                                  <View style={{flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}>
                                    <View style={styles.userInfoItem}>
                                        <FontAwesome5 name="envelope" size={19} color={red.normal} />
                                          <Text style={styles.userInfoText}>{userData.email}</Text>
                                          <Text style={{color: 'blue', fontWeight:"bold",fontSize:10, marginLeft:50}}>Recommander</Text>
                                        </View>
                                    </View>
                              </Text>
                            </View>

                          <View style={{marginBottom:5}}>
                            <Text style={{marginBottom:10, color:noire.normal,fontSize:13}}>
                                <View style={styles.userInfoItem}>
                                <Text> 🇨🇮</Text>
                                  <Text style={styles.userInfoText}>{userData.country}</Text>
                                </View>
                            </Text>
                          </View>

                          <View style={{alignItems:"center", justifyContent:"space-between",top:50,}}>
                            <Text style={{color: noire.hover, fontWeight:"bold",fontSize:10}}>Membre depuis le 18/05/2022 </Text>
                          </View>

                </View>

              </View>

        </View>
    </View>
  )
}

export default DetailCompte

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
  },
  headerView: {
    padding: 10,
    height: 220,
    backgroundColor:"#fed2d2",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    top: -60,
  },
  card: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    height: 380,
    top: 130,
  },

  circleContainer: {
    alignItems: 'center',
    marginBottom: 50,
    justifyContent: 'center',
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 80,
    backgroundColor: green.tamiser,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
    position: 'absolute',
    top: -130,
    left: '50%',
    marginLeft: -50,
    zIndex: 2,
  },

  userInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  userInfoItem: {
    flexDirection: 'row', // Alignement horizontal
    alignItems: 'center',
  },
  userInfoText: {
    marginLeft: 20,
    fontSize: 14,
    color: noire.hover,
  },
})
