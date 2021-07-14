import React from 'react';
import Toast from 'react-native-toast-message';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';
const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
      <Toast ref={ref => Toast.setRef(ref)} />
    </AuthProvider>
  );
};

export default Providers;
