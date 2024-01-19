import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    FlatList,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const Status = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("None");
    const [showCalendar, setShowCalendar] = useState(false);
    const[button,setButton]=useState(true)
    const[buttonValue,setButtonValue]=useState('Show Status');
    
    const data1 = [
        { id: '1', label: "CSE", value: "CSE" },
        { id: '2', label: "EEE", value: "EEE" },
        { id: '3', label: "ECE", value: "ECE" },
        { id: '4', label: "MECH", value: "MECH" },
        { id: '5', label: "NCC", value: "NCC" },
        { id: '6', label: "HOSTEL", value: "HOSTEL" },
        { id: '7', label: "ALL", value: "ALL" },
    ];

    const data = [
        { id: '1', Department: 'CSE', Date: '10/6/2023', Status: 'COMPLETED!!' },
        { id: '2', Department: 'EEE', Date: '10/6/2023', Status: 'ONGOING...' },
        { id: '3', Department: 'ECE', Date: '10/6/2023', Status: 'ONGOING...' },
    ];

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const buttonChange=()=>{
        if(button==true)
          setButtonValue('Hide Status');
        else
          setButtonValue('Show Status');
        setButton(!button);
    };
    const showCalendarFunc = () => {
        if (selectedLanguage !== 'None')
            setShowCalendar(!showCalendar);
        else
            alert('Select a value first');
    };

    const renderItem = ({ item }) => {
        const amountColor = item.Status === 'COMPLETED!!' ? 'green' : 'red';

        return (
            <View style={styles.card}>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 700 }}>{item.Department}</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 15, borderRadius: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>Date:<Text>{item.Date}</Text></Text>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>Status:<Text style={{ color: amountColor }}>{item.Status}</Text></Text>
                </View>
            </View>
        );
    };

    let filteredData = data;

    if (selectedLanguage !== 'ALL') {
        filteredData = data.filter((item) => item.Department === selectedLanguage);
    }

    return (
        <ImageBackground
            source={require('../assets/login_background.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <Text style={styles.Text}>Venue</Text>
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
                            <FlatList
                                data={data1}
                                keyExtractor={(item) => item.id.toString()}
                                scrollEnabled={true}
                                style={styles.flatList}
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
                        <TouchableOpacity style={{ backgroundColor: '#2ba5be', borderRadius: 5 }} onPress={()=>{
                            showCalendarFunc();
                            buttonChange();
                        }}>
                            <Text style={{ color: 'black', textAlign: 'center', padding: 10, fontSize: 20, fontWeight: '700' }}>{buttonValue}</Text>
                        </TouchableOpacity>
                    </View>
                    {showCalendar && (
                        <View style={styles.scroll}>
                            <FlatList
                                data={filteredData}
                                keyExtractor={(item) => item.id}
                                renderItem={renderItem}
                            />
                        </View>
                    )}
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: hp(100),
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
    },
    Text: {
        paddingBottom: 12,
        paddingTop: 12,
        fontSize: 20,
        left: 10,
        color: "#2ba5be",
    },
    flatList: {
        maxHeight: wp(80),
        marginBottom: 10,
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
    },
    card: {
        backgroundColor: '#2ba5be',
        padding: 16,
        margin: 8,
        marginTop: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        height: hp(17),
        width: wp(90),
    },
});

export default Status;
