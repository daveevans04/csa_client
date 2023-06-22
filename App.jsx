import {View, StatusBar} from 'react-native';
import React from 'react';
import Routes from './src/navigations/routes';
import {Dimensions} from 'react-native';

const App = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: '#57C5B6',
        width: width,
        height: height,
      }}>
      <StatusBar barStyle={'default'} backgroundColor={'#57C5B6'} />
      <Routes />
    </View>
  );
};

export default App;
