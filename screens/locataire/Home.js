import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blue, orange } from '../../constants/color'
import { Button, Portal, Modal, Snackbar } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard';

const Home = () => {
    const [visible, setVisible] = React.useState(true);
    const onShowModal = () => setVisible(true);
    const onHideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 25, width: '90%', alignSelf: 'center', borderRadius: 10, };
    const [copiedText, setCopiedText] = React.useState('');
    const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);
    const onToggleSnackBar = () => setVisibleSnackbar(!visibleSnackbar);
    const onDismissSnackBar = () => setVisibleSnackbar(false);
    
    const [time, setTime] = useState(true);

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync('MACI09484');
    };
    
    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
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
                        <View style={{borderWidth:1, padding:15, borderRadius:10, backgroundColor:orange, opacity:0.5, marginBottom:30}}>
                            <Text style={{textAlign:"center", fontSize:18}}>MACI09484</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                                <Button
                                    mode='contained'
                                    style={{ borderColor: orange, borderWidth: 2, backgroundColor:orange, width: 180, borderRadius:10}}
                                    labelStyle={{ color: "#fff", fontWeight:"bold" }}
                                    onPress={() => {
                                        copyToClipboard();
                                        onHideModal()
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
                <View style={{backgroundColor:orange, height:250, borderBottomLeftRadius:20, borderBottomRightRadius:20, justifyContent:"center", alignItems:"center", marginBottom:0}}>
                    <View style={{backgroundColor:"#fff", width:"90%", flexDirection:"row", padding:10, borderRadius:10}}>
                        <View style={{flex:1}}>
                            <View style={{flexDirection: "row", alignItems:"center", marginBottom:5}}>
                                <MaterialCommunityIcons name="wallet" size={30} color={blue} />
                                <Text style={{fontSize:20, color:blue, fontWeight:"bold", marginLeft:10}}>SOLDE</Text>
                            </View>
                            <Text style={{fontWeight:"bold", fontSize:25, color:blue, marginBottom:5}}>2000 <Text style={{fontSize:18}}>CFA</Text></Text>
                            <Text style={{marginBottom:5}}>A payer</Text>
                            <Text style={{fontWeight:"bold", fontSize:15, color:blue, marginBottom:5}}>2000 <Text style={{fontSize:13}}>CFA</Text></Text>
                        </View>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                            <Button onPress={() => MobileMoney(time)} mode='container' icon={"plus"} labelStyle={{color:"white", fontWeight:"bold"}} style={{backgroundColor:blue, borderRadius:10}}>
                                Recharger
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'lightgray', margin:10, height:"auto", borderRadius:20, flexDirection:"row", marginBottom:"20%"}}>
                    <Button 
                        mode='contained' 
                        style={{
                            flex:1,
                            backgroundColor:orange, 
                            borderWidth:2, 
                            borderColor:"#fff", 
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.36,
                            shadowRadius: 6.68,
                            elevation: 11
                        }}
                    >
                        LOYER
                    </Button>
                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        <Text style={{fontWeight:"bold"}}>TRANSACTIONS</Text>
                    </View>
                </View>
                <View style={{flex:1, padding:10}}>
                    <TouchableOpacity style={{flexDirection:"row", backgroundColor:green.hover, padding:10}} onPress={()=> navigation.navigate('PaymentDetails')}>
                        <View style={{flex:2.5, justifyContent:"flex-start", padding:5}}>
                            <Text style={{ fontSize:15, marginBottom:10}}>Mon domicile</Text>
                            <View style={{backgroundColor: green.normal, padding:5, borderRadius:15, width:"40%", marginBottom:10}}>
                                <Text style={{color: green.hover, fontSize:9}}>OFFRE -10% appliqué</Text>
                            </View>
                            <Text style={{fontSize:12}}>Date limite de paiement: <Text style={{fontWeight:"bold", color: green.normal}}>04 Avril 2024</Text></Text>
                        </View>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center", padding:5}}>
                            <Text style={{fontWeight:"bold", fontSize:18, color: green.normal, marginBottom:5}}>MARS 2024</Text>
                            <Text style={{fontSize:15, color: green.normal, marginBottom:5}}>Mois prochain</Text>
                            <View style={{backgroundColor: green.normal, padding:5, borderRadius:5}}>
                                <Text style={{color:"#fff"}}>Paiement</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
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
    }
})