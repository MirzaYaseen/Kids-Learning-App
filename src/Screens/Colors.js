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
  ImageBackground,
} from 'react-native';

// import slider for the tuning of pitch and speed
import Slider from '@react-native-community/slider';

// import Tts Text to Speech
import Tts from 'react-native-tts';

const Colorss = () => {
  const [voices, setVoices] = useState([]);
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [textBlack, setTextBlack] = useState('Black');
  const [textWhite, setTextWhite] = useState('White');
  const [textRed, setTextRed] = useState('Red');
  const [textBlue, setTextBlue] = useState('Blue');
  const [textGreen, setTextGreen] = useState('Green');
  const [textYellow, setTextYellow] = useState('Yellow');
  const [textPurple, setTextPurple] = useState('Purple');
  const [textPink, setTextPink] = useState('Pink');
  const [textOrange, setTextOrange] = useState('Orange');
  const [textBrown, setTextBrown] = useState('Brown');

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

  const readTextBlack = async () => {
    Tts.stop();
    Tts.speak(textBlack);
  };

  const readTextWhite = async () => {
    Tts.stop();
    Tts.speak(textWhite);
  };

  const readTextRed = async () => {
    Tts.stop();
    Tts.speak(textRed);
  };

  const readTextBlue = async () => {
    Tts.stop();
    Tts.speak(textBlue);
  };

  const readTextGreen = async () => {
    Tts.stop();
    Tts.speak(textGreen);
  };

  const readTextYellow = async () => {
    Tts.stop();
    Tts.speak(textYellow);
  };

  const readTextPurple = async () => {
    Tts.stop();
    Tts.speak(textPurple);
  };

  const readTextPink = async () => {
    Tts.stop();
    Tts.speak(textPink);
  };

  const readTextOrange = async () => {
    Tts.stop();
    Tts.speak(textOrange);
  };

  const readTextBrown = async () => {
    Tts.stop();
    Tts.speak(textBrown);
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
      source={require('../../assets/images/bgg.jpg')}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
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

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginTop: 20,
              }}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'black',
                    elevation: 5,
                  },
                ]}
                onPress={readTextBlack}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'white',
                    elevation: 5,
                  },
                ]}
                onPress={readTextWhite}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginTop: 20,
              }}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'red',
                    elevation: 5,
                  },
                ]}
                onPress={readTextRed}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'blue',
                    elevation: 5,
                  },
                ]}
                onPress={readTextBlue}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginTop: 20,
              }}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'green',
                    elevation: 5,
                  },
                ]}
                onPress={readTextGreen}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'yellow',
                    elevation: 5,
                  },
                ]}
                onPress={readTextYellow}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginTop: 20,
              }}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'purple',
                    elevation: 5,
                  },
                ]}
                onPress={readTextPurple}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: '#e75480',
                    elevation: 5,
                  },
                ]}
                onPress={readTextPink}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginTop: 20,
              }}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'orange',
                    elevation: 5,
                  },
                ]}
                onPress={readTextOrange}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor: 'brown',
                    elevation: 5,
                  },
                ]}
                onPress={readTextBrown}>
                <Text style={styles.buttonTextStyle}></Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Colorss;

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
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
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
});
