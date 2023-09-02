
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={style.safe}>
      <View>
        <Text style={style.Headertext}>First Letter</Text>
      </View>
      <View style={style.container}>
        <TouchableOpacity
          style={style.buttons}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={style.text}>Nursary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttons}
          onPress={() => navigation.navigate('Prep')}>
          <Text style={style.text}>Prep</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttons}>
          <Text style={style.text}>Evaluation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttons}>
          <Text style={style.text}>Button 4</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  safe: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
  },
  buttons: {
    backgroundColor: 'red',
    marginTop: '5%',
    width: 350,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'Georgia',
  },
  Headertext: {
    fontSize: 40,
    color: 'blue',
    fontFamily: 'Georgia',
    textAlign: 'center',
  },
});
export default MainScreen;
