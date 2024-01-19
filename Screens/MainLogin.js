import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Dimensions, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import GuestLogin from './GuestLogin';
import Login from './Login';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Status from './Status';

const { width, height } = Dimensions.get('window');
export default function MainLogin() {
  const navigation = useNavigation();
  return (
    <ImageBackground
    source={require('../assets/login_background.jpg')}
    style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Login)}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(GuestLogin)}>
            <Text style={styles.text}>GUEST LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Status)}>
            <Text style={styles.text}>STATUS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = ({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: width < 800 ? wp(80) : wp(40),
    padding: 10,
    backgroundColor: '#2ba5be',
    borderRadius: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color:'#040c1c',
    fontWeight:700,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain'
    justifyContent: 'center',
    width:wp(100),
    height:hp(100),
  },
});
