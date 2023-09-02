// import React, { useState } from "react";
// import { View } from "react-native";
// import {
//   Gesture,
//   GestureDetector,
//   GestureHandlerRootView,
// } from "react-native-gesture-handler";
// import { Canvas, Path } from "@shopify/react-native-skia";

// export default function Draw() {
//   const [paths, setPaths] = useState([]);

//   const pan = Gesture.Pan()
//     .onStart((g) => {
//       const newPaths = [...paths];
//       newPaths[paths.length] = {
//         segments: [],
//         color: "#06d6a0",
//       };
//       newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
//       setPaths(newPaths);
//     })
//     .onUpdate((g) => {
//       const index = paths.length - 1;
//       const newPaths = [...paths];
//       if (newPaths?.[index]?.segments) {
//         newPaths[index].segments.push(`L ${g.x} ${g.y}`);
//         setPaths(newPaths);
//       }
//     })
//     .minDistance(1);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <GestureDetector gesture={pan}>
//         <View style={{ flex: 1, backgroundColor: "black" }}>
//           <Canvas style={{ flex: 8 }}>
//             {paths.map((p, index) => (
//               <Path
//                 key={index}
//                 path={p.segments.join(" ")}
//                 strokeWidth={5}
//                 style="stroke"
//                 color={p.color}
//               />
//             ))}
//           </Canvas>
//         </View>
//       </GestureDetector>
//     </GestureHandlerRootView>
//   );
// }

import React, {useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, Button, Text, View} from 'react-native';
import {SketchCanvas, SketchCanvasRef} from 'rn-perfect-sketch-canvas';
import ColorPicker from 'react-native-wheel-color-picker';

export default function App() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('black');
  const [showPicker, setShowPicker] = useState(false);

  const onColorChange = newColor => {
    setColor(newColor);
  };
  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 25,
          fontWeight: '700',
          color: 'black',
          borderBottomWidth: 1,
          marginBottom: 3,
        }}>
        Draw your Sketch
      </Text>

      <SketchCanvas
        ref={canvasRef}
        strokeColor={color}
        strokeWidth={8}
        containerStyle={styles.container}
      />
      <Button onPress={handleUndo} title="Undo" />
      <Button onPress={() => canvasRef.current?.reset()} title="Clear" />

      <Button onPress={() => setShowPicker(true)} title="Choose Color" />
      {showPicker && (
        <View style={styles.colorPickerContainer}>
          <ColorPicker
            onColorChange={onColorChange}
            color={color}
            style={styles.colorPicker}
          />
          <Button onPress={() => setShowPicker(false)} title="Done" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorPickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  colorPicker: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
});
