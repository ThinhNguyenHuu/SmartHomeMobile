import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'configs';

const App = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});

export default App;
