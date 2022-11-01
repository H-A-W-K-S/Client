import React from "react";
import { Text, StyleSheet, View, Image, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';

const MainPage = ({ navigation }) => {
    return (
        <LinearGradient style={styles.mainView} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[
            '#00FDFF', '#FFFFFF', '#FF4200']} degree={90}>
            <Image style={styles.ImageStyle} source={require("../assets/LoginLogo.png")} />
            <View style={styles.FormView}>
                <TouchableOpacity onPress={() => navigation.navigate('game1')} style={styles.Button}>
                    <Icon style={{ color: '#000' }} name="play" size={60} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('leaderboard')} style={styles.Button}>
                    <Icons style={{ color: '#000' }} name="Trophy" size={60} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('signIn')}>
                    <Text style={styles.ButtonText}>Log in/Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                    <Icons style={{ color: '#000' }} name="setting" size={60} color={'#fff'} />
                </TouchableOpacity>
            </View>
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
    ImageStyle: {
        width: '90%',
        height: '40%',
        resizeMode: 'contain'
    },
    FormView: {
        width: '100%',
        height: '60%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Button: {
        width: '50%',
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    ButtonText: {
        fontWeight: 'bold',
        margin: 18,
        fontSize: 18
    },
    TextButton: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 10

    },
    Icon: {
        marginLeft: 5,
    }
})

export default MainPage;