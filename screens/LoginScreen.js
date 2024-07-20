import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { UserContext } from '../context/UserContext';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    let userType;
    if (username.toLowerCase() === 'kadin') {
      userType = 'female';
    } else if (username.toLowerCase() === 'erkek') {
      userType = 'male';
    } else {
      alert('Geçersiz kullanıcı adı. Lütfen "kadin" veya "erkek" girin.');
      return;
    }

    setUser({ username, userType });
    navigation.navigate('Intro1');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/digituslogo.png')} style={styles.logo} />
    
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 350, 
    height: 150, 
    marginBottom: 100, 
    marginTop:0,
  
  },
  
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green', 
    padding: 15, 
    borderRadius: 25, 
    width: '80%', 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
