import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
    return (
        <ImageBackground
            resizeMode="cover"
            style={styles.background}
            source={require("../assets/images/bg.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 127,
        
    },
    logoContainer : {
        position: 'absolute',
        top: 70,
        alignItems : 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    }
});
