import React from 'react';
import { AppRegistry, View } from 'react-native';
// import Header from './src/components/Header';
import Body from './src/components/Body';

const App = () => (
     <View style={{ flex: 1 }}>

          <Body />
     </View>


);

AppRegistry.registerComponent('jdp', () => App);
