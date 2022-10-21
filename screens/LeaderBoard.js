import React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from 'react-native-vector-icons/Feather';

const Leaderboard = ({ navigation }) => {
    return (
        <LinearGradient style={styles.mainView} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[
            '#00FDFF', '#FFFFFF', '#FF4200']} degree={90}>
            <View style={styles.TopView}><Image style={styles.ImageStyle} source={require("../assets/LoginLogo.png")} /></View>
            <ScrollView style={styles.BottomView}>
                <BackIcon onPress={() => navigation.navigate('mainPage')} style={styles.Icon} name="chevron-left" size={60} color={'#fff'} />
                <Text style={styles.Heading}>Leaderboard</Text>
                <View style={styles.FormView}></View>

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

    },
    BottomView: {
        width: '100%',
        height: '80%',
        backgroundColor: '#fff',
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
        marginLeft: 30,
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    FormView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
    },
    Icon: {
        color: '#000',
        marginLeft: 5,
        marginTop: 10,
    }
})

export default Leaderboard;