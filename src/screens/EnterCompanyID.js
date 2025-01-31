import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
const EnterCompanyID = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={Styles.text}>Continue</Text>
      </Pressable>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
export default EnterCompanyID;
