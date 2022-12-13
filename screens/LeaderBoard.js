import React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { useEffect } from "react";
import { Table } from "react-native-table-component";
//import { Table, Row, Rows } from "react-native-table-component/components/table";
import { DataTable } from 'react-native-paper';

//This try/catch block is basically copied from homework 3.
const Leaderboard = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getTitle = async () => {
        try {
            const response = await fetch('https://mergesplit-services.herokuapp.com/scores');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    
    //This was supposed to write to the database, but we could not get that working.
    const pushData = async () => {
        try {
            const res = await fetch('https://mergesplit-services.herokuapp.com/scores', { //Developed from https://reactnative.dev/docs/network and the Be-A-Ruby team project.
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: 111,
                    name: 'myName',
                    score: 26654465654
                })
            });
        }
        catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        getTitle();
    }, []);

    //Render the items on the leaderboard.
    return (//Some of this code is copied from homework 2 and 3.
        <View>
            <BackIcon onPress={() => navigation.navigate('mainPage')} style={styles.Icon} name="chevron-left" size={60} color={'#fff'} />
            <Text style={styles.Heading}>Leaderboard</Text>
            <Text style={styles.ScoreTitle}>    Rank              Score             Name</Text>
            <FlatList data={data} renderItem={({ item }) => (
                <Text>      1                    {item.score}                       {item.name}</Text>
            )} />
            <Text>{ }</Text>
        </View>
    );
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
        backgroundColor: 'white'
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
        position: 'absolute'
    },
    FormView: {
        width: '100%',
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
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
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
    },

    ScoreTitle: {
        fontVariant: ['tabular-nums'],
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        paddingTop: 10,
    }
})

export default Leaderboard;
