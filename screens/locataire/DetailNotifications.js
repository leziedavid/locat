import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { blue, red } from '../../constants/color';

const DetailNotifications = ({navigation}) => {

  const _handleMore = () => console.log('Shown more');

  return (
    <View style={{ flex: 1, }}>

          <View style={styles.cardContainer}>
            <Appbar.Header style={styles.header}>
              <Appbar.BackAction onPress={() => { navigation.goBack() }} />
              <Appbar.Content title="Titre du sujet" />
              <Appbar.Action icon="delete" onPress={_handleMore} />
            </Appbar.Header>
          </View>


          <View style={[styles.card, { height: 200 }]}>
              <View style={styles.content}>
                <Text style={styles.text}> Affichage du contenu de la notification </Text>
              </View>
            </View>


    </View>
  );
};

export default DetailNotifications;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});