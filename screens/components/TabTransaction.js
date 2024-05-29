import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blue, orange } from '../../constants/color';

/**
 * Renders a Tab Transaction component with a title and optional back action.
 *
 * @param {object} backAction - The back action to be performed when the back button is pressed.
 * @param {string} title - The title to be displayed in the header.
 * @return {JSX.Element} The rendered header component.
 */
export const TabTransaction = ({navigationr}) => {

    const navigation = useNavigation();

    const transactions = [
        {
            id: 1,
            logo: require('../../assets/orangeMoney.png'), // Exemple de chemin vers une image de carte de crédit
            type: 'RETRAIT',
            moyenPaiement: 'ORANGE',
            montant: -50.00,
            frais: 100,
            solde: 12.500,
            date: '22 Avril 2024',
            heurs: '18:00',
            Referance: 'TGHGDRREIEKLLKL',
        },
        {
            id: 2,
            logo: require('../../assets/wave.webp'), // Exemple de chemin vers une image de logo PayPal
            type: 'RETRAIT',
            moyenPaiement: 'WAVE',
            montant: -30.00, 
            frais: 100,
            solde: 12.500,
            date: '18 Avril 2024',
            heurs: '18:00',
            Referance: 'TGHGDRREIEKLLKL',
        },
        {
            id: 3,
            logo: require('../../assets/mtn.png'), // Exemple de chemin vers une image de logo PayPal
            type: 'RETRAIT',
            moyenPaiement: 'MTN',
            montant: -30.00,
            frais: 100,
            solde: 12.500,
            date: '18 Avril 2024',
            heurs: '18:00',
            Referance: 'TGHGDRREIEKLLKL',
        },
        // Ajoutez d'autres transactions ici...
    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{margin:10,backgroundColor:"#fff", padding:1, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
        <View style={styles.transactionItem}>
            <Image source={item.logo} style={styles.logo} />
            <View style={styles.transactionDetails}>
                <Text style={styles.transactionType}>{item.type}</Text>
                <Text style={styles.moyenPaiement}>{item.moyenPaiement}</Text>
            </View>
            <View style={styles.bottomDetails}>
                <Text style={styles.montant}>{item.montant} CFA</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
    
    return(
        <>
            <FlatList data={transactions} renderItem={renderItem}  keyExtractor={item => item.id}  />
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
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius:50
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