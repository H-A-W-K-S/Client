import React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from 'react-native-vector-icons/Feather';

const SignUp = ({ navigation }) => {
    return (
        <LinearGradient style={styles.mainView} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[
            '#00FDFF', '#FFFFFF', '#FF4200']} degree={90}>
            <View style={styles.TopView}><Image style={styles.ImageStyle} source={require("../assets/LoginLogo.png")} /></View>
            <ScrollView style={styles.BottomView}>
                <BackIcon onPress={() => navigation.navigate('signIn')} style={styles.Icon} name="chevron-left" size={60} color={'#fff'} />
                <Text style={styles.Heading}>
                    Create{'\n'}
                    Account
                </Text>
                <View style={styles.FormView}>
                    <TextInput placeholder={"Full name*"} placeholderTextColor={"#fff"} style={styles.TextInputs} />
                    <TextInput placeholder={"Email Address*"} placeholderTextColor={"#fff"} style={styles.TextInputs} />
                    <TextInput placeholder={"Password*"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInputs} />
                    <TextInput placeholder={"Comfirm Password*"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInputs} />
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>Sign up</Text>
                    </TouchableOpacity>
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

    },
    BottomView: {
        width: '100%',
        height: '80%',
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    ImageStyle: {
        width: '50%',
        resizeMode: 'contain'
    },
    Heading: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 5,
    },
    FormView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
    },
    TextInputs: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#fff',
        height: 52,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
        color: '#fff'
    },
    Button: {
        width: '90%',
        color: '#000',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    SignUpText: {
        color: 'grey',
    },
    TextButton: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 10

    },
    Icon: {
        marginLeft: 5,
        marginTop: 10,
    }
})

export default SignUp;