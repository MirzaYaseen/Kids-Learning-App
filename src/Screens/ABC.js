// Text to Speech Conversion with Natural Voices in React Native
// https://aboutreact.com/react-native-text-to-speech/
// import React in our code

import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
// import slider for the tuning of pitch and speed
import Slider from '@react-native-community/slider';

// import Tts Text to Speech
import Tts from 'react-native-tts';

const Abc = () => {
  const [voices, setVoices] = useState([]);
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [text, setText] = useState('A');
  const [textB, setTextB] = useState('B');
  const [textC, setTextC] = useState('C');
  const [textD, setTextD] = useState('D');
  const [textE, setTextE] = useState('E');
  const [textF, setTextF] = useState('F');
  const [textG, setTextG] = useState('G');
  const [textH, setTextH] = useState('H');
  const [textI, setTextI] = useState('I');
  const [textJ, setTextJ] = useState('J');
  const [textK, setTextK] = useState('K');
  const [textL, setTextL] = useState('L');
  const [textM, setTextM] = useState('M');
  const [textN, setTextN] = useState('N');
  const [textO, setTextO] = useState('O');
  const [textP, setTextP] = useState('P');
  const [textQ, setTextQ] = useState('Q');
  const [textR, setTextR] = useState('R');
  const [textS, setTextS] = useState('S');
  const [textT, setTextT] = useState('T');
  const [textU, setTextU] = useState('U');
  const [textV, setTextV] = useState('V');
  const [textW, setTextW] = useState('W');
  const [textX, setTextX] = useState('X');
  const [textY, setTextY] = useState('Y');
  const [textZ, setTextZ] = useState('Z');

  useEffect(() => {
    Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
    Tts.addEventListener('tts-finish', _event => setTtsStatus('finished'));
    Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    Tts.getInitStatus().then(initTts);
    return () => {
      Tts.removeEventListener('tts-start', _event => setTtsStatus('started'));
      Tts.removeEventListener('tts-finish', _event => setTtsStatus('finished'));
      Tts.removeEventListener('tts-cancel', _event =>
        setTtsStatus('cancelled'),
      );
    };
  }, []);

  const initTts = async () => {
    const voices = await Tts.voices();
    const availableVoices = voices
      .filter(v => !v.networkConnectionRequired && !v.notInstalled)
      .map(v => {
        return {id: v.id, name: v.name, language: v.language};
      });
    let selectedVoice = null;
    if (voices && voices.length > 0) {
      selectedVoice = voices[0].id;
      try {
        await Tts.setDefaultLanguage(voices[0].language);
      } catch (err) {
        //Samsung S9 has always this error:
        //"Language is not supported"
        console.log(`setDefaultLanguage error `, err);
      }
      await Tts.setDefaultVoice(voices[0].id);
      setVoices(availableVoices);
      setSelectedVoice(selectedVoice);
      setTtsStatus('initialized');
    } else {
      setTtsStatus('initialized');
    }
  };

  const readText = async () => {
    Tts.stop();
    Tts.speak(text);
  };

  const readTextB = async () => {
    Tts.stop();
    Tts.speak(textB);
  };

  const readTextC = async () => {
    Tts.stop();
    Tts.speak(textC);
  };

  const readTextD = async () => {
    Tts.stop();
    Tts.speak(textD);
  };

  const readTextE = async () => {
    Tts.stop();
    Tts.speak(textE);
  };

  const readTextF = async () => {
    Tts.stop();
    Tts.speak(textF);
  };

  const readTextG = async () => {
    Tts.stop();
    Tts.speak(textG);
  };

  const readTextH = async () => {
    Tts.stop();
    Tts.speak(textH);
  };

  const readTextI = async () => {
    Tts.stop();
    Tts.speak(textI);
  };

  const readTextJ = async () => {
    Tts.stop();
    Tts.speak(textJ);
  };

  const readTextK = async () => {
    Tts.stop();
    Tts.speak(textK);
  };

  const readTextL = async () => {
    Tts.stop();
    Tts.speak(textL);
  };

  const readTextM = async () => {
    Tts.stop();
    Tts.speak(textM);
  };

  const readTextN = async () => {
    Tts.stop();
    Tts.speak(textN);
  };

  const readTextO = async () => {
    Tts.stop();
    Tts.speak(textO);
  };

  const readTextP = async () => {
    Tts.stop();
    Tts.speak(textP);
  };

  const readTextQ = async () => {
    Tts.stop();
    Tts.speak(textQ);
  };

  const readTextR = async () => {
    Tts.stop();
    Tts.speak(textR);
  };

  const readTextS = async () => {
    Tts.stop();
    Tts.speak(textS);
  };

  const readTextT = async () => {
    Tts.stop();
    Tts.speak(textT);
  };

  const readTextU = async () => {
    Tts.stop();
    Tts.speak(textU);
  };

  const readTextV = async () => {
    Tts.stop();
    Tts.speak(textV);
  };

  const readTextW = async () => {
    Tts.stop();
    Tts.speak(textW);
  };

  const readTextX = async () => {
    Tts.stop();
    Tts.speak(textX);
  };

  const readTextY = async () => {
    Tts.stop();
    Tts.speak(textY);
  };

  const readTextZ = async () => {
    Tts.stop();
    Tts.speak(textZ);
  };

  const updateSpeechRate = async rate => {
    await Tts.setDefaultRate(rate);
    setSpeechRate(rate);
  };

  const updateSpeechPitch = async rate => {
    await Tts.setDefaultPitch(rate);
    setSpeechPitch(rate);
  };

  const onVoicePress = async voice => {
    try {
      await Tts.setDefaultLanguage(voice.language);
    } catch (err) {
      // Samsung S9 has always this error:
      // "Language is not supported"
      console.log(`setDefaultLanguage error `, err);
    }
    await Tts.setDefaultVoice(voice.id);
    setSelectedVoice(voice.id);
  };

  const renderVoiceItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: selectedVoice === item.id ? '#DDA0DD' : '#5F9EA0',
        }}
        onPress={() => onVoicePress(item)}>
        <Text style={styles.buttonTextStyle}>
          {`${item.language} - ${item.name || item.id}`}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/background.jpg')}>
        <View style={styles.container}>
          {/* <Text style={styles.titleText}>
            Adjust Clearity and Smoothness of Voice
          </Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>
              {`Speed: ${speechRate.toFixed(2)}`}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0.01}
              maximumValue={0.99}
              value={speechRate}
              onSlidingComplete={updateSpeechRate}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>
              {`Pitch: ${speechPitch.toFixed(2)}`}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0.5}
              maximumValue={2}
              value={speechPitch}
              onSlidingComplete={updateSpeechPitch}
            />
          </View> */}
          {/* <Text style={styles.sliderLabel}>Select the Voice from below</Text>
          <FlatList
            style={{width: '100%', marginTop: 5}}
            keyExtractor={item => item.id}
            renderItem={renderVoiceItem}
            extraData={selectedVoice}
            data={voices}
          />
          <Text style={styles.sliderContainer}>
            {`Selected Voice: ${selectedVoice || ''}`}
          </Text> */}
          {/* <TextInput
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          value={text}
          onSubmitEditing={Keyboard.dismiss}
        /> */}
          <Swiper showsButtons={true} loop={false}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readText}>
                <Text style={styles.buttonTextStyle}>A</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextB}>
                <Text style={styles.buttonTextStyle}>B</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextC}>
                <Text style={styles.buttonTextStyle}>C</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextD}>
                <Text style={styles.buttonTextStyle}>D</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextE}>
                <Text style={styles.buttonTextStyle}>E</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextF}>
                <Text style={styles.buttonTextStyle}>F</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextG}>
                <Text style={styles.buttonTextStyle}>G</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextH}>
                <Text style={styles.buttonTextStyle}>H</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextI}>
                <Text style={styles.buttonTextStyle}>I</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextJ}>
                <Text style={styles.buttonTextStyle}>J</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextK}>
                <Text style={styles.buttonTextStyle}>K</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextL}>
                <Text style={styles.buttonTextStyle}>L</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextM}>
                <Text style={styles.buttonTextStyle}>M</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextN}>
                <Text style={styles.buttonTextStyle}>N</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextO}>
                <Text style={styles.buttonTextStyle}>O</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextP}>
                <Text style={styles.buttonTextStyle}>P</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextQ}>
                <Text style={styles.buttonTextStyle}>Q</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextR}>
                <Text style={styles.buttonTextStyle}>R</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextS}>
                <Text style={styles.buttonTextStyle}>S</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextT}>
                <Text style={styles.buttonTextStyle}>T</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextU}>
                <Text style={styles.buttonTextStyle}>U</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextV}>
                <Text style={styles.buttonTextStyle}>V</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextW}>
                <Text style={styles.buttonTextStyle}>W</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextX}>
                <Text style={styles.buttonTextStyle}>X</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextY}>
                <Text style={styles.buttonTextStyle}>Y</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                marginLeft: 10,
                marginRight: 10,
                marginTop: 20,
              }}>
              <TouchableOpacity style={styles.buttonStyle} onPress={readTextZ}>
                <Text style={styles.buttonTextStyle}>Z</Text>
              </TouchableOpacity>
            </View>
          </Swiper>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Abc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  buttonStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    resizeMod: 'contain',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 55,
  },
  buttonTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 150,
    fontWeight: '900',
    marginTop: 30,
    fontFamily: 'fantasy',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 5,
    marginBottom: 20,
  },
  sliderLabel: {
    textAlign: 'center',
    marginRight: 20,
    marginTop: 10,
  },
  slider: {
    flex: 1,
    marginTop: 10,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    width: '100%',
    textAlign: 'center',
    height: 40,
  },
});
