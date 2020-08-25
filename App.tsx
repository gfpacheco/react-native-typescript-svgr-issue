import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from './Icon';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Icon fill={Colors.black} />
      </SafeAreaView>
    </>
  );
};

export default App;
