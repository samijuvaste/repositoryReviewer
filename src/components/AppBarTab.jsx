import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ title, style }) => {
  return (
    <Pressable style={style}>
      <Text
        color='white'
        fontWeight='bold'
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;