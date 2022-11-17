import React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
//import { Table, TableWrapper } from "react-native-table-component";
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from 'react-native-vector-icons/Feather';
import { useState } from 'react';
//import { Table, Row, Rows } from "react-native-table-component/components/table";
import { DataTable } from 'react-native-paper';

const Leaderboard = ({ navigation }) => {
    /*    return (
            <LinearGradient style={styles.mainView} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[
                '#FFFFFF', '#FFFFFF', '#FFFFFF']} degree={90}>
                <View style={styles.TopView}><Image style={styles.ImageStyle} source={require("../assets/LoginLogo.png")} /></View>
                <ScrollView style={styles.BottomView}>
                    <BackIcon onPress={() => navigation.navigate('mainPage')} style={styles.Icon} name="chevron-left" size={60} color={'#fff'} />
                    <Text style={styles.Heading}>Leaderboard</Text>
                    <View style={styles.FormView}>
                        <Text style={styles.ScoreTitle}>Rank   Score    User</Text>
                        <Text style={styles.ScoreFormat}>1.         100         Haim</Text>
                        <Text style={styles.ScoreFormat}>2.         99            Caleb</Text>
                        <Text style={styles.ScoreFormat}>3.         98            Jacob</Text>
                        <Text style={styles.ScoreFormat}>4.         97            Nathanael</Text>
                        <Text style={styles.ScoreFormat}>5.         96            Papa</Text>
                    </View>

                </ScrollView>
            </LinearGradient>
        )*/
    //{/* From: https://www.waldo.com/blog/react-native-table*/ }

    /*const tableData = {
        tableHead: ['Crypto Name', 'Value', 'Mkt Cap'],
        tableData: [

        ],
    };*/

    /*constructor(props) {
        super(props);
        this.state = {
            HeadTable: ['Head1', 'Head2', 'Head3', 'Head4', 'Head5'],
            DataTable: [
                ['1', '2', '3', '4', '5'],
                ['a', 'b', 'c', 'd', 'e'],
                ['1', '2', '3', '4', '5'],
                ['a', 'b', 'c', 'd', 'e'],
                ['1', '2', '3', '4', '5']
            ]
        }
    }*/

    //ALL code in this return statement is directly copied from: https://www.geeksforgeeks.org/how-to-create-a-table-in-react-native/ by Nathanael Kastner
    return (
        <ScrollView>
            <BackIcon onPress={() => navigation.navigate('mainPage')} style={styles.Icon} name="chevron-left" size={60} color={'#fff'} />
            <Text style={styles.Heading}>Leaderboard</Text>
            <DataTable style={styles.container}>
                <Text style={styles.ScoreTitle}>    Rank              Score             Name</Text>
                <DataTable.Row>
                    <DataTable.Cell>1.</DataTable.Cell>
                    <DataTable.Cell>100</DataTable.Cell>
                    <DataTable.Cell>Haim</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>2.</DataTable.Cell>
                    <DataTable.Cell>99</DataTable.Cell>
                    <DataTable.Cell>Caleb</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>3.</DataTable.Cell>
                    <DataTable.Cell>96</DataTable.Cell>
                    <DataTable.Cell>Jacob</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>4.</DataTable.Cell>
                    <DataTable.Cell>94</DataTable.Cell>
                    <DataTable.Cell>Nathanael</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>5.</DataTable.Cell>
                    <DataTable.Cell>90</DataTable.Cell>
                    <DataTable.Cell>Harry</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>6.</DataTable.Cell>
                    <DataTable.Cell>88</DataTable.Cell>
                    <DataTable.Cell>Cameron</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>7.</DataTable.Cell>
                    <DataTable.Cell>96</DataTable.Cell>
                    <DataTable.Cell>Jason</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>4.</DataTable.Cell>
                    <DataTable.Cell>94</DataTable.Cell>
                    <DataTable.Cell>Natalie</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>8.</DataTable.Cell>
                    <DataTable.Cell>100</DataTable.Cell>
                    <DataTable.Cell>Henry</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>9.</DataTable.Cell>
                    <DataTable.Cell>99</DataTable.Cell>
                    <DataTable.Cell>Christian</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>10.</DataTable.Cell>
                    <DataTable.Cell>96</DataTable.Cell>
                    <DataTable.Cell>Jeremiah</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>11.</DataTable.Cell>
                    <DataTable.Cell>94</DataTable.Cell>
                    <DataTable.Cell>Caroline</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>12.</DataTable.Cell>
                    <DataTable.Cell>100</DataTable.Cell>
                    <DataTable.Cell>Anya</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>13.</DataTable.Cell>
                    <DataTable.Cell>99</DataTable.Cell>
                    <DataTable.Cell>Larry</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>14.</DataTable.Cell>
                    <DataTable.Cell>96</DataTable.Cell>
                    <DataTable.Cell>Joshua</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>15.</DataTable.Cell>
                    <DataTable.Cell>94</DataTable.Cell>
                    <DataTable.Cell>Tristan</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>16.</DataTable.Cell>
                    <DataTable.Cell>94</DataTable.Cell>
                    <DataTable.Cell>Danielle</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </ScrollView>
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
