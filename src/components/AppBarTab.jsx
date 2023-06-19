import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ title, path, style }) => {
  return (
    <Link to={path} style={style}>
      <Text
        color='white'
        fontWeight='bold'
      >
        {title}
      </Text>
    </Link>
  );
};

export default AppBarTab;