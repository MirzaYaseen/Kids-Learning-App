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

const GKShapes = () => {
  const [voices, setVoices] = useState([]);
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [textCircle, setTextCircle] = useState('Circle');
  const [textEllipse, setTextEllipse] = useState('Ellipse');
  const [textHexagon, setTextHexagon] = useState('Hexagon');
  const [textOctagon, setTextOctagon] = useState('Octagon');
  const [textParallelogram, setTextParallelogram] = useState('Parallelogram');
  const [textRectangle, setTextRectangle] = useState('Rectangle');
  const [textSquare, setTextSquare] = useState('Square');
  const [textTriangle, setTextTriangle] = useState('Triangle');
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

  const readTextCircle = async () => {
    Tts.stop();
    Tts.speak(textCircle);
  };

  const readTextEllipse = async () => {
    Tts.stop();
    Tts.speak(textEllipse);
  };

  const readTextHexagon = async () => {
    Tts.stop();
    Tts.speak(textHexagon);
  };

  const readTextOctagon = async () => {
    Tts.stop();
    Tts.speak(textOctagon);
  };

  const readTextParallelogram = async () => {
    Tts.stop();
    Tts.speak(textParallelogram);
  };

  const readTextRectangle = async () => {
    Tts.stop();
    Tts.speak(textRectangle);
  };

  const readTextSquare = async () => {
    Tts.stop();
    Tts.speak(textSquare);
  };

  const readTextTriangle = async () => {
    Tts.stop();
    Tts.speak(textTriangle);
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
                style={styles.buttonStyle}
                onPress={readTextCircle}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/circle.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextEllipse}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/ellipse.png')}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextHexagon}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/hexagon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextOctagon}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/octagon.png')}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextParallelogram}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/parallelogram.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextRectangle}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/rectangle.png')}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                marginTop: 20,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextSquare}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/square.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={readTextTriangle}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/trianglepro.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GKShapes;

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
    width: 120,
    height: 120,
  },
});
