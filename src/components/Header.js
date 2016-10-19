import React from 'react';
import { View, Text } from 'react-native';

//Error from eslint is just a coding aesthetics
const Header = () => {
     const { viewStyle, nameStyle, jobStyle } = styles;
     return (
          <View style={viewStyle}>
               <Text style={nameStyle}>
                    JD Penuliar
               </Text>
               <Text style={jobStyle}>
                    Full Stack Web Developer
               </Text>
          </View>

     );
};

const styles = {
     viewStyle: {
          backgroundColor: '#F8F8F8',
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          paddingTop: 15,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          elevation: 2,
          position: 'relative'
     },
     nameStyle: {
          fontSize: 20
     },
     jobStyle: {
          fontSize: 25
     }
};

export default Header;
