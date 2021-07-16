import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import AuthStack from '../navigation/AuthStack';
import {screenHeight, screenWidth} from '../utils/Dimensions';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);

  const canLogin = () => {
    return email && password;
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <FormInput onChangeText={email => setEmail(email)} />

      <FormInput
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />
      <FormButton
        buttonText="LOGIN"
        disabled={!canLogin()}
        onPress={() => login(email, password)}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    paddingTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoContainer: {
    width: screenWidth,
    height: screenHeight / 4,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});
