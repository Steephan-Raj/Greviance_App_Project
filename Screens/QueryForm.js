import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Modal from 'react-native-modal';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function QueryForm() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const [title, setTitle] = useState('');

  const toggleModal4 = () => {
    if (inputValue && inputValue1 && inputValue2 ){
      alert('Complaint Successfully Sent');
      setModalVisible(!isModalVisible);
    
    }
    else
      alert('Please enter the value first');
    setTitle('Computer based Problems');
  };

  const toggleModal = () => {

    setModalVisible(!isModalVisible);

    setTitle('Computer based Problems')
  };
  const toggleModal1 = () => {
    setModalVisible(!isModalVisible);
    setTitle('Civil based Problems')
  };
  const toggleModal2 = () => {
    setModalVisible(!isModalVisible);
    setTitle('Electrical based Problems')
  };
  const toggleModal3 = () => {
    setModalVisible(!isModalVisible);
    setTitle('Plumbing based Problems')
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleInputChange1 = (text) => {
    setInputValue1(text);
  };
  const handleInputChange2 = (text) => {
    setInputValue2(text);
  };

  return (
    <ImageBackground
    source={require('../assets/login_background.jpg')}
    style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
       
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginTop: 50,marginBottom:20,color:'#2ba5be',fontWeight:700 }}>CHOOSE THE PROBLEM YOU ARE FACING:</Text>
            <View style={styles.box}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={toggleModal}>
                <Image
                  source={require('../assets/computer.png')}
                  style={styles.image}
                />
                <Text style={{ fontSize: 18,color:'#2ba5be' }}> COMPUTER BASED PROBLEM</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={toggleModal1}>
                <Image
                  source={require('../assets/civil.png')}
                  style={styles.image}
                />
                <Text style={{ fontSize: 18,color:'#2ba5be' }}>CIVIL BASED PROBLEM</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={toggleModal2}>
                <Image
                  source={require('../assets/electrician.png')}
                  style={styles.image}
                />
                <Text style={{ fontSize: 18,color:'#2ba5be' }}>ELECTRICAL BASED PROBLEMS</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={toggleModal3}>
                <Image
                  source={require('../assets/plumbing.png')}
                  style={styles.image}
                />
                <Text style={{ fontSize: 18,color:'#2ba5be' }}>PLUMBING BASED PROBLEM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Modal */}
      <View style={styles.pageContainer}>

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          animationIn="slideInUp"
          animationOut="slideOutDown"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 20, marginBottom: 15, color: "#2ba5be", fontWeight: 600 }}>{title}</Text>
              <View style={styles.TextBox}>

                <Text style={styles.text1}>Venue:</Text>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Eg.CSE,ECE,EEE,..."
                  onChangeText={handleInputChange}
                  value={inputValue}
                  placeholderTextColor={'#2ba5be'}
                />
              </View>
              <View style={styles.TextBox}>
                <Text style={styles.text1}>Floor:</Text>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Eg.Ground,Ist,2nd floor..."
                  onChangeText={handleInputChange1}
                  value={inputValue1}
                  placeholderTextColor={'#2ba5be'}
                />
              </View>
              <View style={styles.TextBox}>
                <Text style={styles.text1}>Complaint:</Text>
                <TextInput
                  style={styles.TextInput1}
                  placeholder="Enter your complaint..."
                  onChangeText={handleInputChange2}
                  value={inputValue2}
                  multiline
                  placeholderTextColor={'#2ba5be'}
                />
              </View>
              <TouchableOpacity onPress={toggleModal4} disabled={false}>
                <Text style={{ backgroundColor: '#2ba5be', padding: 10, width: wp(40), textAlign: 'center', color: '#040c1c', fontSize: 15, borderRadius: 20 }}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.close} onPress={toggleModal}>
                <MaterialCommunityIcons name="close-thick" color="#2ba5be" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginTop: 0,
    backgroundColor: 'blue',
    width: wp(100),
    height: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: hp(35),
    width: wp(90),
    resizeMode: 'stretch',
    borderRadius:20,
  },
  box: {
    height: hp(40),
    width: wp(90),
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  pageContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  modalContainer: {
    position: 'absolute',
    top: 180,
    alignSelf: "center",
    elevation:10,
  },
  modalContent: {
    width: wp(90),
    height: hp(45),
    backgroundColor: '#040c1c',
    elevation: 8,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  close: {
    position: "absolute",
    top: 10,
    right: 15,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#2F015B",
  },
  click: {
    backgroundColor: "#FFAD00",
    padding: 10,
    marginBottom: 10,
    top: 50,
    borderRadius: 25,
    width: 230,
    alignSelf: "center",
    elevation: 7,
  },
  text1: {
    fontSize: 18,
    color: "#2ba5be",
    width: wp(23)
  },
  TextBox: {
    flexDirection: 'row',
  },
  TextInput: {
    height: 40, borderColor: '#2ba5be', borderWidth: 1, marginBottom: 10, paddingLeft: 10,color:'#2ba5be',
    width: wp(50),
  },
  TextInput1: {
    height: 40, borderColor: '#2ba5be', borderWidth: 1, marginBottom: 10, paddingLeft: 10,color:'#2ba5be',
    width: wp(50), height: hp(10)
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain'
    justifyContent: 'center',
    width:wp(100),
    height:hp(100),
  },
  scrollViewContent: {
    width: 'auto',
    height: 'auto',
  },
});
