import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate('PickVoice')}>
        <Text style={Styles.text}>Go to pick voice screen</Text>
      </Pressable>
      <Pressable
        style={Styles.button}
        onPress={() => navigation.navigate('SetCompanyID')}>
        <Text style={Styles.text}>Go to Set Company ID screen</Text>
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
    marginVertical: 30,
    width: '80%',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default SettingsScreen;
