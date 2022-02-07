import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import colors from '../colors';

const ViewScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image source={require('../assets/images/chair.jpg')} style={styles.image} resizeMode="contain"/>
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor : colors.dark,
    },
    image : {
        width : '100%',
        height : '100%'
    },
    deleteIcon : {
        width : 50,
        height : 50,
        backgroundColor :  colors.secondary,
        position : 'absolute',
        top : 40,
        right : 30
    },
    closeIcon : {
        width : 50,
        height : 50,
        backgroundColor : colors.primary,
        position : 'absolute',
        top : 40,
        left : 30
    },

});
export default ViewScreen;

