import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Button, Card, TextInput } from 'react-native-paper';
import { blue, noire, orange } from '../../constants/color';

const MobileMoney = ({ route,navigation }) => {
  const  items  = route.params; 
console.log(items);

  return (

    <View style={{flex:1}}>



        <View style={{marginBottom: 10,flex:1}}>

          <Appbar.Header style={{ backgroundColor: orange, marginBottom: 50}}>

            <Appbar.Action icon="arrow-left" color="white" style={{ backgroundColor: orange,}} onPress={() => { navigation.goBack() }} />

          <View style={{ flex:1, alignItems:'center', justifyContent: 'center',top: 30 }}>
            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#ED7F10", padding: 10, marginBottom: 5, borderRadius: 5, marginLeft: 10, marginRight: 40 }} >
              <View style={{ flex: 2.5, justifyContent: "flex-start", padding: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={{ color: 'white', fontWeight: "bold", fontSize: 14 }}> 
                    <MaterialCommunityIcons name="wallet" size={24} color="white" />
                    SOLDE ACTUEL: 55 000 CFA</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          </Appbar.Header>


          <Card style={{ padding: 10, backgroundColor: 'white'}}>

            <View style={{padding:10,marginBottom: 25}}>
                <TouchableOpacity style={{ padding:1, marginBottom: 20 }} >
                  <View style={styles.transactionItem}>
                      <Image source={items.logo} style={styles.logo} />
                      <View style={styles.transactionDetails}>
                          <Text style={styles.transactionType}>{items.moyenPaiement}</Text>
                          <Text style={styles.moyenPaiement}>{items.numero}</Text>
                      </View>

                  </View>
                </TouchableOpacity>

                <TextInput
                  mode="outlined"
                  label="Montant a recharger"
                  placeholder="10 000"
                  placeholderTextColor="gray"
                  style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  color: 'orange',
                  borderColor: 'orange',
                  borderWidth: 0,
                  borderRadius: 5,
                  outline: 'none',
                  marginBottom:40,
                }}
                theme={{ colors: { primary: 'orange', placeholder: '' } }}
                right={<TextInput.Affix text="CFA" />}
              />


              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text style={styles.date}>Frais {items.moyenPaiement.toLowerCase()} money 1%</Text>
                  </View>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 12,color:noire.hover}}> - 100 F </Text>
                  </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: 12, fontWeight: 'bold',color:noire.normal }}>Montant a recevoir</Text>
                  </View>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold',color:orange }}>9 900F</Text>
                  </View>
              </View>
            
            </View>

          </Card>

          <View style={{ position: "absolute", bottom: 20, left: 30, right: 30, padding: 10 }}>
            <Button mode='contained' style={{ backgroundColor: orange, borderRadius: 14 }} onPress={() => navigation.navigate('ValidateSelect',items) }>CONFIRMER</Button>
          </View>

        </View>
      
    </View>

  );

}
export default MobileMoney;

const styles = StyleSheet.create({


  card:{
    padding:15,
    borderRadius:15,
    backgroundColor:"#fff",
    height:380,
  },

  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0,
    borderRadius:10,
    backgroundColor:noire.tamiser,
},
logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius:50
},
transactionDetails: {
    flex: 1,
},
transactionType: {
    fontWeight: 'bold',
    fontSize: 13,
    color:noire.normal,
},
moyenPaiement: {
    fontSize: 14,
    marginBottom: 5,
    color:noire.hover
},
bottomDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '', // Push the details to the right
},
montant: {
    fontSize: 13,
    fontWeight: 'bold',
    color:blue
},
date: {
    fontSize: 12,
    color:noire.hover
},




})