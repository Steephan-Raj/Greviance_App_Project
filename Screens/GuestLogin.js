import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ImageBackground
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';
import QueryForm from "./QueryForm";




const GuestLogin = () => {

  const navigation=useNavigation();
  const [Name, setName] = useState('');
  const [MobileNo, setMobileNo] = useState('');

  const handleTextChange1 = (inputText) => {
    setName(inputText);
  }

  const handleTextChange2 = (inputText) => {
    setMobileNo(inputText);
  };

  return (
    <ImageBackground
    source={require('../assets/login_background.jpg')}
    style={styles.backgroundImage}
    >
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content"  />

    
      <View style={{ top: 30 }}>
        <View>
          <Image
          source={require('../assets/security.png')}
          style={{ width: 350, height:350, borderRadius: 20 }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View>
            <Text style={{...styles.Text,fontWeight:600}}>
              Name :
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your Name"
              onChangeText={handleTextChange1}
              value={Name}
              autoFocus
              maxLength={26}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View>
            <Text style={{...styles.Text,fontWeight:600}}>
              Mobile No :
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your Mobile No"
              onChangeText={handleTextChange2}
              value={MobileNo}
              keyboardType="Numeric"
              maxLength={10}
            />
          </View>
        </View>
        <View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#2ba5be', borderRadius: 10, width: wp(90), marginTop: 20 }}
            onPress={()=>navigation.navigate(QueryForm)} >
              <Text style={{ color: '#040c1c', textAlign: 'center', padding: 8, fontSize: 20,fontWeight:700 }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </SafeAreaView>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:0,
  },
  input: {
    height: hp(6),
    borderColor: '#2ba5be',
    borderWidth: 1,
    marginLeft: 10,
    width: wp(60),
    fontSize: 17,
    paddingLeft: 5,
    color:'#2ba5be',
    borderRadius:10,
  },
  Text: {
    fontSize: 20,
    marginLeft: 20,
    color: "#2ba5be",
    width: wp(27),

  },
  image: {
    width: 30,
    height: 30,
    left:20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain'
    justifyContent: 'center',
    width:wp(100),
    height:hp(100),
  },
});

export default GuestLogin;
