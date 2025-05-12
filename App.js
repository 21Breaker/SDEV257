import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
} from 'react-native';

// Box component renders an individual box with a background color and a centered number.
const Box = ({ children, style, backgroundColor }) => (
  <View style={[styles.box, { backgroundColor }, style]}>
    <Text style={styles.boxText}>{children}</Text>
  </View>
);

// Row component lays out its children horizontally.
const Row = ({ children, style }) => (
  <View style={[styles.row, style]}>{children}</View>
);

// Column component lays out its children vertically.
const Column = ({ children, style }) => (
  <View style={[styles.column, style]}>{children}</View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* First row: two columns (each with two boxes stacked vertically) */}
      <Row style={{ flex: 2 }}>
        <Column style={{ flex: 1 }}>
          <Box backgroundColor="cornflowerblue">1</Box>
          <Box backgroundColor="mediumseagreen">2</Box>
        </Column>
        <Column style={{ flex: 1 }}>
          <Box backgroundColor="tomato">3</Box>
          <Box backgroundColor="plum">4</Box>
        </Column>
      </Row>
      {/* Second row: three boxes arranged horizontally */}
      <Row style={{ flex: 1 }}>
        <Box backgroundColor="orange" style={{ flex: 1 }}>
          5
        </Box>
        <Box backgroundColor="pink" style={{ flex: 1 }}>
          6
        </Box>
        <Box backgroundColor="mediumpurple" style={{ flex: 1 }}>
          7
        </Box>
      </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Ensure that on Android, the content appears below the status bar.
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  // The row style defines a container that arranges children side by side.
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  // The column style stacks children vertically.
  column: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  // The box style removes any fixed width and sets alignSelf to 'stretch'
  // so that in a column layout it fills the available width.
  box: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    alignSelf: 'stretch',
  },
  boxText: {
    fontSize: 20,
    color: '#fff',
  },
});