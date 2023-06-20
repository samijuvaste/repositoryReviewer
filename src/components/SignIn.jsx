import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderRadius: theme.radius,
    borderWidth: 1,
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
    marginBottom: 10,
    padding: 10,
  },
  separator: {
    height: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius,
    paddingVertical: 10,
  },
  buttonText: {
    alignSelf: 'center',
    paddingVertical: 5,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name='username'
        placeholder='Username'
        style={styles.input}
      />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry
        style={styles.input} 
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text
          color='white'
          fontSize='subheading'
          style={styles.buttonText}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm  onSubmit={handleSubmit} /> }
    </Formik>
  );
};

export default SignIn;