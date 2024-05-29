import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { green, noire } from '../../constants/color';

const AdvanceLayment = ({navigation}) => {

  const months = [
    { name: 'Janvier', value: 120000 },
    { name: 'Février', value: 120000 },
    { name: 'Mars', value: 120000 },
    { name: 'Avril', value: 120000 },
    { name: 'Mai', value: 120000 },
    { name: 'Juin', value: 120000 },
    { name: 'Juillet', value: 120000 },
    { name: 'Août', value: 120000 },
    { name: 'Septembre', value: 120000 },
    { name: 'Octobre', value: 120000 },
    { name: 'Novembre', value: 120000 },
    { name: 'Décembre', value: 120000 },
  ];

  const [selectedMonths, setSelectedMonths] = useState([]);
  const toggleSelection = (month) => {

    if (selectedMonths.includes(month)) {

      setSelectedMonths(selectedMonths.filter((m) => m !== month));

    } else {

      setSelectedMonths([...selectedMonths, month]);

    }
  };

  const isSelected = (month) => selectedMonths.includes(month);

  const selectedCount = selectedMonths.length;

  console.log(selectedMonths);

  return (
    
    <View style={{flex:1}}>

        <View style={styles.container}>

            <View style={styles.headerView}>

            <Appbar.Header style={{ backgroundColor: 'blue', marginBottom: 10}}>
              <View style={{ flex: 1, flexDirection: 'row',}}>
                <Appbar.Action icon="arrow-left" color="white" style={{ marginLeft: -10,top:-45, }} onPress={() => { navigation.goBack() }} />
                <Text style={{ marginLeft: 10,top:-30,color:"white",fontSize:12 }}>Paiement anticipé</Text>
              </View>

              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{color:"white",fontSize:12,marginRight:70}}>SOLDE</Text>
                <View> 
                  <Text style={{ fontSize: 14, fontWeight: 'bold',color:"white",marginRight:10 }}> 4 8000   <Text style={{ fontSize: 11, fontWeight: 'bold',color:"white" }}> CFA </Text>  </Text>
                </View>
              </View>

              <TouchableOpacity onPress={()=> navigation.navigate('Rechargement')} >
                <View style={{ marginRight: 10 }}>
                  <Ionicons name="add-circle-outline" size={24} color="white" />
                </View>
              </TouchableOpacity>

            </Appbar.Header>

              <View style={styles.card}>
                
                <Text style={{ textAlign:"center", fontWeight:"bold", marginBottom:20}}>MON Domicile</Text>

                  <View style={{flex:1, padding:10}}>
                      <TouchableOpacity style={{flexDirection:"row", backgroundColor:"#eeefff", padding:10, marginBottom:5,borderRadius:10}} >
                          
                          <View style={{flex:2.5, justifyContent:"flex-start", padding:0}}>
                              <Text style={{ fontSize:12, marginBottom:1}}>Montant totale a payer</Text>
                              <View style={{flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}>
                                <Text style={{color: 'blue', fontWeight:"bold",fontSize:12}}>240 000 CFA</Text>
                                <Text style={{color: 'blue', fontWeight:"bold",fontSize:12}}>2 Mois </Text>
                              </View>
                          
                          </View>
                      </TouchableOpacity>


                      <View style={styles.cont}>
                        <Text style={styles.title}> Sélectionnez les mois à payer d’avance </Text>
                        <View style={styles.divider} />
                      </View>

                    <View style={styles.containers}>
                      
                      <View style={styles.cardContainer}>
                        {[0, 1, 2, 3].map((row) => (
                          <View key={row} style={styles.row}>
                            {months.slice(row * 3, (row + 1) * 3).map((month, index) => (
                              <TouchableOpacity key={index} style={[ styles.cards, isSelected(month.name) && styles.selected, index !== 2 && styles.cardMarginRight, ]} onPress={() => toggleSelection(month.name)} >
                                <Text style={{fontSize:10 , color:noire.autre,textAlign:"center",fontWeight:"bold", }}>{month.name} 2024</Text>
                                <Text style={{fontSize:10 , color:noire.autre,textAlign:"center",fontWeight:"bold", }}>{month.value}</Text>
                              </TouchableOpacity>
                            ))}
                          </View>
                        ))}
                      </View>

                    </View>

                  </View>

                  <View style={{backgroundColor: green.autre,top:-10, padding:3, borderRadius:1, width:"90%",textAlign:"center", marginLeft:25}}>
                        <Text style={{color: green.normal, fontSize:10,}}>OFFRE Speciale -10% A Partie De 3 Mois Payer</Text>
                  </View>

              </View>



            </View>
            
            
            <View style={{position:'absolute', bottom:10, width:"100%", padding:0}}>
                <Button onPress={() => navigation.navigate('DetailAdvancePay')} mode='contained' style={{backgroundColor:'blue', borderWidth:0, borderRadius:14, borderColor: "blue.normal", marginBottom:15,  width:"90%", alignSelf:"center",borderRadius: 14}} labelStyle={{color: "white", }} > Valider
                </Button>
                <Text style={{textAlign:"center", fontSize:10, color:noire.hover,}}>assurez-vous d’avoir suffisamment de fond pour {"\n"} continuer cette opération </Text>
            </View>

        </View>
    </View>
  )
}

export default AdvanceLayment

const styles = StyleSheet.create({


  cont: {
    marginBottom: 0,
  },
  title: {
    fontSize: 13,
    marginBottom: 10,
  },
  divider: {
    backgroundColor: 'blue',
    height: 4,
    width: '100%',
    borderRadius: 2,
  },

    container:{
        flex:1
    },

    headerView:{
      padding:10,
      height:150,
      backgroundColor: "blue",
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
      top:30
    },


    card:{
      padding:10,
      borderRadius:15,
      backgroundColor:"#fff",
      height:550,
      top: 0,
    },

    circleContainer: {
        alignItems: 'center',
        marginBottom: 40,
        justifyContent: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 80,
        backgroundColor: green.normal,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'white',
        position: 'absolute', // Position absolue pour ajuster librement
        top: -65, // Fait remonter le cercle au-dessus du conteneur de carte
        left: '50%', // Centrage horizontal
        marginLeft: -50, // Décalage pour centrer le cercle
        zIndex: 2, // Assure que le cercle est au-dessus du contenu
    },

    containers: {
      flex: -2,
      backgroundColor: '#f2f2f2',
      padding: 8,
      
    },
 
    cardContainer: {
      marginTop: 0,
      height: 290,
      
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
      
    },
    cards: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      height:65,
    },
    cardMarginRight: {
      marginRight: 10,
    },
    selected: {
      borderColor: '#007bff',
      borderWidth: 2,
    },


})