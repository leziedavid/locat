import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { blue, noire, orange } from '../../constants/color';

/**
 * Renders a Tab Locataire component with a title and optional back action.
 *
 * @param {object} backAction - The back action to be performed when the back button is pressed.
 * @param {string} title - The title to be displayed in the header.
 * @return {JSX.Element} The rendered header component.
 */
export const TabLocataire = ({navigationr}) => {

    const navigation = useNavigation();

    const data = [
        {
            id: '1',
            name: 'John Doe',
            address: 'Cité DAdy 2 - Porte 12',
            photo: require('../../assets/user.jpg'),
            months: '2 MOIS',
            date: '01/05/2024',
        },
        {
            id: '2',
            name: 'Tra bi',
            address: 'Cité DAdy 2 - Porte 12',
            photo: require('../../assets/user.jpg'),
            months: '1 MOIS',
            date: '01/05/2024',
        },
    ];
    const UsersItem = ({ item }) => (
        <TouchableOpacity style={{margin:10,backgroundColor:"#fff", padding:1, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('UserLocation',item)}>
            <View style={styles.transactionItem}>
                <Image source={item.photo} style={styles.logo} />
                <View style={styles.transactionDetails}>
                    <Text style={{ fontWeight: 'bold',fontSize: 12,color:noire.normal}}>{item.name}</Text>
                    <Text style={{ fontWeight: 'bold',fontSize: 11,color:noire.hover}}>{item.address}</Text>
                </View>
                <View style={styles.bottomDetails}>
                    <Text style={{ fontWeight: 'bold',fontSize: 11,color:blue.normal}}>{item.months}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
        );
    
    return(
        <>
            <View style={{flex:1, padding:5}}> 
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, top: 5, backgroundColor: "white", height: 30 }}>
                    <Text style={{ fontSize: 13, color: 'black' }}>Mes locataires</Text>
                </View>
                <FlatList data={data} renderItem={UsersItem}  keyExtractor={item => item.id}  />
            </View>
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