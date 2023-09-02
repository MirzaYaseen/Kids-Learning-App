import {View, Text, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          height: 150,
        }}
        source={require('../../assets/images/spl.jpeg')}
      />
    </View>
  );
};

export default Splash;
