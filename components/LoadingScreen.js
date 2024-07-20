
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/digituslogo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>Yükleniyor...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logo: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default LoadingScreen;
