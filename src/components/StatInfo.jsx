import { StyleSheet, View } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const StatInfo = ({ numericStat, title }) => {
  let stat = numericStat >= 1000
    ? (numericStat / 1000).toFixed(1) + 'k'
    : String(numericStat);
  if (stat.endsWith('0k')) {
    stat = stat.slice(undefined, 2) + 'k';
  }
  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{stat}</Text>
      <Text color='textSecondary'>{title}</Text>
    </View>
  );
};

export default StatInfo;