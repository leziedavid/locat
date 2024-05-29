import { FontAwesome5 } from '@expo/vector-icons'; // Importer FontAwesome5 pour les icônes
import React, { useRef, useState } from 'react';
import { Image, Component, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import { green, noire, orange, red } from '../../constants/color';
import Accordion from 'react-native-collapsible/Accordion';

const BonaSavoire = ({ navigation }) => {
const [activeSections, setActiveSections] = useState([]);

const _renderHeader = (section, index, isActive) => {
    return (
        <TouchableOpacity onPress={() => toggleSection(index)} style={styles.header}>
        <Text style={[styles.headerText, isActive && styles.activeHeaderText]}>{section.title}</Text>
        {isActive && <View style={styles.indicator} />}
        </TouchableOpacity>
        );
    };

const toggleSection = (index) => {
    const isSectionActive = activeSections.includes(index);
    setActiveSections(isSectionActive ? [] : [index]);
};

const _renderContent = (section, index, isActive) => {
    return (
        <View style={styles.content}>
            <Text>{section.content}</Text>
        </View>
        );
    };

const CONTENT = [
        {
        title: 'QUESQUE C\'EST',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... NLorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
        title: 'COMMENT CA FONCTIONNE',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
        title: 'CONDITION D\'UTILISATION',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
    ];

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.cardContainer}>

                <Appbar.Header>
                    <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                    <Appbar.Content
                    title="BON A SAVOIRE"
                    titleStyle={{ fontSize: 13 }}
                    style={{ marginLeft: 80 }}
                    />
                </Appbar.Header>
            </View>

                <View style={styles.card}>
                    <Accordion
                        sections={CONTENT}
                        activeSections={activeSections}
                        renderHeader={_renderHeader}
                        renderContent={_renderContent}
                        onChange={(sections) => setActiveSections(sections)}
                    />
                </View>

        </View>
    );
};

export default BonaSavoire;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        top: 50,
    },

    card: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        height: 380,
        top: 10,
    },

    header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 15,

    },

    headerText: {
        flex: 1,
        fontWeight:"bold",
        fontSize:14,
    },

    activeHeaderText: {
    color: 'blue',
    },
    indicator: {
    width: '105%',
    height: 2,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
    },
    content: {
    padding: 20,
    backgroundColor: '#fff',
    },


})
