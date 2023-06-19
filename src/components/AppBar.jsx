import { ScrollView, StyleSheet, View } from 'react-native';
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
    paddingHorizontal: 15,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title='Repositories' path='/' style={styles.item} />
        <AppBarTab title='Sign in' path='/signIn' style={styles.item} />
      </ScrollView>
    </View>
  );
};

export default AppBar;