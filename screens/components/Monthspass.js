import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blue, orange,green,autre,red,noire } from '../../constants/color'
import { Header } from './Header'
import { Button, Divider } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const PaymentDetails = () => {
  return (
    <View style={{flex:1}}>
        <Header firsttilte={false} backActionColor="#fff" TopColor={red.normal}  titlecolors={red.normal}  title="Mon domicle" Toptitle="MOIS PASSE"  backAction={true} backgroundColor={red.hover} />
        <View style={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.card}>

              <View style={styles.circleContainer}>
                            <View style={styles.circle}>
                                  <MaterialCommunityIcons style={{fontWeight: 'bold'}} name="close" size={100} color={"white"} />
                            </View>
                        </View>

                        <Text style={{color:'red', textAlign:"center", fontWeight:"bold", marginBottom:8}}>LOYE IMPAIYE</Text>

                
                        <View style={{marginBottom:8, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                          <View>
                            <Text style={{marginBottom:5,color:noire.hover, fontSize:15}}>PERIODE</Text>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text style={{fontWeight:"bold",color:noire.normal,fontSize:11}}>Avril 2024</Text>
                            </View>
                      </View>

                  <View>
                  <View style={{padding:5, borderRadius:15, width:"100%", marginBottom:10}}>
                        <Text style={{color: red.normal, fontSize:8,fontWeight:"bold",}}>PERIODE</Text>
                        <Text style={{color: red.normal, fontSize:6,fontWeight:"bold",}}>05 JANVIER - 05 FEVRIER</Text>
                  </View>
                  </View>
                </View>
                
                <View style={{marginBottom:10, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                  <View>
                    <Text style={{marginBottom:5,color:noire.hover, fontSize:15}}>Statut</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",color:red.normal,fontSize:11}}>Impayé</Text>
                    </View>
                  </View>
                  <View>
                  </View>
                </View>

                <View style={{marginBottom:10}}>
                  <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>Montant du LOYE PLUS PENALITE</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.normal, fontSize:13}}>120 000 CFA</Text>
                  </View>
                </View>

                <View style={{marginBottom:10}}>
                  <Text style={{marginBottom:5, color:noire.hover,fontSize:13}}>PENALITE APPLIQUE + <Text style={{fontWeight:"bold",color:'red',fontSize:11}}>10%</Text>  </Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", color:noire.normal, fontSize:13}}>120 000 CFA</Text>
                  </View>
                </View>

                <View style={{marginBottom:10}}>
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

            <View style={{position:'absolute', bottom:0, width:"100%", padding:1}}>
              <Button mode='contained' style={{backgroundColor: red.hover, borderWidth:1, borderColor: red.hover, marginBottom:10, width:"90%", alignSelf:"center"}} labelStyle={{color:red.normal,
                }}>Payer le loyer
                </Button>
              <Text style={{textAlign:"center", fontSize:12, marginTop:1}}>Vous avez la possibilité de payer des mois de loyer {"\n"}  par avance en cliquant sur</Text>
              <Text style={{fontWeight:"bold", color:blue, fontSize:10, textAlign:"center", marginTop:10}}>PAIEMENT ANTICIPÉ</Text>
              <Text > </Text>
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
      backgroundColor: red.hover,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50
    },
    card:{
      padding:15,
      borderRadius:15,
      backgroundColor:"#fff",
      height:460,
      top:  20,
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
        backgroundColor:'red',
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