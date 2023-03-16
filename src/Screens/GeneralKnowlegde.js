import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const GeneralKnowlegde = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/images/backg.jpg')}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 35,
              textAlign: 'center',
              marginTop: '10%',
              color: 'black',
            }}>
            General Knowledge
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Animals')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '10%',
              borderWidth: 1,
              marginLeft: 10,
              marginRight: 10,
              padding: 20,
            }}>
            <Text style={{fontSize: 27, color: 'blue'}}>Animals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Birds')}
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              padding: 20,
            }}>
            <Text style={{fontSize: 27, color: 'red'}}>Birds</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('PartOfBody')}
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              padding: 20,
            }}>
            <Text style={{fontSize: 27, color: 'green'}}>Part of Body</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('FiveSenses')}
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              padding: 20,
              paddingBottom: 10,
            }}>
            <Text style={{fontSize: 27, color: 'black'}}>Five Senses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('GKShapes')}
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              padding: 20,
              paddingBottom: 10,
            }}>
            <Text style={{fontSize: 27, color: 'brown'}}>Shapes</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default GeneralKnowlegde;
