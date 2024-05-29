import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { blue, green, noire } from '../../constants/color'
import { Header } from '../components/Header'
const PaymentDetails = () => {
  return (
    <View style={{flex:1}}>
        <Header  firsttilte={false} backActionColor="#fff" TopColor="#fff" titlecolors="white" title="Mon domicle" Toptitle="MOIS EN COURS" backAction={true} backgroundColor={blue.normal} />
        <View style={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.card}>

              {/* <View style={styles.circleContainer}>
                  <View style={styles.circle}>
                    <MaterialCommunityIcons  style={{fontWeight: 'bold'}} name="check-circle" size={100} color={green.normal} />        
                  </View>
              </View> */}

              <View style={styles.circleContainer}>
                  <View style={styles.circle}>
                      <MaterialCommunityIcons style={[styles.icon, { fontWeight: 'bold' }]} name="check" size={100} color={'white'} />
                  </View>
              </View>
                
                <Text style={{color: green.normal, textAlign:"center", fontWeight:"bold", marginBottom:10}}>LOYE PAIYE</Text>
                <View style={{marginBottom:25}}>
                  <Text style={{marginBottom:5,color:noire.hover, fontSize:15}}>PERIODE</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.normal,fontSize:14}}>Avril 2024</Text>
                  </View>
                </View>


                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                  <View>
                    <Text style={{marginBottom:5,color:noire.hover, fontSize:15}}>Statut</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",color:noire.normal,fontSize:11}}>PAYE</Text>
                    </View>
                  </View>
                  <View>
                  <View style={{backgroundColor: green.normal, padding:5, borderRadius:15, width:"100%", marginBottom:10}}>
                        <Text style={{color: green.hover, fontSize:5}}>OFFRE -10% appliqué</Text>
                  </View>
                  </View>
                </View>

                <View style={{marginBottom:18}}>
                  <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>Montant</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.normal, fontSize:13}}>120 000 CFA</Text>
                  </View>
                </View>

                <View style={{marginBottom:18}}>
                  <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>Date et heur de paiement</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.normal, fontSize:11}}>18/05/2024 18:00</Text>
                  </View>
                </View>

                <View style={{marginBottom:10}}>
                  <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>References</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.normal, fontSize:11}}>THDGFLKIUYNBKK</Text>
                  </View>
                </View>


              </View>
            </View>
            <View style={{position:'absolute', bottom:5, width:"100%", padding:15}}>
              <Button mode='contained' style={{backgroundColor:"white", borderWidth:0, borderRadius:5, borderColor: blue.normal, marginBottom:10,  width:"90%", alignSelf:"center"}} labelStyle={{color: blue.normal,
                }} >Ma facture</Button>
              <Text style={{textAlign:"center", fontSize:11, color:noire.hover,}}>Votre facture est disponible a tous {"\n"} moment même hors ligne</Text>
            </View>
        </View>
    </View>
  )
}

export default PaymentDetails

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerView:{
      padding:10, 
      height:150, 
      backgroundColor: blue.normal,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
      top:0
    },
    card:{
      padding:15,
      borderRadius:15,
      backgroundColor:"#fff",
      height:450,
      top: 30,
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


  icon: {
      // position: 'absolute',
      top: -10,
      right:'4%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  


})