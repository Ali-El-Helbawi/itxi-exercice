import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
const MainScreen = props => {
  const navigation = useNavigation();
  const resetStackVal = props?.route?.params?.resetStack || false;
  const [resetStack, setResetStack] = React.useState(resetStackVal);

  useEffect(() => {
    if (resetStack) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MainScreen', params: {resetStack: false}}],
        }),
      );
      setResetStack(false);
    }
  }, []);

  return (
    <View style={Styles.container}>
      <Pressable onPress={() => navigation.navigate('EnterCompanyID')}>
        <Image
          source={require('../images/settings_icon.png')}
          style={{width: 60, height: 60}}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default MainScreen;
