import React from 'react';
import propTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.icon} resizeMode="contain" source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: propTypes.func,
};

export default Header;
