import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const PrepGeneralKnowlegde = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/images/education1.png')}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 30,
              textAlign: 'center',
              marginTop: '10%',
              color: 'black',
            }}>
            General Knowledge
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('MonthsName')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '15%',
              borderWidth: 2,
              marginLeft: 20,
              marginRight: 20,
              padding: 20,
              borderColor:'black'
            }}>
            <Text style={{fontSize: 27, color: 'black'}}>Month of the Year</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('WeekDays')}
            style={{
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              padding: 20,
              borderColor:'black'
            }}>
            <Text style={{fontSize: 27, color: 'black'}}>Days of the week</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Professions')}
            style={{
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              padding: 20,
              borderColor:'black'
            }}>
            <Text style={{fontSize: 27, color: 'black'}}>Professions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Actions')}
            style={{
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              padding: 20,
              borderColor:'black'
            }}>
            <Text style={{fontSize: 27, color: 'black'}}>Actions</Text>
          </TouchableOpacity>

        
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default PrepGeneralKnowlegde;
