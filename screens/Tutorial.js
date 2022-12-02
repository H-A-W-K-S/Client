import React, { Component, useState } from 'react';
import { View, Image, StyleSheet, Text, Platform, PropTypes, Modal, Pressable } from 'react-native';
import BackIcon from 'react-native-vector-icons/Feather';

const Tutorial = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.TopView}>
        <BackIcon onPress={() => navigation.navigate('mainPage')} style={styles.Icon} name="chevron-left" size={60} color={'#fff'} />
        <Text style={styles.Tutorial}>Tutorial</Text>
        <Modal 
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text >Text go here</Text>
              <Pressable
              style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>Hide Help</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen, styles.onlinehlep]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Help</Text>
      </Pressable>
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
  },
  onlinehlep: {
    position: 'absolute',
    top: 20,
    right: "5%"
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#9b9394",
  },
  buttonClose: {
    backgroundColor: "#9b9394",
  },
})
export default Tutorial;
