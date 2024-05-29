import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { blue, red } from '../../constants/color';
import {CardAudio} from '../../screens/components/CardAudio';

const Notifications = ({navigation}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAudioPress = () => {
  };

  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  return (
    <View style={{ flex: 1, }}>

        <View style={styles.containers}>
            <Appbar.Header style={styles.header}>
              <Appbar.BackAction onPress={() => { navigation.goBack() }} />
              <Appbar.Content title="Notification" />
              <Appbar.Action icon="magnify" onPress={_handleSearch} />
              <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>
            <CardAudio title="Le titre du sujet" imageUrl="../../assets/pause.jpeg" onAudioPress={handleAudioPress} />
        </View>
        
          <View style={{ flex: 1,padding: 10 }}>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: blue.claire, padding: 10, marginBottom: 5, borderRadius: 10 }} onPress={() => navigation.navigate('DetailNotifications')}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ backgroundColor: red.claire, borderRadius: 50, width: 50, height: 50, marginRight: 20 }}></View>
                  <View style={{ marginRight: 'auto' }}>
                    <Text style={{ fontSize: 15, fontWeight:"bold" }}>Retraire</Text>
                    <Text style={{ fontSize: 12, marginTop: 1,color:blue.hover }}>Vous avez retiré 5500 cfa d ....</Text>
                  </View>
                  <View style={{ justifyContent: "flex-end", alignItems: "flex-end", padding: 1 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 10 }}>Il y'a 9 min</Text>
                  </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#fff", padding: 10, marginBottom: 5, borderRadius: 10 }} onPress={() => navigation.navigate('DetailNotifications')}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: red.claire, borderRadius: 50, width: 50, height: 50, marginRight: 20 }}></View>
                <View style={{ marginRight: 'auto' }}>
                  <Text style={{ fontSize: 15, fontWeight:"bold" }}>Titre du sujet</Text>
                  <Text style={{ fontSize: 12, marginTop:1, }}>Affichage du debut du contenu</Text>
                </View>
                <View style={{ justifyContent: "flex-end", alignItems: "flex-end", padding: 1 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 10 }}>Il y'a 17 min</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "#fff", padding: 10, marginBottom: 5, borderRadius: 10 }} onPress={() => navigation.navigate('DetailNotifications')}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: red.claire, borderRadius: 50, width: 50, height: 50, marginRight: 20 }}></View>
                <View style={{ marginRight: 'auto' }}>
                  <Text style={{ fontSize: 15, fontWeight:"bold" }}>Titre du sujet</Text>
                  <Text style={{ fontSize: 12, marginTop: 1, }}>Affichage du debut du contenu</Text>
                </View>
                <View style={{ justifyContent: "flex-end", alignItems: "flex-end", padding: 1 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 10 }}>10 : 10</Text>
                </View>
              </View>
            </TouchableOpacity>


          </View>

    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({


  containers: {
    flex: 0,
    backgroundColor: 'white', // Couleur de fond blanche pour le card
  },
  header: {
    elevation: 30, // Supprimer l'ombre de l'Appbar
  },
  cardContainers: {
    justifyContent: 'center', // Pour centrer les éléments verticalement
    alignItems: 'center', // Pour centrer les éléments horizontalement
    paddingHorizontal: 20, // Marge horizontale
  },

  cardContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20, // Ajout de padding en bas pour compenser la bordure arrondie
  },
  card: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  roundedBottom: {
    borderBottomLeftRadius: 10, // Bordure arrondie par le bas
    borderBottomRightRadius: 10, // Bordure arrondie par le bas
  },
  header: {
    borderTopLeftRadius: 20, // Bordure arrondie par le haut
    borderTopRightRadius: 20, // Bordure arrondie par le haut
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  audioButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});
