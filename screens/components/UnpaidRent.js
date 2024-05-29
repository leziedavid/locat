import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { Button, Divider } from 'react-native-paper'
import { blue, green, noire, red } from '../../constants/color'
import { Header } from './Header'
const UnpaidRent = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <Header firsttilte={true} backActionColor="#fff" TopColor="#fff" titlecolors="white" title="Mon domicle" Toptitle="" backAction={true} backgroundColor={blue.normal} />
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.card}>
            <Text style={{ color: blue.normal, textAlign: "center", fontWeight: "bold", marginBottom:15 }}>MOIS EN COURS</Text>
            <View style={{ marginBottom: 25 }}>
              <Text style={{ marginBottom: 5, fontSize: 15 }}>PERIODE</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ padding: 5, backgroundColor: green.hover, color: blue.normal, marginRight: 10, fontSize: 10 }}>Mois en cours</Text>
                <Text style={{ fontWeight: "bold", fontSize: 10 }}>Avril 2024</Text>
              </View>
            </View>


            <View style={{ marginBottom: 8, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
              <View>
                <Text style={{ marginBottom: 5, color: noire.hover, fontSize: 15 }}>Date limite de paiement</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontWeight: "bold", color: noire.normal, fontSize: 11 }}>Avril 2024</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text style={{ padding: 5, backgroundColor: red.hover, color: red.normal,borderRadius:12, marginRight: 10, fontSize: 10 }}>EXPIRE</Text>
              </View>

            </View>

            <View style={{ marginBottom:15 }}>
              <Text style={{ marginBottom: 5, fontSize: 13 }}>Coût du loyer</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 11 }}>120 000 CFA</Text>
              </View>
            </View>
            <View style={{ marginBottom: 5, flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
              <View>
                <Text style={{ marginBottom: 5, fontSize: 15 }}>Pénalité appliqué</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontWeight: "bold", color: red.normal, fontSize: 10 }}>-10%</Text>
                </View>
              </View>
              <View>
                <Text style={{ color: red.normal, fontSize: 10, fontWeight: "bold" }}>= 12 000 FCFA</Text>
              </View>
            </View>
            <Divider bold style={{ marginBottom:15 }} />
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ color: noire.hover, fontWeight: "bold", fontSize: 12 }}>Loyer à payer</Text>
              <Text style={{ color: blue.normal, fontWeight: "bold", fontSize: 12 }}>132 000 FCFA</Text>
            </View>
          </View>
        </View>

        <View style={{ position: 'absolute', bottom: 30, width: "100%", padding: 15 }}>
          <Button mode='contained' style={{ backgroundColor: blue.normal, borderWidth: 1, borderColor: blue.normal, marginBottom:15, width: "90%", alignSelf: "center", borderRadius: 14 }}>Payer le loyer</Button>

          <Text style={{ textAlign: "center", fontSize: 12 }}>Vous avez la possibilité de payer des mois de loyer par avance en cliquant sur</Text>
          
          <TouchableOpacity  onPress={()=> navigation.navigate('PaiementDavance')}>
              <Text style={{ fontWeight: "bold", color: blue.normal, textAlign: "center", marginTop: 10,fontSize: 12 }}>PAIEMENT ANTICIPÉ</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default UnpaidRent

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    padding: 10,
    height: 100,
    backgroundColor: blue.normal,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
    
  },
  card: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    height: 380,
    top: 0,
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


})