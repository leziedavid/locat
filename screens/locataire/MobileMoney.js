import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

const MobileMoney = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');

  // Fonction pour gérer la sélection d'un moyen de paiement
  const handleSelectPayment = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    // Ajoutez ici votre logique pour traiter la sélection du moyen de paiement
  };

  // Fonction pour valider le numéro de téléphone
  const handleMobileNumberChange = (inputText) => {
    // Remplacer tout caractère non numérique par une chaîne vide
    const formattedNumber = inputText.replace(/\D/g, '');

    // Si la longueur du numéro est supérieure à 10, ne pas mettre à jour l'état
    if (formattedNumber.length <= 10) {
      setMobileNumber(formattedNumber);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Texte pour indiquer de sélectionner un moyen de paiement */}
      <Text style={styles.selectionText}>Sélectionner un moyen de paiement</Text>

      {/* Carte pour chaque moyen de paiement */}
      <View style={styles.paymentRow}>
        <TouchableOpacity
          style={[styles.paymentCard, selectedPayment === 'Orange' && styles.selectedPayment]}
          onPress={() => handleSelectPayment('Orange')}
        >
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/orangeMoney.png')} style={styles.logo} />
          </View>
          <Text style={styles.label}>Orange</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentCard, selectedPayment === 'Wave' && styles.selectedPayment]}
          onPress={() => handleSelectPayment('Wave')}
        >
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/wave.webp')} style={styles.logo} />
          </View>
          <Text style={styles.label}>Wave</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentCard, selectedPayment === 'MTN' && styles.selectedPayment]}
          onPress={() => handleSelectPayment('MTN')}
        >
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/mtn.png')} style={styles.logo} />
          </View>
          <Text style={styles.label}>MTN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentCard, selectedPayment === 'Moov' && styles.selectedPayment]}
          onPress={() => handleSelectPayment('Moov')}
        >
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/moov.png')} style={styles.logo} />
          </View>
          <Text style={styles.label}>Moov</Text>
        </TouchableOpacity>
      </View>

      {/* Champ de saisie pour le numéro de mobile money */}
      <TextInput
        style={styles.input}
        placeholder="Saisie votre numéro de mobile money"
        value={mobileNumber}
        onChangeText={handleMobileNumberChange}
        keyboardType="numeric" // Définit le clavier pour n'afficher que des chiffres
        maxLength={10} // Limite la longueur de la saisie à 10 caractères
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  selectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  paymentCard: {
    alignItems: 'center',
    marginBottom: 15, // Légèrement réduit la marge entre les cartes
    marginHorizontal: 5, // Ajout de marge horizontale entre les cartes
    backgroundColor: '#fff',
    borderRadius: 8, // Ajout de bord arrondi aux cartes
    padding: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '22%', // Réduire la largeur des cartes pour qu'elles tiennent sur la même ligne
  },
  selectedPayment: {
    borderColor: '#0055FF',
    borderWidth: 2,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 10, // Ajout de bord arrondi aux logos
    overflow: 'hidden', // Cache tout ce qui dépasse du conteneur arrondi
    marginBottom: 5,
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    width: '80%',
    backgroundColor:"#fff",
  },
});

export default MobileMoney;
