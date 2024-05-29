import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { noire, orange } from '../../constants/color';

const MobileMoney = ({navigation,route }) => {
  const  items  = route.params;
  console.log(items);
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileNumberChange = (inputText) => {
    const formattedNumber = inputText.replace(/\D/g, '');
    if (formattedNumber.length <= 10) {
      setMobileNumber(formattedNumber);
    }
    

  };

  return (

    <View style={{flex:1}}>
        <Appbar.Header>
            <Appbar.Action icon="arrow-left"  onPress={() => { navigation.goBack() }} />
            <View style={{ flex: 1, marginLeft:-5}}>
                <Text>Confirmation </Text>
            </View>
        </Appbar.Header>

        <View style={{ backgroundColor:"white",padding:10,marginBottom: 10,flex:1}}>

            <View style={{padding:10,marginBottom: 25}}>
                <TouchableOpacity style={{ padding:1, marginBottom: 20 }} onPress={()=> navigation.navigate('MethodSelect',items)}>
                  <View style={styles.transactionItem}>
                      <Image source={items.logo} style={styles.logo} />
                      <View style={styles.transactionDetails}>

                      <Text style={[styles.transactionType, { textTransform: 'capitalize' }]}>
                          {items.moyenPaiement} money
                      </Text>


                      </View>

                      <View style={styles.bottomDetails}>
                        <Text style={styles.montant}>{items.montant} FCFA</Text>
                        <Text style={styles.date}>Montant a recharger</Text>
                    </View>

                  </View>
                </TouchableOpacity>

                <Text style={{textAlign:"center", fontSize:12, marginBottom:10,color:noire.hover}}>
                    Pour confirmer la transaction tape 
                    <Text style={{fontWeight:"bold", color: orange}}> #144*82#</Text>
                    {"\n"} pour générer un code temporaire
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Saisie le code temporaire ici"
                  value={mobileNumber}
                  onChangeText={handleMobileNumberChange}
                  keyboardType="numeric" 
                  maxLength={10}
                />
            
            </View>

            <View style={{ position: "absolute", bottom: 20, left: 30, right: 30, padding: 10 }}>
              <Button mode='contained' style={{ backgroundColor: orange, borderRadius: 20 }} >Recharger maintenant 9 900 FCFA</Button>
            </View>


        </View>
      
    </View>

  );

}
export default MobileMoney;

const styles = StyleSheet.create({

  input: {
    height: 30,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderColor: orange,
    borderRadius: 5,
    marginTop: 80,
    backgroundColor:"#fff",
    color:noire.autre,
    alignItems: 'center',
    fontSize:12,
    
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
    // backgroundColor:noire.tamiser,
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
    marginLeft: 13,
    marginRight:-15,
},
montant: {
    fontSize: 13,
    fontWeight: 'bold',
    color:orange
},
date: {
    fontSize: 10,
    color:noire.normal
},




})