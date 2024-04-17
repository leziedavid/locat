import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blue, green, orange } from '../../constants/color'
import { Header } from '../components/Header'
import { Button, Divider } from 'react-native-paper'

const PaymentDetails = () => {
  return (
    <View style={{flex:1}}>
        <Header title="Mon domicle" backAction={true} backgroundColor={green.normal} />
        <View style={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.card}>
                <Text style={{color: green.normal, textAlign:"center", fontWeight:"bold", marginBottom:10}}>MOIS PROCHAIN</Text>
                <View style={{marginBottom:25}}>
                  <Text style={{marginBottom:5, fontSize:17}}>PERIODE</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{padding:5, backgroundColor:green.hover, color: green.normal, marginRight:10}}>Mois prochain</Text>
                    <Text style={{fontWeight:"bold"}}>Avril 2024</Text>
                  </View>
                </View>
                <View style={{marginBottom:10}}>
                  <Text style={{marginBottom:5, fontSize:17}}>Date limite de paiement</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>04 Avril 2024</Text>
                  </View>
                </View>
                <View style={{marginBottom:10}}>
                  <Text style={{marginBottom:5, fontSize:17}}>Coût du loyer</Text>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>120 000 CFA</Text>
                  </View>
                </View>
                <View style={{marginBottom:5, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                  <View>
                    <Text style={{marginBottom:5, fontSize:17}}>Offre spéciale appliqué</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                      <Text style={{fontWeight:"bold", color:green.normal}}>-10%</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{color: green.normal}}>= 12 000 FCFA</Text>
                  </View>
                </View>
                <Divider bold style={{marginBottom:10}} />
                <View style={{flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}>
                  <Text>Loyer à payer</Text>
                  <Text style={{color: orange, fontWeight:"bold"}}>132 000 FCFA</Text>
                </View>
              </View>
            </View>
            <View style={{position:'absolute', bottom:30, width:"100%", padding:15}}>
              <Button mode='contained' style={{backgroundColor: green.normal, borderWidth:1, borderColor: blue, marginBottom:10, width:"75%", alignSelf:"center"}}>Payer le loyer</Button>
              <Text style={{textAlign:"center", fontSize:16}}>Vous avez la possibilité de payer des mois de loyer par avance en cliquant sur</Text>
              <Text style={{fontWeight:"bold", color:blue, textAlign:"center", marginTop:5}}>PAIEMENT ANTICIPÉ</Text>
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
      height:330,
    }
})