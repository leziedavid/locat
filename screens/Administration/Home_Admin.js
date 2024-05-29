import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { Button, Card, Modal, Portal, Snackbar } from 'react-native-paper';
import { noire, orange, red } from '../../constants/color';

// Appel de mes composant sur la page d'accuiel

import { TabBienLoues } from '../components/TabBienLoues';
import { TabLocataire } from '../components/TabLocataire';
import { TabLoyer } from '../components/TabLoyer';
import { TabTransaction } from '../components/TabTransaction';


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
    const [activeTab, setActiveTab] = useState(null);

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);


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


    const handleTabPress = (tabName) => {
      setActiveTab(tabName);
      console.log(tabName);
    };

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
                        <View style={{borderWidth:1, padding:15, borderRadius:10, backgroundColor:"#fff5e6", opacity:0.5, marginBottom:30}}>
                            <Text style={{textAlign:"center", fontSize:18}}>MACI09484</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                            
                            
                                <Button
                                    mode='contained'
                                    style={{ borderColor: orange, borderWidth: 2, backgroundColor:orange, width: 130, borderRadius:10}}
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

                <View style={styles.card}>

                    <View style={{backgroundColor:"white", height:40, borderBottomLeftRadius:25, borderBottomRightRadius:25, justifyContent:"center", alignItems:"center", marginBottom:8}}> 
                    </View>

                    <View style={styles.content}>
                        <Card style={styles.cards}>
                            <Card.Content>
                                <View style={styles.cardContent}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.label}>Mon solde</Text>
                                    <Text style={styles.balance}>4 800 <Text style={styles.currency}>CFA</Text></Text>
                                    <Text style={styles.pending}>En attente de paiement</Text>
                                    <Text style={styles.amount}>76.750 <Text style={styles.currency}>CFA</Text></Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <Button mode='contained' style={styles.buttons} labelStyle={styles.buttonLabel}>
                                        Retrait
                                    </Button>
                                </View>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>

                    <View style={styles.buttonContainer}>

                    <View style={styles.containe}>

                        <TouchableOpacity  style={[styles.tab, activeTab === 'Loyer' && styles.activeTab]}  onPress={() => handleTabPress('Loyer')} >
                            <Text style={[styles.tabText, activeTab === 'Loyer' && styles.activeTabText]}>Loyer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  style={[styles.tab, activeTab === 'Locataire' && styles.activeTab]}  onPress={() => handleTabPress('Locataire')}>
                            <Text style={[styles.tabText, activeTab === 'Locataire' && styles.activeTabText]}>Locataires</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tab, activeTab === 'Bien_loues' && styles.activeTab]} onPress={() => handleTabPress('Bien_loues')} >
                            <Text style={[styles.tabText, activeTab === 'Bien_loues' && styles.activeTabText]}>Proprieté loués</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.tab, activeTab === 'Transaction' && styles.activeTab]}  onPress={() => handleTabPress('Transaction')}>
                            <Text style={[styles.tabText, activeTab === 'Transaction' && styles.activeTabText]}>Transactions</Text>
                        </TouchableOpacity>

                    </View>

                    </View>

                </View>

                
                    {activeTab === 'Transaction' && (
                        <TabTransaction/>
                    )}

                    {activeTab === 'Locataire' && (
                    <TabLocataire/>
                    )}

                    {activeTab === 'Loyer' && (
                        <TabLoyer/>
                    )}

                    {activeTab === 'Bien_loues' && (
                        <TabBienLoues/>
                    )}
                
                {/* {activeTab === 'Loyer' && ( */}

                    <View style={{ bottom:1, width:"100%"}}>
                        <TouchableOpacity style={{padding:0, marginBottom: 1,borderRadius:10 }} onPress={()=> navigation.navigate('Add_Admin')}>
                                <View >
                                <Text style={{textAlign:"center", fontSize:11, color:noire.hover,}}>Ajouter un admainistrateur {"\n"} Pour commencer</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                {/* )} */}

            </View>

            {/* <View style={{ bottom:10, width:"100%"}}>
                    <TouchableOpacity style={{padding:10, marginBottom: 5,borderRadius:10 }} onPress={()=> navigation.navigate('Add_Admin')}>
                            <View >
                            <Text style={{textAlign:"center", fontSize:11, color:noire.hover,}}>Ajouter un admainistrateur {"\n"} Pour commencer</Text>
                            </View>
                    </TouchableOpacity>
            </View> */}

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

    card:{
        padding:5,
        borderRadius:20,
        backgroundColor:"#fff",
        height:265,
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
        backgroundColor: "white",
        borderRadius: 15,
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
        fontSize:13,
    },
    TexteColorsDesacActive: {
        color: '#000',
        fontSize:13,
    },

    cards: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: 8,
        elevation: 4,
        borderWidth: 1,
        borderColor: 'orange',
        borderBottomWidth: 4,
        marginHorizontal: 8, // Ajout d'un espace à gauche et à droite
      },
      
    cardContent: {
        flexDirection: 'row',
        padding: 0,
        borderRadius: 5,
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
        marginBottom: 5,
    },
    balance: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    pending: {
        marginBottom: 5,
        fontSize: 9,
        color: 'black',
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 10,
        color: 'orange',
        marginBottom: 5,
    },
    currency: {
        fontSize: 12,
    },
    buttons: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'orange',
        marginBottom: 10,
        width: '100%',
        alignSelf: 'center',
    },
    buttonLabel: {
        color: 'orange',
    },


      containe: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
      },
      tab: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderColor: 'transparent',
      },
      activeTab: {
        borderColor: 'orange',
      },
      tabText: {
        fontSize: 12,
        color: 'black',
      },
      activeTabText: {
        color: 'orange',
      },


})