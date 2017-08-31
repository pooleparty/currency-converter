import React from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: propTypes.string,
  onPress: propTypes.func,
  selected: propTypes.bool,
  checkmark: propTypes.bool,
  visible: propTypes.bool,
  customIcon: propTypes.element,
  iconBackground: propTypes.string,
};

export default ListItem;
