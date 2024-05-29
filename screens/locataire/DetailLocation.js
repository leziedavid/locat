import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import { Appbar, Switch,Divider } from 'react-native-paper';
import { noire, orange, red,green,blue } from '../../constants/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dropdown from '../../screens/components/DropDown';
import { StatusBar } from "expo-status-bar";

const DetailLocation = ({navigation}) => {

  const _handleMore = () => console.log('Shown more');
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => setIsSwitchOn(previousState => !previousState);
  const [isSwitchOn1, setIsSwitchOn1] = useState(false);
  const onToggleSwitch1 = () => setIsSwitchOn1(previousState => !previousState);

  const countries = [
    {
      label: "Ghana",
      value: "gh",
      flag: "🇬🇭",
    },
    {
      label: "Nigeria",
      value: "ng",
      flag: "🇳🇬",
    },
    {
      label: "Kenya",
      value: "ky",
      flag: "🇰🇪",
    },
    {
      label: "United States",
      value: "us",
      flag: "🇺🇸",
    },
    {
      label: "Pakistan",
      value: "pk",
      flag: "🇵🇰",
    },
    {
      label: "India",
      value: "in",
      flag: "🇮🇳",
    },
    {
      label: "Finland",
      value: "fn",
      flag: "🇫🇮",
    },
    {
      label: "France",
      value: "fr",
      flag: "🇫🇷",
    },
  ];

  const formattedCountries = countries.map((c) => ({
    value: c.label,
    label: `${c.flag} ${c.label}`,
  }));


  return (
        <View style={{ flex: 1 }}>

              <View style={styles.cardContainer}>
                <Appbar.Header style={styles.header}>
                  <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                  <Appbar.Content title={<Text style={{ fontSize: 15 }}>Information du biens loué</Text>} />
                  <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
                </Appbar.Header>
              </View>

              <View style={[styles.card, { height: 350, }]}>

                  <TouchableOpacity style={{marginBottom:20,top:1, flexDirection: "row", backgroundColor: noire.tamiser, padding:0, borderRadius:5,borderWidth:0, }}>
                      
                      <View style={{ flex: 1,padding:5, flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ marginRight: 'auto' }}>

                          <StatusBar style="auto" />
                          <Dropdown data={formattedCountries} onChange={console.log} placeholder="Donnez un nom a cette location" />

                          <Text style={{ fontWeight: 'bold',fontSize: 14,color:orange , marginBottom:5}}> CITE DADY 1 </Text>
                          <Text style={{ fontWeight: 'bold',fontSize: 10,color:noire.normal , marginBottom:5}}> Loyer: 150 000 fr </Text>

                          <Text style={{fontSize: 8,color:noire.normal,marginBottom:5}}>
                              <Text style={{ fontWeight: 'bold',fontSize: 10,color:noire.normal, marginBottom:5}}>DESIGNATION : </Text>
                              PIECES-2 DOUCHES-BATIMENT A-PORTE 26
                            </Text>

                            <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal,marginBottom:5}}>
                              LOCALISATION :<Text style={{ fontWeight: 'bold',fontSize:9,color:noire.hover }}>Abidjan - Cocody- 2 Plateaux'</Text>
                            </Text>

                            <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal ,marginBottom:5}}>
                              Date de debut : <Text style={{ fontWeight: 'bold',fontSize:9,color:noire.hover }}>17 Janv.2024</Text>
                            </Text>
                            

                        </View>

                        <Text style={{fontSize:10,fontWeight:"bold",color:orange,top:60,marginRight:-50}} > 2 Mois  </Text>
                        <Switch style={{fontSize:10,fontWeight:"bold",color:orange,top:-60}} value={isSwitchOn} onValueChange={onToggleSwitch} color={orange} />

                      </View>

                  </TouchableOpacity>

                  <Text style={{backgroundColor: "white",marginBottom:10, fontWeight: 'bold',fontSize: 12,color:noire.autre,marginLeft:-280}}> Info propriétaire </Text>

                  <TouchableOpacity style={{ flexDirection: "row", backgroundColor: noire.tamiser, padding:10, borderRadius: 1,borderRadius: 5,borderWidth:0, }} onPress={() => navigation.navigate('DetailLocation')}>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                          <Text>  </Text>
                        <View style={{  borderWidth: 1, borderRadius: 50, borderBottomColor:orange, width: 50, height: 50, marginRight:10, overflow: 'hidden' }}>
                            <Image source={require('../../assets/profile.jpeg')} style={{ width: '100%', height: '100%', }} />
                        </View>

                        <View style={{ marginRight: 'auto' }}>
                            <Text style={{ fontWeight: 'bold',fontSize: 12,color:noire.normal}}> Muriel kone touré </Text>
                            <Text style={{fontSize: 10,color:noire.hover}}> +225 05 23 45 67 89 </Text>
                        </View>

                    </View>

                  </TouchableOpacity>

              </View>

              <View style={{padding:10, flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                  <Text style={{ fontSize: 15, marginRight: 5,color:noire.normal,fontWeight: 'bold',}}>2024</Text>
                  <Divider style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              </View>

              <ScrollView style={{ flex: 1,padding:10, }}>
              
                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:"#fff", padding:10, marginBottom:5,borderRadius:10}} onPress={()=> navigation.navigate('Historyofpaimenets')}>
                          <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>
                                <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:blue.hover}}>
                                    Mois en cours 
                                    <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:blue.normal}}> / Mars 22024  </Text>
                                  </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                                    <MaterialCommunityIcons name="close-circle" size={15} color={green.normal} />
                                    <Text style={{ color: noire.hover, fontSize: 10 }}>LOYER  PAYE</Text>
                                    
                                    <View style={ { backgroundColor: green.hover, padding: 5, borderRadius: 15, width: '40%', marginLeft: 10,}}>
                                        <Text style={{ color:green.normal, fontSize: 5 }}>OFFRE -10% appliqué</Text>
                                    </View>

                                </View>
                            
                          </View>

                          <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                                <Text style={{fontWeight:"bold", fontSize:13, color: green.normal, marginBottom:5,top:-10}}>120 000 Fr</Text>
                                <Text style={{fontWeight:"bold", fontSize:9, color: noire.normal, marginBottom:5}}>04 / MARS / 2024</Text>
                          </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:"#fff", padding:10, marginBottom:5,borderRadius:10}} onPress={()=> navigation.navigate('Historyofpaimenets')}>
                          <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>

                                <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:noire.hover}}>
                                  Mois passé
                                  <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:noire.normal}}> / Avril 22024  </Text>
                                  </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                                    <MaterialCommunityIcons name="circle" size={15} color={green.hover} />
                                    <Text style={{ color: noire.hover, fontSize: 10 }}>LOYER  PAYE</Text>
                                    
                                    <View style={ { backgroundColor: red.hover, padding: 5, borderRadius: 8, width: '25%', marginLeft: 10,}}>
                                        <Text style={{ color:red.normal, fontSize: 5 }}> 10% appliqué</Text>
                                    </View>

                                </View>
                            
                          </View>

                          <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                                <Text style={{fontWeight:"bold", fontSize:13, color: noire.hover, marginBottom:5,top:-10}}>120 000 Fr</Text>
                                <Text style={{fontWeight:"bold", fontSize:9, color: noire.hover, marginBottom:5}}>04 / MARS / 2024</Text>
                          </View>

                    </TouchableOpacity>


                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:"#fff", padding:10, marginBottom:5,borderRadius:10}} onPress={()=> navigation.navigate('Historyofpaimenets')}>
                          <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>
                                <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:noire.hover}}>
                                  Mois passé
                                  <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:noire.normal}}> / Fevrier 2024  </Text>
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                                    <MaterialCommunityIcons name="close-circle" size={15} color={red.normal} />
                                    <Text style={{fontWeight:"bold",  color: red.normal, fontSize: 10 }}>Loyer  non payé </Text>

                                </View>
                            
                          </View>

                          <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                                <Text style={{fontWeight:"bold", fontSize:13, color: noire.hover, marginBottom:5,top:-10}}>120 000 Fr</Text>
                                <Text style={{fontWeight:"bold", fontSize:9, color: noire.hover, marginBottom:5}}>04 / MARS / 2024</Text>
                          </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:"#fff", padding:10, marginBottom:5,borderRadius:10}} onPress={()=> navigation.navigate('Historyofpaimenets')}>
                          <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>

                                <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:noire.hover}}>
                                  Mois passé
                                  <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:noire.normal}}> / Janvier 22024  </Text>
                                  </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                                    <MaterialCommunityIcons name="circle" size={15} color={green.hover} />
                                    <Text style={{ color: noire.hover, fontSize: 10 }}>LOYER  PAYE</Text>
                                    
                                    <View style={ { backgroundColor: green.hover, padding: 5, borderRadius: 8, width: '25%', marginLeft: 10,}}>
                                        <Text style={{ color:green.normal, fontSize: 5 }}> 10% appliqué</Text>
                                    </View>

                                </View>
                            
                          </View>

                          <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                                <Text style={{fontWeight:"bold", fontSize:13, color: noire.hover, marginBottom:5,top:-10}}>120 000 Fr</Text>
                                <Text style={{fontWeight:"bold", fontSize:9, color: noire.hover, marginBottom:5}}>04 / MARS / 2024</Text>
                          </View>

                    </TouchableOpacity>

                    <View style={{padding:10, flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                        <Text style={{ fontSize: 15, marginRight: 5,color:noire.normal,fontWeight: 'bold',}}>2023</Text>
                        <Divider style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>

                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:"#fff", padding:10, marginBottom:5,borderRadius:10}} onPress={()=> navigation.navigate('Historyofpaimenets')}>
                          <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>

                                <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:noire.hover}}>
                                  Mois passé
                                  <Text style={{ fontSize:12, marginBottom:10,fontWeight: 'bold', color:noire.normal}}> / Janvier 22024  </Text>
                                  </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                                    <MaterialCommunityIcons name="circle" size={15} color={green.hover} />
                                    <Text style={{ color: noire.hover, fontSize: 10 }}>LOYER  PAYE</Text>
                                    
                                    <View style={ { backgroundColor: green.hover, padding: 5, borderRadius: 8, width: '25%', marginLeft: 10,}}>
                                        <Text style={{ color:green.normal, fontSize: 5 }}> 10% appliqué</Text>
                                    </View>

                                </View>
                            
                          </View>

                          <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                                <Text style={{fontWeight:"bold", fontSize:13, color: noire.hover, marginBottom:5,top:-10}}>120 000 Fr</Text>
                                <Text style={{fontWeight:"bold", fontSize:9, color: noire.hover, marginBottom:5}}>04 / MARS / 2024</Text>
                          </View>

                    </TouchableOpacity>

                    <Text style={{ fontSize: 15, marginRight: 5,color:noire.normal,fontWeight: 'bold',}}> </Text>
              
              </ScrollView>

        </View>
      
  );
  
};

export default DetailLocation;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },


  contenu: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
},

  pickerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 100,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    marginBottom: 0,
    },

    containerdown: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      gap: 10,
    },



});