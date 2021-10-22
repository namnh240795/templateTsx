import React from 'react';
import {Image, View, TouchableOpacity, Text, StatusBar} from 'react-native';
import styles from './styles';
import Svg, {Path} from 'react-native-svg';
import {Box} from '../../components/Box';
const Phone = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#f69935', height: 110}}>
        <Svg
          height="90%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{position: 'absolute', top: 100}}>
          <Path
            fill="#f69935"
            d="M0,160L80,176C160,192,320,224,480,240C640,256,800,256,960,224C1120,192,1280,128,1360,96L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </Svg>
      </View>
      {/* <Box height={100} width={100} background="#000" /> */}
    </View>
  );
};
export default Phone;
