import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const Splash = () => {
  return (
    <View>
      <Image style={styles.imageStyle} source={require('./tempo_splash.png')} />
    </View>
  );
};
export default Splash;
