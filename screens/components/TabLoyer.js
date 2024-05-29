import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import { blue, green, noire, orange, red } from '../../constants/color';

/**
 * Renders a header component with a title and optional back action.
 *
 * @param {object} backAction - The back action to be performed when the back button is pressed.
 * @param {string} title - The title to be displayed in the header.
 * @return {JSX.Element} The rendered header component.
 */
export const TabLoyer = ({navigationr}) => {

    const navigation = useNavigation();

    const Loyerdata = [
        {
            id: '1',
            name: 'Kady touré',
            address: 'Cité DAdy 2 - Porte 11',
            montant: '120 000',
            photo: require('../../assets/user.jpg'),
            months: 'MARS 2024',
            date: '04/MARS/2024',
            periode:'05 Janvier - 05 Fevrier',
        },
        {
            id: '2',
            name: 'Tra bi',
            address: 'Cité DAdy 2 - Porte 12',
            montant: '170 000',
            photo: require('../../assets/user.jpg'), 
            months: 'MARS 2024',
            date: '04/MARS/2024',
            periode:'05 Janvier - 05 Fevrier',
        },
        ];
    const LoyerItem = ({ item }) => (

        <TouchableOpacity style={{margin:10, backgroundColor:"#fff", padding:1, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
            <View style={styles.transactionItem}>

                <Image source={item.photo} style={styles.logo} />
                <View style={styles.transactionDetails}>
                    <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal}}>{item.name}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>

                        <MaterialCommunityIcons name="close-circle" size={12} color={green.normal} />
                        <Text style={{ color: green.normal, fontSize: 9 }}>LOYE  PAYE</Text>
                                    
                        <View style={ { backgroundColor: green.hover, padding: 5, borderRadius: 15, width: '45%', marginLeft: 10,}}>
                            <Text style={{ color:green.normal, fontSize: 5 }}>OFFRE -10% appliqué</Text>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal}}>{item.address}</Text>
                </View>
                <View style={styles.bottomDetails}>
                    <Text style={{ fontWeight: 'bold',fontSize: 9,color:orange,marginLeft: 50,}}>{item.months}</Text>
                    <Text style={{ fontWeight: 'bold',fontSize: 8,color:green.normal,marginLeft: 50,}}>{item.montant} Fr</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
        );

    const LoyerEnAttente = [
        {
        id: '1',
        name: 'Kady touré',
        address: 'Cité DAdy 2 - Porte 11',
        montant: '120 000',
        photo: require('../../assets/user.jpg'),
        months: 'MARS 2024',
        status: 1,
        periode:'05 Janvier - 05 Fevrier',
        date: '04/MARS/2024',
        },
        {
        id: '2',
        name: 'Kady touré',
        address: 'Cité DAdy 2 - Porte 11',
        montant: '120 000',
        photo: require('../../assets/user.jpg'),
        months: 'MARS 2024',
        status: 0,
        date: '04/MARS/2024',
        periode:'05 Janvier - 05 Fevrier',
        },
    ];
    const EnAttenteItem = ({ item }) => (
        <TouchableOpacity style={{margin:10, backgroundColor:"#fff", padding:10, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
            <View style={styles.transactionItem}>

                <Image source={item.photo} style={styles.logo} />
                <View style={styles.transactionDetails}>
                    <Text style={{ fontWeight: 'bold',marginBottom: 3,fontSize: 9,color:noire.normal}}>{item.name}</Text>
                    <Text style={{ fontWeight: 'bold',marginBottom: 3,fontSize: 9,color:noire.normal}}>{item.address}</Text>
                    
                    {item.status === 0 && (
                            <Text style={{fontWeight: "bold",marginBottom: 3,fontSize: 7,color:noire.normal,}} >
                                <MaterialCommunityIcons name="close-circle" size={12} color={red.normal} />
                                <Text style={{fontWeight: "bold",fontSize: 8,color:red.normal,}}>Loyé non payer
                                </Text> {item.montant} Fr
                            </Text>
                        )}
                    {item.status === 1 && (
                        <Text style={{fontWeight: "bold",marginBottom: 3,fontSize: 8,color:noire.normal}} >
                            <Text style={{fontWeight: "bold",fontSize: 8,color:orange,}}>Loyé payer </Text> {item.montant} Fr
                        </Text>
                    )}

                </View>
                
                <View style={styles.bottomDetails}>
                    
                    <Text style={{ fontWeight: 'bold', fontSize: 9,color:orange, marginLeft: 80,}}>{item.months}</Text>
                    {item.status === 0 && (
                        <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal,marginLeft: 80,}}>PERIODE</Text>
                        
                    )}
                    {item.status === 0 && (
                        <Text style={styles.periode}>{item.periode} </Text>
                    )}

                    {item.status === 1 && (
                        <Text style={styles.date}> </Text>
                    )}
                    
                    {item.status === 0 && (
                        <View style={ { backgroundColor: red.hover, padding: 0, borderRadius: 15, width: '50%', marginLeft: 80,}}>
                            <Text style={{ color:red.normal, fontSize: 5,}}>Pénalité Appliqué + 10% </Text>
                        </View>
                    )}
                    {item.status === 1 && (
                        <View style={ { backgroundColor: green.hover, padding: 0, borderRadius: 15, width: '50%', marginLeft: 80,}}>
                            <Text style={{ color:green.normal, fontSize: 5,}}>OFFRE -10% appliqué</Text>
                        </View>
                    )}

                </View>
            </View>
        </TouchableOpacity>
        );
    
    const Moispasser = [
            {
                id: '1',
                name: 'Kady touré',
                address: 'Cité DAdy 2 - Porte 11',
                montant: '120 000',
                photo: require('../../assets/user.jpg'),
                months: 'MARS 2024',
                status: 0,
                periode:'05 Janvier - 05 Fevrier',
                date: '04/MARS/2024',
                },
    ];

    const MoispasserItem = ({ item }) => (
            <TouchableOpacity style={{margin:10,backgroundColor:"#fff", padding:10, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
                <View style={styles.transactionItem}>

                <Image source={item.photo} style={styles.logo} />
                <View style={styles.transactionDetails}>
                    <Text style={{ fontWeight: 'bold',marginBottom: 3,fontSize: 9,color:noire.normal}}>{item.name}</Text>
                    <Text style={{ fontWeight: 'bold',marginBottom: 3,fontSize: 9,color:noire.normal}}>{item.address}</Text>
                    
                    {item.status === 0 && (
                            <Text style={{fontWeight: "bold",marginBottom: 3,fontSize: 8,color:noire.normal,}} >
                                <MaterialCommunityIcons name="close-circle" size={12} color={red.normal} />
                                <Text style={{fontWeight: "bold",fontSize: 7,color:red.normal,}}>Loyé non payer
                                </Text> {item.montant} Fr
                            </Text>
                        )}
                    {item.status === 1 && (
                        <Text style={{fontWeight: "bold",marginBottom: 3,fontSize: 8,color:noire.normal}} >
                        <Text style={{fontWeight: "bold",fontSize: 8,color:orange,}}>Loyé  payer </Text> {item.montant} Fr
                        </Text>
                    )}

                </View>

                <View style={styles.bottomDetails}>
                    
                    <Text style={{ fontWeight: 'bold', fontSize: 9,color:orange, marginLeft: 80,}}>{item.months}</Text>
                    {item.status === 0 && (
                        <Text style={{ fontWeight: 'bold',fontSize: 9,color:red.normal,marginLeft: 80,}}>Mois passé</Text>
                        
                    )}
                    {item.status === 1 && (
                        <Text style={styles.date}> </Text>
                    )}
                    
                    {item.status === 0 && (
                        <View style={ { backgroundColor: red.hover, padding: 0, borderRadius: 15, width: '50%', marginLeft: 80,}}>
                            <Text style={{ color:red.normal, fontSize: 5,}}>Pénalité Appliqué + 10% </Text>
                        </View>
                    )}

                </View>
                </View>
            </TouchableOpacity>
        );

    return(
        <>
        {/* <View style={{flex:1, padding:5}}> */}

        <ScrollView style={{ flex: 1,padding:5}}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, top: 3, backgroundColor: "white", height: 30 }}>
                <Text style={{ fontSize: 11, color: 'black' }}>MOIS EN COURS </Text>
                <Text style={{ fontSize: 11, color: 'orange' }}>MARS 2024 </Text>
                <Text style={{ fontSize: 11, color: 'black' }}>Paiement </Text>
                <Text style={{ fontSize: 11, color: 'red' }}>2 / 8 </Text>
                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                    <MaterialCommunityIcons name="chevron-down" size={30} color="black" />
                </TouchableOpacity>
            </View>

            {/* <FlatList data={Loyerdata} renderItem={LoyerItem}  keyExtractor={item => item.id}  /> */}

            <View>
                {Loyerdata.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={{ margin: 10, backgroundColor: "#fff",padding: 1,  marginBottom: 5, borderRadius: 10 }} onPress={() => navigation.navigate('Detailpayment', item)} >
                        <View style={styles.transactionItem}>
                            <Image source={item.photo} style={styles.logo} />
                            <View style={styles.transactionDetails}>
                                <Text style={{ fontWeight: 'bold', fontSize: 9, color: noire.normal }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <MaterialCommunityIcons name="close-circle" size={12} color={green.normal} />
                                    <Text style={{ color: green.normal, fontSize: 9 }}>LOYE  PAYE</Text>
                                    <View style={{ backgroundColor: green.hover, padding: 5, borderRadius: 15, width: '45%', marginLeft: 10, }}>
                                        <Text style={{ color: green.normal, fontSize: 5 }}>OFFRE -10% appliqué</Text>
                                    </View>
                                </View>
                                <Text style={{ fontWeight: 'bold', fontSize: 9, color: noire.normal }}>{item.address}</Text>
                            </View>
                            <View style={styles.bottomDetails}>
                                <Text style={{ fontWeight: 'bold', fontSize: 9, color: orange, marginLeft: 50 }}>{item.months}</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 8, color: green.normal, marginLeft: 50 }}>{item.montant} Fr</Text>
                                <Text style={styles.date}>{item.date}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, top: 5, backgroundColor: "white", height: 30 }}>
                <Text style={{ fontSize: 11, color: 'black' }}>En attente de paiemen </Text>
            </View>

            <View>
                {LoyerEnAttente.map((item) => (
                    <TouchableOpacity  key={item.id} style={{margin:10, backgroundColor:"#fff", padding:10, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
                    <View style={styles.transactionItem}>

                        <Image source={item.photo} style={styles.logo} />
                        <View style={styles.transactionDetails}>
                            <Text style={{ fontWeight: 'bold',marginBottom: 3,fontSize: 9,color:noire.normal}}>{item.name}</Text>
                            <Text style={{ fontWeight: 'bold',marginBottom: 3,fontSize: 9,color:noire.normal}}>{item.address}</Text>

                            {item.status === 0 && (
                                    <Text style={{fontWeight: "bold",marginBottom: 3,fontSize: 7,color:noire.normal,}} >
                                        <MaterialCommunityIcons name="close-circle" size={12} color={red.normal} />
                                        <Text style={{fontWeight: "bold",fontSize: 8,color:red.normal,}}>Loyé non payer
                                        </Text> {item.montant} Fr
                                    </Text>
                                )}
                            {item.status === 1 && (
                                <Text style={{fontWeight: "bold",marginBottom: 3,fontSize: 8,color:noire.normal}} >
                                    <Text style={{fontWeight: "bold",fontSize: 8,color:orange,}}>Loyé payer </Text> {item.montant} Fr
                                </Text>
                            )}

                        </View>
                        <View style={styles.bottomDetails}>

                            <Text style={{ fontWeight: 'bold', fontSize: 9,color:orange, marginLeft: 80,}}>{item.months}</Text>
                            {item.status === 0 && (
                                <Text style={{ fontWeight: 'bold',fontSize: 9,color:noire.normal,marginLeft: 80,}}>PERIODE</Text>
                                
                            )}
                            {item.status === 0 && (
                                <Text style={styles.periode}>{item.periode} </Text>
                            )}
                            {item.status === 1 && (
                                <Text style={styles.date}> </Text>
                            )}
                            
                            {item.status === 0 && (
                                <View style={ { backgroundColor: red.hover, padding: 0, borderRadius: 15, width: '50%', marginLeft: 80,}}>
                                    <Text style={{ color:red.normal, fontSize: 5,}}>Pénalité Appliqué + 10% </Text>
                                </View>
                            )}
                            {item.status === 1 && (
                                <View style={ { backgroundColor: green.hover, padding: 0, borderRadius: 15, width: '50%', marginLeft: 80,}}>
                                    <Text style={{ color:green.normal, fontSize: 5,}}>OFFRE -10% appliqué</Text>
                                </View>
                            )}
        
                        </View>
                    </View>
                </TouchableOpacity>
                ))}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, top: 5, backgroundColor: "white", height: 30 }}>
                <Text style={{ fontSize: 11, color: 'black' }}>Mois passé</Text>
            </View>

            <View>
                {Moispasser.map((item) => (
                    <TouchableOpacity  key={item.id}  style={{margin:10,backgroundColor:"#fff", padding:10, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
                    <View style={styles.transactionItem}>
    
                    <Image source={item.photo} style={styles.logo} />
                    <View style={styles.transactionDetails}>
                        <Text style={{ fontWeight: 'bold',marginBottom: 3,fontSize: 9,color:noire.normal}}>{item.name}</Text>
                        <Text style={{ fontWeight: 'bold',marginBottom: 3,fontSize: 9,color:noire.normal}}>{item.address}</Text>
                        
                        {item.status === 0 && (
                                <Text style={{fontWeight: "bold",marginBottom: 3,fontSize: 8,color:noire.normal,}} >
                                    <MaterialCommunityIcons name="close-circle" size={12} color={red.normal} />
                                    <Text style={{fontWeight: "bold",fontSize: 7,color:red.normal,}}>Loyé non payer
                                    </Text> {item.montant} Fr
                                </Text>
                            )}
                        {item.status === 1 && (
                            <Text style={{fontWeight: "bold",marginBottom: 3,fontSize: 8,color:noire.normal}} >
                            <Text style={{fontWeight: "bold",fontSize: 8,color:orange,}}>Loyé  payer </Text> {item.montant} Fr
                            </Text>
                        )}
    
                    </View>
    
                    <View style={styles.bottomDetails}>
                        
                        <Text style={{ fontWeight: 'bold', fontSize: 9,color:orange, marginLeft: 80,}}>{item.months}</Text>
                        {item.status === 0 && (
                            <Text style={{ fontWeight: 'bold',fontSize: 9,color:red.normal,marginLeft: 80,}}>Mois passé</Text>
                            
                        )}
                        {item.status === 1 && (
                            <Text style={styles.date}> </Text>
                        )}
                        
                        {item.status === 0 && (
                            <View style={ { backgroundColor: red.hover, padding: 0, borderRadius: 15, width: '50%', marginLeft: 80,}}>
                                <Text style={{ color:red.normal, fontSize: 5,}}>Pénalité Appliqué + 10% </Text>
                            </View>
                        )}
    
                    </View>
                    </View>
                </TouchableOpacity>

                ))}
            </View>
        </ScrollView>
            
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
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0,
    },
    logo: {
        width: 40,
        height: 40,
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
        marginLeft: 50,
    },
    periode: {
        fontSize: 8,
        color: orange,
        marginLeft: 50,
    },

    containe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20,
    },

})