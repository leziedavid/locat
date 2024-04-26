import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { blue, orange,green,autre,red,noire } from '../../constants/color'
import { Header } from './Header'
import { Button, Divider } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const PaymentDetails = ({route}) => {
const  item  = route.params; 
console.log(item);

  return (
    <View style={{flex:1}}>
        <Header  firsttilte={false} backActionColor="#fff" TopColor="#fff" titlecolors="white" title="Détail de la transaction " Toptitle="" backAction={true} backgroundColor={orange} />
        <View style={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.card}>
                      <View style={styles.circleContainer}>
                            <View style={styles.circle}> 
                            <Image source={item.logo}  style={styles.logo} resizeMode="cover" // Redimensionne l'image pour qu'elle remplisse le conteneur
                                />                          
                            </View>
                        </View>


                 <Text style={{color: orange, textAlign:"center", fontWeight:"bold", marginBottom:10}}>{item.moyenPaiement}</Text>

                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                 
                    <View>
                      <Text style={{marginBottom:5,color:noire.autre, fontSize:13}}>Statut</Text>
                    </View>

                  <View>
                    <View style={{padding:5, borderRadius:15, width:"100%", marginBottom:10}}>
                          <Text style={{color: orange, fontSize:10}}>{item.type}</Text>
                    </View>
                  </View>

                </View>


                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                 
                    <View>
                      <Text style={{marginBottom:5,color:noire.autre, fontSize:13}}>Montant</Text>
                    </View>
                    
                  <View>
                    <View style={{padding:5, borderRadius:15, width:"100%", marginBottom:10}}>
                          <Text style={{color: orange, fontSize:10}}>{item.montant} Fcfa</Text>
                    </View>
                  </View>

                </View>

                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                 
                    <View>
                      <Text style={{marginBottom:5,color:noire.autre, fontSize:13}}>Frais de transaction</Text>
                    </View>
                    
                  <View>
                    <View style={{padding:5, borderRadius:15, width:"100%", marginBottom:10}}>
                          <Text style={{color: noire.hover, fontSize:10}}>{item.frais}</Text>
                    </View>
                  </View>

                </View>


                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                 
                    <View>
                      <Text style={{marginBottom:5,color:noire.autre, fontSize:13}}>Solde apres transactionn</Text>
                    </View>
                    
                  <View>
                    <View style={{padding:5, borderRadius:15, width:"100%", marginBottom:10}}>
                          <Text style={{color: noire.hover, fontSize:10}}>{item.solde}</Text>
                    </View>
                  </View>

                </View>



                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                 
                    <View>
                      <Text style={{marginBottom:5,color:noire.autre, fontSize:13}}>Date et heurs</Text>
                    </View>
                    
                  <View>
                    <View style={{padding:5, borderRadius:15, width:"100%", marginBottom:10}}>
                          <Text style={{color: noire.hover, fontSize:10}}>{item.date}  {item.heurs} </Text>
                    </View>
                  </View>

                </View>

                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                 
                 <View>
                   <Text style={{marginBottom:5,color:noire.autre, fontSize:13}}>Referance</Text>
                 </View>
                 
               <View>
                 <View style={{padding:5, borderRadius:15, width:"100%", marginBottom:10}}>
                       <Text style={{color: noire.hover, fontSize:10}}>{item.Referance}</Text>
                 </View>
               </View>

             </View>


              </View>
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
      backgroundColor: orange,
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

    logo: {
      width: '100%', // Assurez-vous que l'image remplit le conteneur du cercle
      height: '100%',
      borderRadius: 80,
  },


})