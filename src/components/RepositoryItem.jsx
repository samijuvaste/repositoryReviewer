import { Image, StyleSheet, View } from 'react-native';

import Text from './Text';
import theme from '../theme';
import StatInfo from './StatInfo';

const styles = StyleSheet.create({
  item: {
    padding: 15,
  },
  pictureInfo: {
    flexDirection: 'row',
  },
  title: {
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: theme.radius,
  },

});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.pictureInfo}>
        <Image
          source={{ uri: item.ownerAvatarUrl }}
          style={styles.logo}
        />
        <View style={styles.title}>
          <Text fontWeight='bold' fontSize='subheading'>
            {item.fullName}
          </Text>
          <Text color='textSecondary' fontSize='subheading' margin='vertical'>
            {item.description}
          </Text>
          <Text backgroundColor='primary' color='white' margin='vertical'>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.stats}>
        <StatInfo title='Stars' numericStat={item.stargazersCount}/>
        <StatInfo title='Forks' numericStat={item.forksCount}/>
        <StatInfo title='Reviews' numericStat={item.reviewCount}/>
        <StatInfo title='Rating' numericStat={item.ratingAverage}/>
      </View>
    </View>
  );
};

export default RepositoryItem;