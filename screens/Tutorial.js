import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Platform, PropTypes } from 'react-native';
import BackIcon from 'react-native-vector-icons/Feather';

const Tutorial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.TopView}>
        <BackIcon onPress={() => navigation.navigate('mainPage')} style={styles.Icon} name="chevron-left" size={60} color={'#fff'} />
        <Text style={styles.Tutorial}>Tutorial</Text>
      </View>

      <View style={styles.BottomView}>
        <Image style={styles.image} source={require('../assets/tutorial.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: '95%',
    resizeMode: 'contain'
  },
  BottomView: {
    width: '100%',
    height: '90%',
    backgroundColor: 'white',

  },
  TopView: {
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    marginRight: 'auto',
    color: '#000',
    marginTop: 10
  },
  Tutorial: {
    fontFamily: (Platform.OS === 'ios') ? 'AlNile-Bold' : 'sans-serif-medium',
    fontSize: 30,
    position: 'absolute',
    top: 20
  }
})
export default Tutorial;
