import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {MainColor, SecondaryColor} from '../values';

const PickVoice = props => {
  const onDismiss = props?.onDismiss ?? (() => {});
  return (
    <View style={[Styles.container]}>
      <Pressable
        style={Styles.button}
        onPress={() => {
          onDismiss();
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
    backgroundColor: SecondaryColor,
  },
  button: {
    backgroundColor: MainColor,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
  },
  text: {
    color: SecondaryColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default PickVoice;
