import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blue, orange,green,autre,red,noire } from '../../constants/color'
import { Header } from '../components/Header'
import { Button, Divider } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const PaymentDetails = () => {
  return (
    <View style={{flex:1}}>
        <Header  firsttilte={false} backActionColor="#fff" TopColor="#fff" titlecolors="white" title="Mon domicle" Toptitle="MOIS EN COURS" backAction={true} backgroundColor={noire.autre} />
        <View style={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.card}>

              <View style={styles.circleContainer}>
                            <View style={styles.circle}>                            
                            </View>
                        </View>
                
                <Text style={{color: green.tamiser, textAlign:"center", fontWeight:"bold", marginBottom:10}}>LOYE PAIYE</Text>
                <View style={{marginBottom:25}}>
                  <Text style={{marginBottom:5,color:noire.autre, fontSize:15}}>PERIODE</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.hover,fontSize:14}}>Avril 2024</Text>
                  </View>
                </View>


                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                  <View>
                    <Text style={{marginBottom:5,color:noire.autre, fontSize:15}}>Statut</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",color:noire.hover,fontSize:11}}>PAYE</Text>
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
                    <Text style={{fontWeight:"bold", color:noire.hover, fontSize:13}}>120 000 CFA</Text>
                  </View>
                </View>

                <View style={{marginBottom:18}}>
                  <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>Date et heur de paiement</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.hover, fontSize:11}}>18/05/2024 18:00</Text>
                  </View>
                </View>

                <View style={{marginBottom:10}}>
                  <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>References</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.hover, fontSize:11}}>THDGFLKIUYNBKK</Text>
                  </View>
                </View>


              </View>
            </View>
            <View style={{position:'absolute', bottom:5, width:"100%", padding:15}}>
              <Button mode='contained' style={{backgroundColor:"white", borderWidth:0, borderRadius:5, borderColor: blue, marginBottom:10,  width:"90%", alignSelf:"center"}} labelStyle={{color: blue,
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
      height:100, 
      backgroundColor: noire.autre,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50
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
        marginBottom: 50,
        justifyContent: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 80,
        backgroundColor: green.tamiser,
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


})