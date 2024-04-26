import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput,FlatList } from 'react-native';

import React, { useState } from 'react';
import { blue, orange,green,autre,red,noire } from '../../constants/color'
import { Button, Portal, Modal, Snackbar,Divider } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard';

const Home = ({navigation}) => {
    const [visible, setVisible] = React.useState(true);
    const onShowModal = () => setVisible(true);
    const onHideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 25, width: '90%', alignSelf: 'center', borderRadius: 10, };
    const [copiedText, setCopiedText] = React.useState('');
    const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
    const onToggleSnackBar = () => setVisibleSnackbar(!visibleSnackbar);
    const onDismissSnackBar = () => setVisibleSnackbar(false);

    const [activeSection, setActiveSection] = useState('loyer');

    const handleLoyerClick = () => {
        setActiveSection('loyer');
    };

    const handleTransactionsClick = () => {
        setActiveSection('transactions');
    };

    
    const [time, setTime] = useState(true);

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync('MACI09484');
    };
    
    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };


    const transactions = [
        {
            id: 1,
            logo: require('../../assets/orangeMoney.png'), // Exemple de chemin vers une image de carte de crédit
            type: 'RECHARGE',
            moyenPaiement: 'ORANGE',
            montant: 50.00,
            frais: 100,
            solde: 12.500,
            date: '22 Avril 2024',
            heurs: '18:00',
            Referance: 'TGHGDRREIEKLLKL',
        },
        {
            id: 2,
            logo: require('../../assets/wave.webp'), // Exemple de chemin vers une image de logo PayPal
            type: 'RECHARGE',
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
        <TouchableOpacity style={{backgroundColor:"#fff", padding:1, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Detailpayment',item)}>
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


    return (
        <View style={{flex:1}}>
            <View style={styles.container}>

                <Portal>
                    <Modal
                        visible={visible}
                        onDismiss={onHideModal}
                        contentContainerStyle={containerStyle}
                    >
                        <Text style={{color:orange, textAlign:"center", fontWeight:"bold", marginBottom:20}}>CRÉATION DE COMPTE RÉUSSIE</Text>
                        <Text style={{textAlign:"center", fontSize:12, marginBottom:25}}>Conservé bien votre numéro locatif {'\n'} il correspond à votre identité en temps que locataire</Text>
                        <Text style={{textAlign:"center", marginBottom:10, fontSize:15}}>Numero locatif</Text>
                        <View style={{borderWidth:1, padding:15, borderRadius:10, backgroundColor:orange, opacity:0.5, marginBottom:30}}>
                            <Text style={{textAlign:"center", fontSize:18}}>MACI09484</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                            
                            
                                <Button
                                    mode='contained'
                                    style={{ borderColor: orange, borderWidth: 2, backgroundColor:orange, width: 180, borderRadius:10}}
                                    labelStyle={{ color: "#fff", fontWeight:"bold" }}
                                    onPress={() => {   copyToClipboard(); onHideModal()
                                        onToggleSnackBar();
                                    }}
                                >
                                    Copier
                                </Button>

                                <Button
                                    mode='outlined'
                                    labelStyle={{ color: orange, fontWeight:"bold" }}
                                    style={{ backgroundColor: "#fff", borderColor: orange, borderWidth: 2, width: 110, borderRadius:10}}
                                    onPress={() => {
                                        onHideModal()
                                    }}
                                >
                                    Okay
                                </Button>
                            </View>
                    </Modal>
                </Portal>

                <View style={{backgroundColor:orange, height:215, borderBottomLeftRadius:25, borderBottomRightRadius:25, justifyContent:"center", alignItems:"center", marginBottom:8}}>
                    <View style={{backgroundColor:"#fff", width:"90%", flexDirection:"row", padding:10, borderRadius:10}}>
                        <View style={{flex:1}}>
                            <View style={{flexDirection: "row", alignItems:"center", marginBottom:5}}>
                                <MaterialCommunityIcons name="wallet" size={25} color={orange} />
                                <Text style={{fontSize:14, color:noire.normal, marginLeft:10}}>SOLDE</Text>
                            </View>
                            <Text style={{fontWeight:"bold", fontSize:18, color:noire.normal, marginBottom:5}}>2000 <Text style={{fontSize:12}}>CFA</Text></Text>
                            <Text style={{marginBottom:5,fontSize:9,}}>A payer</Text>
                            <Text style={{fontWeight:"bold", fontSize:10, color:red.normal, marginBottom:5}}>2000 <Text style={{fontSize:10}}>CFA</Text></Text>
                        </View>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                            <Button onPress={()=> navigation.navigate('Rechargement')} mode='container' icon={"plus"} labelStyle={{color:"white", fontWeight:"bold"}} style={{backgroundColor:blue, borderRadius:10}}>
                                Recharger
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Button  mode="contained"
                    style={[ styles.button, activeSection === 'loyer' ? styles.activeButton : styles.desactiveButton,  ]}
                    onPress={handleLoyerClick}
                    >
                    <Text  style={[ activeSection === 'loyer' ? styles.TexteColorsActive : styles.TexteColorsDesacActive  ]} >LOYER</Text>
                        
                    </Button>
                    <Button
                        mode="contained"
                        style={[
                            styles.button,
                            activeSection === 'transactions' ? styles.activeButton : styles.desactiveButton,
                        ]}
                        onPress={handleTransactionsClick}  >

                        <Text  style={[ activeSection === 'transactions' ? styles.TexteColorsActive : styles.TexteColorsDesacActive  ]} >TRANSACTIONS</Text>
                        
                    </Button>
                </View>


            {activeSection === 'loyer' && (

            <ScrollView style={{ flex: 1 }}>

                <View style={{flex:1, padding:10}}>

                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:green.autre, padding:10, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Nextmonth')}>
                        <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>
                            <Text style={{ fontSize:10, marginBottom:10}}>Mon domicile</Text>
                            
                            <View style={{backgroundColor: green.normal, padding:5, borderRadius:15, width:"40%", marginBottom:10}}>
                                <Text style={{color: green.hover, fontSize:5}}>OFFRE -10% appliqué</Text>
                            </View>
                            <Text style={{fontSize:8}}>Date limite de paiement: <Text style={{fontWeight:"bold", color: green.normal}}>04 Avril 2024</Text></Text>
                        </View>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                            <Text style={{fontWeight:"bold", fontSize:10, color: green.normal, marginBottom:5}}>MARS 2024</Text>
                            <Text style={{fontSize:10, color: green.hover, marginBottom:5}}>Mois prochain</Text>
                            <View style={{backgroundColor: green.normal, padding:5, borderRadius:5}}>
                                <Text style={{color:"#fff"}}>Paiement  </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:green.hover, padding:10, marginBottom:5,borderRadius:10}} onPress={()=> navigation.navigate('Currentmonth')}>
                        <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>
                            <Text style={{ fontSize:10, marginBottom:10}}>Mon domicile</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                                <MaterialCommunityIcons name="close-circle" size={15} color={green.normal} />
                                <Text style={{ color: green.normal, fontSize: 10 }}>LOYER  PAYE</Text>
                                
                                <View style={ { backgroundColor: green.hover, padding: 5, borderRadius: 15, width: '40%', marginLeft: 10,}}>
                                    <Text style={{ color:green.normal, fontSize: 5 }}>OFFRE -10% appliqué</Text>
                                </View>

                            </View>

                            <Text>
                            <Text style={{fontWeight:"bold",color: blue ,fontSize:8}}> PERIODE : </Text> 
                            <Text style={{color: blue,fontSize:8}}>05 JANVIER -05 FEVRIER</Text>
                        </Text>
                        
                        </View>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                            <Text style={{fontWeight:"bold", fontSize:10, color: blue, marginBottom:5}}>MARS 2024</Text>
                            <Text style={{fontSize:10, color: blue, marginBottom:5}}>Mois en cours</Text>
                            
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection:"row", backgroundColor:red.orange, padding:10, marginBottom:5,borderRadius:10
                        }} onPress={()=> navigation.navigate('Monthspass')}>
                        <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>
                            <Text style={{ fontSize:10, marginBottom:10}}>Mon domicile</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                            <MaterialCommunityIcons name="close-circle" size={15} color={red.normal} />
                            <Text style={{ color: 'red', fontSize: 10 }}>LOYER Non PAYE</Text>
                            <View style={styles.offerContainer}>
                                <Text style={{ color:green.hover, fontSize: 5 }}>OFFRE -10% appliqué</Text>
                            </View>
                        </View>

                        <Text>
                            <Text style={{fontWeight:"bold",color: red.normal ,fontSize:8}}> PERIODE : </Text> 
                            <Text style={{color: red.normal,fontSize:8}}>05 JANVIER -05 FEVRIER</Text>
                        </Text>
                        </View>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                            <Text style={{fontWeight:"bold", fontSize:10, color: red.normal, marginBottom:5}}>MARS 2024</Text>
                            <Text style={{fontSize:10, color: red.normal, marginBottom:5}}>Mois passé</Text>
                            <View style={{backgroundColor: red.normal, padding:5, borderRadius:5}}>
                                <Text style={{color:"#fff"}}>Paiement  </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:"#fff", padding:10, marginBottom:5,borderRadius:10}} onPress={()=> navigation.navigate('Historyofpaimenets')}>
                        <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>
                            <Text style={{ fontSize:10, marginBottom:10}}>Mon domicile</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                                <MaterialCommunityIcons name="close-circle" size={15} color={green.normal} />
                                <Text style={{ color: noire.hover, fontSize: 10 }}>LOYER  PAYE</Text>
                                
                                <View style={ { backgroundColor: green.hover, padding: 5, borderRadius: 15, width: '40%', marginLeft: 10,}}>
                                    <Text style={{ color:green.normal, fontSize: 5 }}>OFFRE -10% appliqué</Text>
                                </View>

                            </View>

                            <Text>
                            <Text style={{fontWeight:"bold",color: noire.hover ,fontSize:8}}> PERIODE : </Text> 
                            <Text style={{color: noire.hover,fontSize:8}}>05 JANVIER -05 FEVRIER</Text>
                        </Text>
                        
                        </View>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                            <Text style={{fontWeight:"bold", fontSize:10, color: noire.hover, marginBottom:5}}>MARS 2024</Text>
                            <Text style={{fontSize:10, color: noire.hover, marginBottom:5}}>Mois passé</Text>
                            
                        </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 10, marginRight: 5 }}>2024</Text>
                        <Divider style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>

                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:"#fff", padding:10, marginBottom:5,borderRadius:10}} onPress={()=> navigation.navigate('Historyofpaimenets')}>
                        <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>
                            <Text style={{ fontSize:10, marginBottom:10}}>Mon domicile</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 8}}>
                                <MaterialCommunityIcons name="close-circle" size={15} color={green.normal} />
                                <Text style={{ color: noire.hover, fontSize: 10 }}>LOYER  PAYE</Text>
                                
                                <View style={ { backgroundColor: green.hover, padding: 5, borderRadius: 15, width: '40%', marginLeft: 10,}}>
                                    <Text style={{ color:green.normal, fontSize: 5 }}>OFFRE -10% appliqué</Text>
                                </View>

                            </View>

                            <Text>
                            <Text style={{fontWeight:"bold",color: noire.hover ,fontSize:8}}> PERIODE : </Text> 
                            <Text style={{color: noire.hover,fontSize:8}}>05 JANVIER -05 FEVRIER</Text>
                        </Text>
                        
                        </View>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                            <Text style={{fontWeight:"bold", fontSize:10, color: noire.hover, marginBottom:5}}>MARS 2024</Text>
                            <Text style={{fontSize:10, color: noire.hover, marginBottom:5}}>Mois passé</Text>
                            
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
           


             )}

            {activeSection === 'transactions' && (

                    // <ScrollView style={{ flex: 1 }}>
                    <View style={{flex:1, padding:10}}>
                        <FlatList
                            data={transactions}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            
                        />
                    </View>
                    // </ScrollView>
                )}

            </View>
            <Snackbar
                visible={visibleSnackbar}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'okay !',
                    onPress: () => {
                        onDismissSnackBar();
                    },
                }}
            >
                Le code à été copié
            </Snackbar>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    offerContainer: {
        backgroundColor: red.normal,
        padding: 5,
        borderRadius: 15,
        width: '40%',
        marginLeft: 10,
         // Espacement entre le texte et le conteneur
    },
    

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        marginHorizontal: 1,
        backgroundColor: orange,
        borderWidth: 1,
        borderColor: '#fff',
        shadowColor: '#000',
        fontSize:1,
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    activeButton: {
        backgroundColor: orange,
    },
    desactiveButton: {
        backgroundColor:'#fff',
    },

    TexteColorsActive: {
        color: '#fff',
    },
    TexteColorsDesacActive: {
        color: '#000',
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
        color:blue
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
        color:blue
    },
    date: {
        fontSize: 10,
        color: '#888',
    },


})