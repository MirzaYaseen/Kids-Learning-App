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
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

// import slider for the tuning of pitch and speed
import Slider from '@react-native-community/slider';

// import Tts Text to Speech
import Tts from 'react-native-tts';

const Words = () => {
  const [voices, setVoices] = useState([]);
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [textHand, setTextHand] = useState('MAP');
  const [textFoot, setTextFoot] = useState('CAR');
  const [textNose, setTextNose] = useState('BED');
  const [textEye, setTextEye] = useState('BUG');
  const [textLeg, setTextLeg] = useState('CUP');
  const [textFace, setTextFace] = useState('SUN');
  const [textFan, setTextFan] = useState('FAN');
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

  const readTextHand = async () => {
    Tts.stop();
    Tts.speak(textHand);
  };

  const readTextFoot = async () => {
    Tts.stop();
    Tts.speak(textFoot);
  };

  const readTextNose = async () => {
    Tts.stop();
    Tts.speak(textNose);
  };

  const readTextEye = async () => {
    Tts.stop();
    Tts.speak(textEye);
  };

  const readTextLeg = async () => {
    Tts.stop();
    Tts.speak(textLeg);
  };

  const readTextFace = async () => {
    Tts.stop();
    Tts.speak(textFace);
  };
  const readTextFan = async () => {
    Tts.stop();
    Tts.speak(textFan);
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
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={require('../../assets/images/back.jpg')}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
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
            {/* <Text style={styles.sliderLabel}>Select the Voice</Text>
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

            <TouchableOpacity
              style={styles.buttonStyle1}
              onPress={readTextHand}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                  borderWidth: 4,
                  borderColor: 'white',
                }}>
                <Image
                  style={styles.image1}
                  source={require('../../assets/images/map.png')}
                />

                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    marginLeft: 10,
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  M
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  A
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  P
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle1}
              onPress={readTextNose}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderWidth: 4,
                  borderColor: 'white',
                }}>
                <Image
                  style={styles.image1}
                  source={require('../../assets/images/bed.png')}
                />

                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    marginLeft: 10,
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  B
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  E
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  D
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1} onPress={readTextEye}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderWidth: 4,
                  borderColor: 'white',
                }}>
                <Image
                  style={styles.image1}
                  source={require('../../assets/images/ladybug.png')}
                />

                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    marginLeft: 10,
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  B
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  U
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  G
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1} onPress={readTextLeg}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderWidth: 4,
                  borderColor: 'white',
                }}>
                <Image
                  style={styles.image1}
                  source={require('../../assets/images/coffee.png')}
                />

                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    marginLeft: 10,
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  C
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  U
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  P
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle1}
              onPress={readTextFace}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderWidth: 4,
                  borderColor: 'white',
                }}>
                <Image
                  style={styles.image1}
                  source={require('../../assets/images/sun.png')}
                />

                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    marginLeft: 10,
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  S
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  U
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  N
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1} onPress={readTextFan}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderWidth: 4,
                  borderColor: 'white',
                }}>
                <Image
                  style={styles.image1}
                  source={require('../../assets/images/fan.png')}
                />

                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    marginLeft: 10,
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  F
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  A
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  N
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle1}
              onPress={readTextFoot}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderWidth: 4,
                  borderColor: 'white',
                }}>
                <Image
                  style={styles.image1}
                  source={require('../../assets/images/car.png')}
                />

                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    marginLeft: 10,
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  C
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  A
                </Text>
                <Text
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1,
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: 50,
                    fontWeight: '700',
                    color: 'white',
                    borderColor: 'white',
                  }}>
                  R
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default Words;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonStyle: {
    width: 150,
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
  },
  buttonStyle1: {
    width: 400,
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',

    padding: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 5,
  },
  sliderLabel: {
    textAlign: 'center',
    marginRight: 20,
    marginTop: 10,
  },
  slider: {
    flex: 1,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    width: '100%',
    textAlign: 'center',
    height: 40,
  },
  image: {
    width: 70,
    height: 70,
  },
  image1: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
});
