import React from 'react';
// import { Text, ScrollView } from 'react-native';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Header from './Header';

// const Body = () => {
//      return (
//           <ScrollView>
//                <Text>
//                     This is body.
//                </Text>
//           </ScrollView>
//
//      );
// };

const Body = () => {
     const { parallaxStyle, headerImage, skillTitle, skillSets } = styles;
     return (
          <ParallaxScrollView
               style={parallaxStyle}
               renderFixedHeader={() =>
                    // <Text style={{ textAlign: 'right', color: 'white',
                    // padding: 5, fontSize: 20 }}>
                    //      Hello
                    // </Text>}
                    <Header />}
               parallaxHeaderHeight={320}
               renderBackground={() =>
               <Image
                    source={require('./../img/mean.jpg')}
                    style={headerImage}
               />}
          >
          <View style={{ alignItems: 'center' }}>
               <Text style={skillTitle}>Languages</Text>
               <Text style={skillSets}>HTML 5</Text>
               <Text style={skillSets}>CSS 3</Text>
               <Text style={skillSets}>Javascript</Text>
               <Text style={skillSets}>Python</Text>
               <Text style={skillSets}>Node.js</Text>
               <Text style={skillSets}>Swift</Text>
               <Text style={skillSets}>Objective C</Text>
               <Text style={skillSets}>PHP</Text>
               <Text style={skillTitle}>Database</Text>
               <Text style={skillSets}>MySQL</Text>
               <Text style={skillSets}>NoSQL</Text>
               <Text style={skillTitle}>Frameworks</Text>
               <Text style={skillSets}>Express.js</Text>
               <Text style={skillSets}>Angular.js</Text>
               <Text style={skillSets}>React Native</Text>
               <Text style={skillSets}>Pylot</Text>
               <Text style={skillSets}>Django</Text>
               <Text style={skillSets}>React.js</Text>
          </View>
          </ParallaxScrollView>

     );
};
const styles = {
     parallaxStyle: {
          flex: 1,
          backgroundColor: 'hotpink',
          overflow: 'hidden'
     },
     headerImage: {
          width: 380,
          height: 240,
          paddingTop: 10,
          paddingBottom: 10,
          marginTop: 85,
          marginBottom: 85
     },
     skillTitle: {
          marginTop: 10,
          fontSize: 30,
          color: '#009688'
     },
     skillSets: {
          fontSize: 20,
          color: '#009688'
     },
     textColor: {
          color: '#009688'
     }
};

export default Body;
