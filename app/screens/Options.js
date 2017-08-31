import React from 'react';
import propTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends React.Component {
  static propTypes = {
    navigation: propTypes.object,
    alertWithType: propTypes.func,
  };

  handleThemesPress = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    Linking.openURL('httpasdasd://fixer.io').catch(() =>
      this.props.alertWithType('error', 'Sorry', 'An error occured while opening Fixer.io'),
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
