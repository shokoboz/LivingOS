import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../utils/Dimensions';
const FormButton = ({buttonText, disabled, style, ...rest}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        disabled ? styles.buttonDisabled : styles.button,
        style,
      ]}
      {...rest}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: screenHeight / 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2e64e5',
  },
  buttonDisabled: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
