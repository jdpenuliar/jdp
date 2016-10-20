import React from 'react';
import { Image, View, TouchableOpacity, Linking } from 'react-native';


const Contact = () => {
     const { imageStyle, viewStyle } = styles;
     return (
          // Eslint error for code styling only
          <View style={viewStyle}>
               <TouchableOpacity onPress={() => Linking.openURL('https://www.jdpenuliar.com')}>
                    <Image source={require('./../img/www.jpg')} style={imageStyle} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/jdpenuliar')}>
                    <Image
                         source={require('./../img/linkedin.png')}
                         style={imageStyle}
                    />
               </TouchableOpacity>

               <TouchableOpacity onPress={() => Linking.openURL('https://www.github.com/jdpenuliar')}>
                    <Image source={require('./../img/github.png')} style={imageStyle} />
               </TouchableOpacity>

               <TouchableOpacity onPress={() => Linking.openURL('https://mail.google.com/mail/?view=cm&fs=1&to=jaydz.penuliar@gmail.com')}>
                    <Image source={require('./../img/gmail.png')} style={imageStyle} />
               </TouchableOpacity>
          </View>

     );
};

const styles = {
     imageStyle: {
          height: 30,
          width: 30,
          marginLeft: 30,
          marginRight: 30
     },
     viewStyle: {
          flex: 1,
          flexDirection: 'row'
     }
};


export default Contact;
