import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image,FlatList } from 'react-native';
import { blue, green, noire, orange,tamiser } from '../../constants/color'
import { Header } from '../components/Header'
import { Button, Divider,Card,TextInput,Appbar,Paragraph } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const MobileMoney = ({ route,navigation }) => {
  const  items  = route.params; 
console.log(items);

  return (

    <View style={{flex:1}}>



        <View style={{marginBottom: 10,flex:1}}>

        <Appbar.Header style={{ backgroundColor : orange, marginBottom: 20  }}>
              <Appbar.BackAction onPress={() => {}} />
              <Card style={{ backgroundColor: orange , marginHorizontal: 20,top:10, borderRadius: 10, paddingVertical: 1, justifyContent: 'center'  }}>
                  <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <MaterialCommunityIcons name="wallet" size={24} color="white" />
                      <Paragraph style={{ color: 'white', fontSize: 12 }}>SOLDE ACTUEL: 55 000 CFA</Paragraph>
                  </Card.Content>
              </Card>
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
            <Button mode='contained' style={{ backgroundColor: orange, borderRadius: 20 }} onPress={() => navigation.navigate('ValidateSelect',items) }>CONFIRMER</Button>
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