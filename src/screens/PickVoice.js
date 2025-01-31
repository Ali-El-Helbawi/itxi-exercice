import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Alert, Modal} from 'react-native';

const PickVoice = () => {
  const navigation = useNavigation();
  return (
    <View style={[Styles.container]}>
      <Pressable
        style={Styles.button}
        onPress={() => {
          navigation.navigate('MainStack');
        }}>
        <Text style={Styles.text}>Dismiss</Text>
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
export default PickVoice;
