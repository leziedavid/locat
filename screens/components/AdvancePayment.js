import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { blue, green, noire } from '../../constants/color'
import { Header } from './Header'
const AdvanceLayment = () => {
  return (
    <View style={{flex:1}}>
        <Header  firsttilte={false} backActionColor="#fff" TopColor="#fff" titlecolors="white" title="Mon domicle" Toptitle="PAIEMENT ANTICIPÉ" backAction={true} backgroundColor={blue.normal} />
        <View style={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.card}>

              <View style={styles.circleContainer}>
                  <View style={styles.circle}>
                      <MaterialCommunityIcons style={[styles.icon, { fontWeight: 'bold' }]} name="check" size={100} color={'white'} />
                  </View>
              </View>
                
                <Text style={{color: green.normal, textAlign:"center", fontWeight:"bold", marginBottom:5}}>LOYÉ PAYÉ D’AVANCE</Text>

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
                              {[1, 2,3,4].map((item, index) => (
                                  <View key={index} style={{backgroundColor: 'white', borderRadius: 10, marginRight: 5, marginBottom: 5, padding:2, borderColor: green.normal, borderWidth: 1}}>
                                      <Text style={{color: green.normal, fontSize: 8,fontWeight:"bold",}}>MARS 2024</Text>
                                  </View>
                              ))}<Text style={{fontWeight:"bold",color: blue.normal, fontSize:10,}}>4 mois</Text>
                          </View>

                        </View>

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

                      </View>
                    </View>

                    <View style={{marginBottom:5}}>
                      <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>Coût du loyé par mois</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:noire.normal, fontSize:13}}>120 000 CFA</Text>
                      </View>
                    </View>

                    <View style={{marginBottom:5}}>
                      <Text style={{marginBottom:0, color:noire.hover,fontSize:13}}>Nombre de mois </Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:noire.normal, fontSize:13}}> 4 </Text>
                      </View>
                    </View>

                    <View style={{marginBottom:5}}>
                      <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>Montant tota</Text>
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

                    <View style={{marginBottom:5}}>
                      <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>Date et heur de paiement</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:noire.normal, fontSize:10}}>18/05/2024 18:00</Text>
                      </View>
                    </View>

                    <View style={{marginBottom:5}}>
                      <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>References</Text>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontWeight:"bold", color:noire.normal, fontSize:10}}>THDGFLKIUYNBKK</Text>
                      </View>
                    </View>

              </View>
            </View>
            
            <View style={{position:'absolute', bottom:0, width:"100%", padding:0}}>
              <Button mode='contained' style={{backgroundColor:"white", borderWidth:0, borderRadius:5, borderColor: blue.normal, marginBottom:5,  width:"90%", alignSelf:"center",borderRadius: 14}} labelStyle={{color: blue.normal, }} >Ma facture </Button>
              <Text style={{textAlign:"center", fontSize:10, color:noire.hover,}}>Votre facture est disponible a tous {"\n"} moment même hors ligne</Text>
            </View>

        </View>
    </View>
  )
}

export default AdvanceLayment

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
      padding:10,
      borderRadius:15,
      backgroundColor:"#fff",
      height:530,
      top: 35,
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