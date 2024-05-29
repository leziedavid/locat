import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Divider } from 'react-native-paper'
import { blue, green, noire, orange } from '../../constants/color'
import { Header } from '../components/Header'

const PaymentDetails = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <Header  firsttilte={true} backActionColor="#fff" TopColor="#fff" titlecolors="white" title="Mon domicle" Toptitle="" backAction={true} backgroundColor={green.normal} />
        <View style={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.card}>
                <Text style={{color: green.normal, textAlign:"center", fontWeight:"bold", marginBottom:10}}>MOIS PROCHAIN</Text>
                <View style={{marginBottom:25}}>
                  <Text style={{marginBottom:5, fontSize:15}}>PERIODE</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{padding:5, backgroundColor:green.hover, color: green.normal, marginRight:10,fontSize:10}}>Mois prochain</Text>
                    <Text style={{fontWeight:"bold",fontSize:10}}>Avril 2024</Text>
                  </View>
                </View>
                <View style={{marginBottom:10}}>
                  <Text style={{marginBottom:5, fontSize:13}}>Date limite de paiement</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",fontSize:11}}>04 Avril 2024</Text>
                  </View>
                </View>
                <View style={{marginBottom:10}}>
                  <Text style={{marginBottom:5, fontSize:13}}>Coût du loyer</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",fontSize:11}}>120 000 CFA</Text>
                  </View>
                </View>
                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                  <View>
                    <Text style={{marginBottom:5, fontSize:15}}>Offre spéciale appliqué</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                      <Text style={{fontWeight:"bold", color:green.normal,fontSize:10}}>-10%</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{color: green.normal,fontSize:10,fontWeight:"bold"}}>= 12 000 FCFA</Text>
                  </View>
                </View>
                <Divider bold style={{marginBottom:10}} />
                <View style={{flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}>
                  <Text style={{color: noire.hover, fontWeight:"bold",fontSize:12}}>Loyer à payer</Text>
                  <Text style={{color: orange, fontWeight:"bold",fontSize:12}}>132 000 FCFA</Text>
                </View>
              </View>
            </View>
            <View style={{position:'absolute', bottom:30, width:"100%", padding:10}}>
              <Button mode='contained' style={{backgroundColor: green.normal, borderWidth:1, borderColor: blue.normal, marginBottom:10, width:"75%", alignSelf:"center",borderRadius: 14}}>Payer le loyer</Button>
              <Text style={{textAlign:"center", fontSize:12}}>Vous avez la possibilité de payer des mois de loyer par avance en cliquant sur</Text>
              <TouchableOpacity  onPress={()=> navigation.navigate('PaiementDavance')}>
                <Text style={{ fontWeight: "bold", color: blue.normal, textAlign: "center", marginTop: 10,fontSize: 12 }}>PAIEMENT ANTICIPÉ</Text>
              </TouchableOpacity>
              

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
      backgroundColor: green.normal,
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50
    },
    card:{
      padding:15,
      borderRadius:15,
      backgroundColor:"#fff",
      height:380,
      top: 0,
    }
})