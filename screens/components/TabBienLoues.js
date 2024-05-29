import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blue, noire, orange } from '../../constants/color';
/**
 * Renders a Tab BienLoues component with a title and optional back action.
 *
 * @param {object} backAction - The back action to be performed when the back button is pressed.
 * @param {string} title - The title to be displayed in the header.
 * @return {JSX.Element} The rendered header component.
 */
export const TabBienLoues = ({navigationr}) => {

    const navigation = useNavigation();

    const Loyerdata = [
        {
            id: '1',
            name: 'CITE DADY 1',
            type: "Cite",
            nbPorte: 21,
            nbPiece: 4,
            nbLocataire: 20,
            photo: require('../../assets/villa.jpeg'),
            localisation: 'Abidjan - Cocody- 2 Plateaux',
            designation:'PIECES-2 DOUCHES-BATIMENT A-PORTE 26',
            date: '01/05/2024',
        },
        {
            id: '2',
            name: 'VILLA DADY 1',
            type: "Villa",
            nbPorte: 21,
            nbPiece: 4,
            nbLocataire: 20,
            photo: require('../../assets/villa.jpeg'),
            localisation: 'Abidjan - Cocody- 2 Plateaux',
            designation:'PIECES-2 DOUCHES-BATIMENT A-PORTE 26',
            date: '01/05/2024',
        },
    ];
    const LoyerItem = ({ item }) => (
        <TouchableOpacity style={{margin:10, backgroundColor:"#fff", padding:1, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
        <View style={styles.transactionItem}>
            <Image source={item.photo} style={styles.logo} />

            <View style={styles.transactionDetails}>

                <Text style={{ fontWeight: 'bold',fontSize: 12,color:orange}}>
                    {item.name}
                </Text>

                <Text style={{fontSize: 9,color:orange, marginLeft: 280,}}>
                    <MaterialCommunityIcons name="close-circle" size={12} color={noire.normal} />
                </Text>
            
            
                {item.type === "Cite" && (
                    <View>
                        <Text style={{ fontWeight: 'bold',fontSize: 10,color:noire.hover}}>Nombre de porte :
                            <Text style={{ fontWeight: 'bold',fontSize: 10,color:noire.normal}}>  {item.nbPorte} </Text>
                        </Text>
                            <Text style={{ fontWeight: 'bold',fontSize: 10,color:noire.hover}}>Nombre de locataire :
                            <Text style={{ fontWeight: 'bold',fontSize: 10,color:noire.normal}}>{item.nbLocataire} </Text>
                        </Text>
                    </View>
                )}

                {item.type === "Villa" && (
                    <View>
                        
                        <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal}}>Nombre de pieces :
                            <Text style={{ fontWeight: 'bold',fontSize: 8,color:noire.normal}}> {item.nbPiece} </Text>
                        </Text>

                        <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal}}>DESIGNATION :
                        <Text style={{ fontWeight: 'bold',fontSize: 8,color:noire.normal}}> {item.nbPiece} </Text>
                        <Text style={{fontSize: 8,color:noire.normal}}> {item.designation} </Text>
                        </Text>
                    </View>
                )}
                <Text style={{ fontWeight: 'bold',fontSize: 10,color:noire.hover}}>Localisation : <Text style={{ fontWeight: 'bold',fontSize: 8,color:noire.normal}}>{item.localisation} ...</Text></Text>

            </View>

        </View>
    </TouchableOpacity>
        );

    return(
        <>
            <View style={{margin:10, marginBottom: 5,top: 1,backgroundColor:"white"}}>
                <Text style={{ fontSize:11, color:noire.normal,}}>
                        Mes propriétés loués
                        <Text style={{fontWeight: 'bold',color:noire.normal, fontSize: 11,marginLeft: 90, }}> 2
                    </Text>
                </Text>
            

            </View>

            <FlatList data={Loyerdata} renderItem={LoyerItem}  keyExtractor={item => item.id}  />
        </>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1
    },


    transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0,
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius:3
    },
    transactionDetails: {
        flex: 1,
    },

    transactionType: {
        fontWeight: 'bold',
        fontSize: 10,
        color:blue.normal
    },

    moyenPaiement: {
        fontSize: 10,
        marginBottom: 5,
        color:orange
    },

    bottomDetails: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 'auto', // Push the details to the right
    },

    montant: {
        fontSize: 13,
        fontWeight: 'bold',
        color:blue.normal
    },

    
    date: {
        fontSize: 10,
        color: '#888',
    },

    containe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20,
      },

})