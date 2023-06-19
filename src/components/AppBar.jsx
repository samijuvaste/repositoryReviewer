import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    backgroundColor: theme.colors.textPrimary,
  },
  item: {
    paddingLeft: 15,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title='Repositories' style={styles.item} />
    </View>
  );
};

export default AppBar;