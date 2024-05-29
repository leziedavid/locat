import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Slider from '@react-native-community/slider';
import { blue, red } from '../../constants/color';

export const  CardAudio2 = ({ audioUrl }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const handleAudioToggle = async () => {
        try {
            if (isPlaying) {
            await SoundPlayer.pause();
            setIsPlaying(false);
            } else {
            await SoundPlayer.playUrl(audioUrl);
            setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing audio: ', error);
        }
    };

    const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    // return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return `${minutes}:${remainingSeconds}`;
    };

    return (
        <>
            <View style={styles.container}>
    
            <View style={styles.contentContainer}>
                
                <View style={styles.audioControlsContainer}>
                <View style={styles.audioControls}>
                    <TouchableOpacity onPress={handleAudioToggle} style={styles.playPauseButton}>
                        <Image source={isPlaying ? require('../../assets/pause.jpeg') : require('../../assets/play.png')} style={styles.playPauseIcon} />
                    </TouchableOpacity>

                    <Slider style={styles.slider}
                    minimumValue={0}
                    maximumValue={duration}
                    value={currentTime}
                    onValueChange={(value) => SoundPlayer.seek(value)}
                    minimumTrackTintColor="#2979FF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#2979FF" />

                    <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                    <Text style={styles.timeText}>{formatTime(duration)}</Text>
                    </View>
                </View>
                </View>
            </View>
            </View>

        </>
    );
};

const styles = {

    audioControlsContainer: {
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "white",
        marginVertical: 0,
        padding: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 8,
        },

    container: {
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: 'white',
        margin: 0,
        padding: 8,
        elevation: 10,
        },
        contentContainer: {
        flex: 1,
        marginLeft: 0,
        justifyContent: 'center',
        },
        title: {
        fontSize: 13,
        fontWeight: 'bold',
        },
        audioControls: {
        flexDirection: 'row',
        alignItems: 'center',
        },
        playPauseButton: {
        padding: 3,
        },
        playPauseIcon: {
        width: 30,
        height: 30,
        },
        slider: {
        flex: 1,
        marginHorizontal: 0,
        },
        timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        },
        timeText: {
        color: '#000',
        },
        
};

