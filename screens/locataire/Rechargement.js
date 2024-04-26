import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput,FlatList } from 'react-native';

import React from 'react'
import { blue, green, noire, orange,tamiser } from '../../constants/color'
import { Header } from '../components/Header'
import { Button, Divider } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Rechargement = () => {


  const comptes = [
    {
        id: 1,
        logo: require('../../assets/orangeMoney.png'), // Exemple de chemin vers une image de carte de crédit
        type: 'RECHARGE',
        moyenPaiement: 'ORANGE',
        montant: 50.00,
        frais: "1% Frais de l'operateur",
        solde: 12.500,
        date: '22 Avril 2024',
        heurs: '18:00',
        numero: '01536868119',
    },
    {
        id: 2,
        logo: require('../../assets/wave.webp'), // Exemple de chemin vers une image de logo PayPal
        type: 'RECHARGE',
        moyenPaiement: 'WAVE',
        montant: -30.00, 
        frais: "1% Frais de l'operateur",
        solde: 12.500,
        date: '18 Avril 2024',
        heurs: '18:00',
        numero: '01536868119',
    },
    {
        id: 3,
        logo: require('../../assets/mtn.png'), // Exemple de chemin vers une image de logo PayPal
        type: 'RETRAIT',
        moyenPaiement: 'MTN',
        montant: -30.00,
        frais: "1% Frais de l'operateur",
        solde: 12.500,
        date: '18 Avril 2024',
        heurs: '18:00',
        numero: '01536868119',
    },
    // Ajoutez d'autres transactions ici...
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={{ padding:1, marginBottom: 5 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
    <View style={styles.transactionItem}>
        <Image source={item.logo} style={styles.logo} />
        <View style={styles.transactionDetails}>
            <Text style={styles.transactionType}>{item.moyenPaiement}</Text>
            <Text style={styles.moyenPaiement}>{item.numero}</Text>
        </View>
        <View style={styles.bottomDetails}>
            <Text style={styles.date}>{item.frais}</Text>
        </View>
    </View>
  </TouchableOpacity>
);


  return (

        <View style={{flex:1}}>
          <Header title="Selectionner un compte" backAction={true} backgroundColor=""/>
            <View style={{padding:10,marginBottom: 100}}>
                  <FlatList
                        data={comptes}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                                  
                    />
              </View>

              <TouchableOpacity style={{ padding:10, marginBottom: 5 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
                 <MaterialCommunityIcons name="plus" size={25} color={orange} />
                 <Text style={{marginBottom:5,fontSize:15,}}>A payer</Text>
              </TouchableOpacity>

        </View>
  )
}

export default Rechargement

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerView:{
      padding:10, 
      height:100, 
      backgroundColor: green.normal,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50
    },
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
      marginLeft: 'auto', // Push the details to the right
  },
  montant: {
      fontSize: 13,
      fontWeight: 'bold',
      color:blue
  },
  date: {
      fontSize: 10,
      color: '#888',
  },




})