import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
} from 'react-native';

// Box component renders an individual box with a background color and centered number.
const Box = ({ children, style, backgroundColor }) => (
  <View style={[styles.box, { backgroundColor }, style]}>
    <Text style={styles.boxText}>{children}</Text>
  </View>
);

// Column component lays out its children vertically.
const Column = ({ children, style }) => (
  <View style={[styles.column, style]}>{children}</View>
);

export default function App() {
  // Create an array [1, 2, ..., 12]
  const boxes = Array.from({ length: 12 }, (_, i) => i + 1);
  // Determine the midpoint to split the boxes array in half.
  const midpoint = Math.ceil(boxes.length / 2);
  const leftBoxes = boxes.slice(0, midpoint);
  const rightBoxes = boxes.slice(midpoint);

  // Define an array of 12 colors to assign each box a unique background color.
  const colors = [
    "cornflowerblue", 
    "mediumseagreen", 
    "tomato", 
    "plum", 
    "orange", 
    "pink",
    "mediumpurple",
    "skyblue",
    "lightgreen",
    "coral",
    "gold",
    "lightblue"
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {/* Left Column: Boxes 1 through 6 */}
        <Column style={styles.columnSide}>
          {leftBoxes.map(num => (
            <Box key={num} backgroundColor={colors[num - 1]}>
              {num}
            </Box>
          ))}
        </Column>
        {/* Right Column: Boxes 7 through 12 */}
        <Column style={styles.columnSide}>
          {rightBoxes.map(num => (
            <Box key={num} backgroundColor={colors[num - 1]}>
              {num}
            </Box>
          ))}
        </Column>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Ensure content on Android appears below the status bar.
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  // The row arranges the two columns side by side.
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    padding: 10,
  },
  // Each column equally shares the screen space.
  columnSide: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  // Box style defines consistent size and appearance.
  box: {
    margin: 5,
    height: 100,
    width: '90%', // Adjust this percentage based on desired width.
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 20,
    color: '#fff',
  },
});
