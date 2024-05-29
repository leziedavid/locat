import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PortalDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <View style={isOpen ? styles.overlay : null} />
      <TouchableOpacity onPress={toggleDrawer} style={styles.button}>
        <Text style={styles.buttonText}>Mon Compte</Text>
      </TouchableOpacity>
      <View style={[styles.drawer, { transform: [{ translateX: isOpen ? 0 : width - 150 }] }]}>
        {children}
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={styles.closeButton}>Fermer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 150,
    backgroundColor: 'white',
    padding: 20,
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    zIndex: 2,
  },
  closeButton: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});

export default PortalDrawer;
