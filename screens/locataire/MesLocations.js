import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar,Switch,Divider } from 'react-native-paper';
import { blue, noire, orange, red } from '../../constants/color';

const MesLocations = ({navigation}) => {

  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => setIsSwitchOn(previousState => !previousState);

  const [isSwitchOn1, setIsSwitchOn1] = useState(false);
  const onToggleSwitch1 = () => setIsSwitchOn1(previousState => !previousState);

  return (
    <View style={{ flex: 1, }}>

          <View style={styles.cardContainer}>
            <Appbar.Header style={styles.header}>
              <Appbar.BackAction onPress={() => { navigation.goBack() }} />
              <Appbar.Content
                  title="MES LOCATIONS"
                  titleStyle={{ fontSize: 13 }}
                  style={{ marginLeft: 80 }}
                />
            </Appbar.Header>
          </View>


          <View style={{flex:1, padding:10}}>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#fff", padding: 10, marginBottom: 5, borderRadius: 1,borderWidth:0, }} onPress={() => navigation.navigate('DetailLocation')}>

              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'red',  borderWidth: 2, borderRadius: 5,borderBottomColor:orange, width: 60, height: 60, marginRight: 20, overflow: 'hidden' }}>
                    <Image source={require('../../assets/villa.jpeg')} style={{ width: '100%', height: '100%' }} />
                </View>

                <View style={{ marginRight: 'auto' }}>

                <Text style={{ fontWeight: 'bold',fontSize: 12,color:orange}}>
                    CITE DADY 1
                </Text>

                <Text style={{fontSize: 8,color:noire.normal}}>PIECES-2 DOUCHES-BATIMENT A-PORTE 26 </Text>
                <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal}}>
                    LOCALISATION :<Text style={{ fontWeight: 'bold',fontSize:9,color:noire.hover }}>Abidjan - Cocody- 2 Plateaux'</Text>
                  </Text>
                </View>


                <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:8 , top:-15}}>
                  <Switch
                      value={isSwitchOn}
                      onValueChange={onToggleSwitch}
                      color={orange}
                    />
                    <Text style={{fontSize:10, color: red.normal,}}>Actif</Text>
                    <Text style={{fontSize:10,fontWeight:"bold",color:noire.normal}}> 2 Mois  </Text>
                </View>


              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#fff", padding: 10, marginBottom: 5, borderRadius: 1,borderWidth:0, }} onPress={() => navigation.navigate('DetailLocation')}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'red',  borderWidth: 2, borderRadius: 5,borderBottomColor:orange, width: 60, height: 60, marginRight: 20, overflow: 'hidden' }}>
                    <Image source={require('../../assets/villa.jpeg')} style={{ width: '100%', height: '100%' }} />
                </View>

                <View style={{ marginRight: 'auto' }}>

                <Text style={{ fontWeight: 'bold',fontSize: 12,color:orange}}>
                    CITE DADY 1
                </Text>

                <Text style={{fontSize: 8,color:noire.normal}}>PIECES-2 DOUCHES-BATIMENT A-PORTE 26 </Text>
                <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal}}>
                    LOCALISATION :<Text style={{ fontWeight: 'bold',fontSize:9,color:noire.hover }}>Abidjan - Cocody- 2 Plateaux'</Text>
                  </Text>
                </View>


                <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:8 , top:-15}}>
                  <Switch
                      value={isSwitchOn1}
                      onValueChange={onToggleSwitch1}
                      color={orange}
                    />
                    <Text style={{fontSize:10, color: noire.hover,}}>Inactif</Text>
                    <Text style={{fontSize:10,fontWeight:"bold",color:noire.normal}}> 2 Mois  </Text>
                </View>


              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 15, marginRight: 5,color:noire.hover }}>Historique</Text>
                <Divider style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>


            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#fff", padding: 10, marginBottom: 5, borderRadius: 1,borderWidth:0, }} onPress={() => navigation.navigate('DetailLocation')}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'red',  borderWidth: 2, borderRadius: 5,borderBottomColor:orange, width: 60, height: 60, marginRight: 20, overflow: 'hidden' }}>
                    <Image source={require('../../assets/villa.jpeg')} style={{ width: '100%', height: '100%' }} />
                </View>

                <View style={{ marginRight: 'auto' }}>

                <Text style={{ fontWeight: 'bold',fontSize: 12,color:noire.hover}}>
                    BENI A
                </Text>

                <Text style={{fontSize: 8,color:noire.normal}}>PIECES-2 DOUCHES-BATIMENT A-PORTE 26 </Text>
                <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal}}>
                    LOCALISATION :<Text style={{ fontWeight: 'bold',fontSize:9,color:noire.hover }}>Abidjan - Cocody- 2 Plateaux'</Text>
                  </Text>
                </View>


                <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:8 , top:-15}}>
                    <Text style={{fontSize:10, color: noire.hover, marginLeft:-30,fontWeight: 'bold',top:5}}>60 000 CFA </Text>
                    <Text style={{fontSize:10,fontWeight:"bold",color:noire.normal,marginRight:-10,top:25}}> 14 Mois  </Text>
                </View>


              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#fff", padding: 10, marginBottom: 5, borderRadius: 1,borderWidth:0, }} onPress={() => navigation.navigate('DetailLocation')}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'red',  borderWidth: 2, borderRadius: 5,borderBottomColor:orange, width: 60, height: 60, marginRight: 20, overflow: 'hidden' }}>
                    <Image source={require('../../assets/villa.jpeg')} style={{ width: '100%', height: '100%' }} />
                </View>

                <View style={{ marginRight: 'auto' }}>

                <Text style={{ fontWeight: 'bold',fontSize: 12,color:noire.hover}}>
                  TERRAIN
                </Text>

                <Text style={{fontSize: 8,color:noire.normal}}>PIECES-2 DOUCHES-BATIMENT A-PORTE 26 </Text>
                <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal}}>
                    LOCALISATION :<Text style={{ fontWeight: 'bold',fontSize:9,color:noire.hover }}>Abidjan - Cocody- 2 Plateaux'</Text>
                  </Text>
                </View>


                <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:8 , top:-15}}>
                    <Text style={{fontSize:10, color: noire.hover, marginLeft:-30,fontWeight: 'bold',top:5}}>60 000 CFA </Text>
                    <Text style={{fontSize:10,fontWeight:"bold",color:noire.normal,marginRight:-10,top:25}}> 14 Mois  </Text>
                </View>


              </View>
            </TouchableOpacity>

              
          </View>


    </View>
  );
};

export default MesLocations;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    Bottom:18,
  },
  content: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },

  switchOn: {
    tintColor: 'red', // Couleur rouge lorsque le commutateur est activé
  },
  switchOff: {
    tintColor: 'black', // Couleur noire lorsque le commutateur est désactivé
  },

});