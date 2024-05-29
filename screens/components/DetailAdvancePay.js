import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Button, Divider } from 'react-native-paper';
import { green, noire } from '../../constants/color';

const AdvanceLayment = ({navigation}) => {


  return (
    
    <View style={{flex:1}}>

        <View style={styles.container}>

            <View style={styles.headerView}>

            <Appbar.Header style={{ backgroundColor: 'blue', marginBottom: 0}}>
              <View style={{ flex: 1, flexDirection: 'row',}}>
                <Appbar.Action icon="arrow-left" color="white" style={{ marginLeft: -10,top:-45, }} onPress={() => { navigation.goBack() }} />
                <Text style={{ marginLeft: 10,top:-30,color:"white",fontSize:12 }}>Paiement</Text>
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

                <View style={{marginBottom:0}}>
                    <Text style={{marginBottom:5,color:noire.normal, fontSize:15}}>PERIODE</Text>
                    
                  </View>

                    <View style={{marginBottom:0, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                      <View>
                        <View style={{backgroundColor: green.autre, padding:4, borderRadius:0, width:"100%", marginBottom:5}}>
                            <Text style={{color: green.normal, fontSize: 9,}}>Mois a venir </Text>
                        </View>

                      </View>
                      <View>

                        <View style={{ padding:2, borderRadius:15, width:"100%", marginBottom:0}}>

                          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                              {[1, 2,3].map((item, index) => (
                                  <View key={index} style={{backgroundColor: 'white', borderRadius: 10, marginRight: 5, marginBottom: 5, padding:2, borderColor: green.normal, borderWidth: 1}}>
                                      <Text style={{color: green.normal, fontSize: 8,fontWeight:"bold",}}>MARS 2024</Text>
                                  </View>
                              ))}
                              
                          </View>

                        </View>

                      </View>
                    </View>

                    <View style={{marginBottom:5}}>
                      <Text style={{marginBottom:10, color:noire.normal,fontSize:13}}>Coût du loyé par mois</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:noire.normal, fontSize:13}}>120 000 CFA</Text>
                      </View>
                    </View>

                    <View style={{marginBottom:10}}>
                      <Text style={{marginBottom:0, color:noire.normal,fontSize:13}}>Nombre de mois </Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:noire.normal, fontSize:13}}> 4 </Text>
                      </View>
                    </View>

                    <View style={{marginBottom:10}}>
                      <Text style={{marginBottom:5, color:noire.normal,fontSize:13}}>Montant total</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:noire.normal, fontSize:13}}>360 000 CFA</Text>
                      </View>
                    </View>

                    <View style={{ marginBottom:3, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
                      <View>
                        <Text style={{ marginBottom:0, fontSize: 14 }}>Offre spéciale appliqué </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                          <Text style={{ fontWeight: "bold", color: green.normal, fontSize: 10 }}>-10%</Text>
                        </View>
                      </View>
                      <View>
                        <Text style={{ color: green.normal, fontSize: 10, fontWeight: "bold" }}>= 12 000 FCFA</Text>
                      </View>
                    </View>

                    <Divider bold style={{marginBottom:10}} />
                    <View style={{flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}>
                      <Text style={{color: noire.normal, fontWeight:"bold",fontSize:12}}>Montant total a payer </Text>
                      <Text style={{color: 'blue', fontWeight:"bold",fontSize:12}}>324 000 FCFA</Text>
                    </View>

              </View>



            </View>
            
            
            <View style={{position:'absolute', bottom:15, width:"100%", padding:0}}>
                <Button onPress={() => navigation.navigate('DetailAdvancePay')} mode='contained' style={{backgroundColor:'blue', borderWidth:0, borderRadius:14, borderColor: "blue", marginBottom:20,  width:"90%", alignSelf:"center"}} labelStyle={{color: "white", }} > Payer le loyer
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
      padding:15,
      borderRadius:15,
      backgroundColor:"#fff",
      height:420,
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