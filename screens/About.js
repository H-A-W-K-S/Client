import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from 'react-native-vector-icons/Feather';

const Settings = ({ navigation }) => {
    return (
        <LinearGradient style={styles.mainView} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[
            '#FFFFFF', '#FFFFFF', '#FFFFFF']} degree={90}>
            <View style={styles.TopView}><Image style={styles.ImageStyle} source={require("../assets/LoginLogo.png")} /></View>
            <ScrollView style={styles.BottomView}>
                <BackIcon onPress={() => navigation.navigate('mainPage')} style={styles.Icon} name="chevron-left" size={60} color={'#fff'} />
                <Text style={styles.Heading}>About</Text>
                <View style={styles.FormView}>
                    <Text style={styles.ScoreFormat}>Game version</Text>
                        <Text style={styles.InfoFormat}>0.0.1-demo</Text>
                    <Text style={styles.ScoreFormat}>Version build date</Text>
                        <Text style={styles.InfoFormat}>11/4/22 2:28:40</Text>
                    <Text style={styles.ScoreFormat}>Contributors</Text>
                        <Text style={styles.InfoFormat}>Haim Hong</Text>
                        <Text style={styles.InfoFormat}>Caleb Albrecht</Text>
                        <Text style={styles.InfoFormat}>Jacob Westra</Text>
                        <Text style={styles.InfoFormat}>Nathanael Kastner</Text>
                        <Text style={styles.InfoFormat}>Papa Kwesi Sterlin</Text>
                </View>

            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopView: {
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'

    },
    BottomView: {
        width: '100%',
        height: '80%',
        backgroundColor: '#ededed',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    ImageStyle: {
        width: '50%',
        resizeMode: 'contain'
    },
    Heading: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: '23%',
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute'
    },
    FormView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign:'center',
        marginLeft: 30,
        marginTop: 10,
    },
    Icon: {
        color: '#000',
        marginLeft: 5,
        marginTop: 10,
    },

    ScoreFormat: {
        fontVariant: ['tabular-nums'],
        fontSize: 22,
        paddingTop: 22,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold'
    },

    InfoFormat: {
        fontVariant: ['tabular-nums'],
        fontSize: 22,
        paddingTop: 22,
        textAlign: 'left',
        marginLeft: 40,
    },

})

export default Settings;