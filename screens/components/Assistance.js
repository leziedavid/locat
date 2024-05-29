import { FontAwesome5 } from '@expo/vector-icons'; // Importer FontAwesome5 pour les icônes
import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';

import { Button, } from 'react-native-paper';
import { blue, noire, orange } from '../../constants/color';
import {CardAudio2} from './CardAudio2';

const Assistance = ({navigation}) => {

  const [boutonActif, setBoutonActif] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const activerBouton = (bouton) => {
    if (boutonActif === bouton) {
      desactiverBouton();
    } else {
      setBoutonActif(bouton);
    }
  };

  const desactiverBouton = () => {
    setBoutonActif(null);
  };


  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAudioPress = () => {
  };

  return (
    <View style={{flex:1}}>
        <View style={styles.container}>
                <View>

                  <ImageBackground style={styles.headerView} source={require('../../assets/caller.jpeg')}>
                    
                  </ImageBackground>

                    <View style={styles.card}>

                      <View style={styles.circleContainer}>
                          <View style={styles.circle}>
                              <FontAwesome5 name="dumbbell" size={80} color={blue.hover} />
                          </View>
                      </View>

                          <Text style={{ textAlign:"center", fontWeight:"bold", marginBottom:0,top:-50,color:noire.normal}}>SERVICES D'ASSISTANCE</Text>
                          <View >
                              <Text style={{textAlign:"center", fontSize:12 ,top:-50}}>Un service disponible 24 heurs sur 24h et 7 jours sur 7 pour repondre de maniere instantané sans interuption</Text>
                          </View>

                            <View style={{ marginTop:-20,}}>
                                  {boutonActif === "retrait" || boutonActif === "modifier" || boutonActif === "offre" || boutonActif === "desactiver" || boutonActif === "supprimer" && (
                                    <View style={{ backgroundColor: "white", borderRadius: 10, padding: 10 }}>
                                      <CardAudio2 title="Le titre du sujet" imageUrl="../../assets/pause.jpeg" onAudioPress={handleAudioPress} />
                                    </View>
                                )}
                            </View>

                              <View style={{marginBottom:0}}>
                                <Text style={{marginBottom:1, color:noire.normal,fontSize:13}}>
                                    <View style={styles.userInfoItem}>
                                      <Text style={styles.userInfoText}>QUESTION FREQUANT</Text>
                                    </View>
                                </Text>
                              </View>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop:5, flexWrap: 'wrap' }}>
                                  
                                  <Button
                                    onPress={() => activerBouton("retrait")}
                                    style={{
                                      backgroundColor: boutonActif === "retrait" ? blue.hover : "white",
                                      borderWidth:1,
                                      borderRadius:17,
                                      borderColor: "black",
                                      marginBottom:8,
                                      width:"70%",
                                      alignSelf:"center",
                                      border:1,
                                    }}
                                    labelStyle={{color: boutonActif === "retrait" ? "white" : "black"}}
                                  >
                                      Retrait d'argent
                                  </Button>

                                  <Button
                                    onPress={() => activerBouton("modifier")}
                                    style={{
                                      backgroundColor: boutonActif === "modifier" ? blue.hover : "white",
                                      borderWidth:1,
                                      borderRadius:17,
                                      borderColor: "black",
                                      marginBottom:8,
                                      width:"80%",
                                      alignSelf:"center",
                                      border:1,
                                    }}
                                    labelStyle={{color: boutonActif === "modifier" ? "white" : "black"}}
                                  >
                                      Modifier le compte
                                  </Button>

                                  <Button
                                    onPress={() => activerBouton("offre")}
                                    style={{
                                      backgroundColor: boutonActif === "offre" ? blue.hover : "white",
                                      borderWidth:1,
                                      borderRadius:17,
                                      borderColor: "black",
                                      marginBottom:8,
                                      width:"80%",
                                      alignSelf:"center",
                                      border:1,
                                    }}
                                    labelStyle={{color: boutonActif === "offre" ? "white" : "black"}}
                                  >
                                      Comment creer une offre
                                  </Button>

                                  <Button
                                    onPress={() => activerBouton("desactiver")}
                                    style={{
                                      backgroundColor: boutonActif === "desactiver" ? blue.hover : "white",
                                      borderWidth:1,
                                      borderRadius:17,
                                      borderColor: "black",
                                      marginBottom:8,
                                      width:"80%",
                                      alignSelf:"center",
                                      border:1,
                                    }}
                                    labelStyle={{color: boutonActif === "desactiver" ? "white" : "black"}}
                                  >
                                      Désactiver un locatair
                                  </Button>

                                  <Button
                                    onPress={() => activerBouton("supprimer")}
                                    style={{
                                      backgroundColor: boutonActif === "supprimer" ? blue.hover : "white",
                                      borderWidth:1,
                                      borderRadius:17,
                                      borderColor: "black",
                                      marginBottom:8,
                                      width:"80%",
                                      alignSelf:"center",
                                      border:1,
                                    }}
                                    labelStyle={{color: boutonActif === "supprimer" ? "white" : "black"}}
                                  >
                                    <Text style={{fontWeight:"bold"}}>Supprimer un administrateur</Text>
                                  </Button>

                                </View>

                              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.message}>
                                  <View style={styles.iconContainer}>
                                    <FontAwesome5 name="envelope" size={30} color="white" style={[styles.icon, { backgroundColor: orange}]}  />
                                  </View>
                                  <View style={styles.inputContainer}>
                                    <FontAwesome5 name="whatsapp" size={40} color="green" style={styles.icon} />
                                    <Text>Écrire à un agent</Text>
                                  </View>
                              </KeyboardAvoidingView>

                    </View>

                </View>

        </View>
    </View>
  )
}

export default Assistance

const styles = StyleSheet.create({


      message: {
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        bottom:-50 ,
        width:"90%",
        marginLeft:130
      },
      iconContainer: {
        flexDirection: 'row',
        marginRight: 1,
        
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        
      },
      input: {
        flex: 1,
        height: 40,
        borderColor:"white"
      },
      icon: {
        marginRight: 18,
        padding: 5,
        borderRadius: 3,
      },

  container: {
    flex: 1,
    top: 50,
  },
  headerView: {
    padding: 10,
    height: 220,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    top: -60,
  },

  card: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    height: 630,
    top: -60,
  },

  circleContainer: {
    alignItems: 'center',
    marginBottom: 50,
    justifyContent: 'center',
  },
  circle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -160,
    left: '45%',
    marginLeft: -50,
    zIndex: 2,
  },

  userInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  userInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoText: {
    marginLeft: 18,
    fontSize: 12,
    color: noire.normal,
    fontWeight:"bold",
  },
})
