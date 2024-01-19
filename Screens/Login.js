import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import QueryForm from "./QueryForm";

const Login = () => {
  const navigation = useNavigation();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("None");
  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);
  const [selectedLanguage1, setSelectedLanguage1] = useState("None");

  const [data2, setData2] = useState([
    { label: "CSE", value: "CSE" },
    { label: "ECE", value: "ECE" },
    { label: "EEE", value: "EEE" },
    { label: "MECH", value: "MECH" },
    { label: "CIVIL", value: "CIVIL" },
    { label: "None", value: "None" },
  ]);

  const [data1, setData1] = useState([
    { label: "Student", value: "Student" },
    { label: "Teaching Staff", value: "Teaching Staff" },
    { label: "Non-Teaching Staff", value: "Non-Teaching Staff" },
  ]);

  const apiUrl = 'http://127.0.0.1:8000/api/login/';  // Replace with your Django API URL

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleDropdown1 = () => {
    setIsDropdownVisible1(!isDropdownVisible1);
  };

  const submitForm = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          WhoAreYou: selectedLanguage,
          Department: selectedLanguage1,
          // Add other data you want to send to the API
        }),
      });

      const responseData = await response.json();
      console.log('API Response:', responseData);

    } catch (error) {
      console.error('API Error:', error);
      // Handle errors here
    }
    navigation.navigate(QueryForm);
  };

  return (
    <ImageBackground
      source={require('../assets/login_background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={{}}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            <View >
              <View>
                <Image
                  source={require('../assets/learning.png')}
                  style={{ width: 350, height: 350, borderRadius: 20 }}
                />
              </View>
              <View>
                <Text style={{...styles.Text,fontWeight:600}}>You Are a...</Text>
                <TouchableOpacity
                  onPress={toggleDropdown}
                  style={styles.pickerContainer}
                >
                  <Text style={{ color: '#2ba5be' }}>
                    {data1.find((item) => item.value === selectedLanguage)?.label}
                  </Text>
                  <MaterialIcons
                    name={isDropdownVisible ? "arrow-drop-up" : "arrow-drop-down"}
                    size={24}
                    color="#000"
                  />
                </TouchableOpacity>

                {isDropdownVisible && (
                  <SectionList
                    sections={[{ data: data1 }]}
                    keyExtractor={(item, index) => item.value + index}
                    scrollEnabled={true}
                    style={styles.sectionList}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedLanguage(item.value);
                          toggleDropdown();
                        }}
                      >
                        <Text style={styles.dropdownItem}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>

              <View>
                <Text style={{...styles.Text,fontWeight:600}}>Department</Text>
                <TouchableOpacity
                  onPress={toggleDropdown1}
                  style={styles.pickerContainer}
                >
                  <Text style={{ color: '#2ba5be' }}>
                    {data2.find((item) => item.value === selectedLanguage1)?.label}
                  </Text>
                  <MaterialIcons
                    name={isDropdownVisible1 ? "arrow-drop-up" : "arrow-drop-down"}
                    size={24}
                    color="#000"
                  />
                </TouchableOpacity>

                {isDropdownVisible1 && (
                  <SectionList
                    sections={[{ data: data2 }]}
                    keyExtractor={(item, index) => item.value + index}
                    scrollEnabled={true}
                    style={styles.sectionList}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedLanguage1(item.value);
                          toggleDropdown1();
                        }}
                      >
                        <Text style={styles.dropdownItem}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>

              <View>
                <TouchableOpacity
                  style={{ backgroundColor: '#2ba5be', borderRadius: 5, marginTop: 10 }}
                  onPress={submitForm}
                >
                  <Text style={{ color: '#fff', textAlign: 'center', padding: 10, fontSize: 20, color: '#040c1c' }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#2ba5be",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 10,
    bottom: 12,
    width: wp(92),
    alignSelf: "center",
  },
  dropdownItem: {
    padding: 12,
    backgroundColor: "#2ba5be",
    borderBottomWidth: 2,
    borderColor: "#11182711",
    width: wp(92),
    alignSelf: "center",
    color: '#040c1c',
  },
  Text: {
    paddingBottom: 12,
    paddingTop: 12,
    fontSize: 20,
    left: 10,
    color: "#2ba5be",
  },
  sectionList: {
    maxHeight: wp(80),
  },
  scrollViewContent: {
    padding: 10,
    width: 'auto',
    height: 'auto',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: wp(100),
    height: hp(100),
  }
});

export default Login;
