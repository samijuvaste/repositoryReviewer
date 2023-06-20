import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  normal: {
    borderColor: theme.colors.textSecondary,
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = {
    ...style,
    borderColor: error
      ? styles.error.borderColor
      : styles.normal.borderColor,
  };

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;