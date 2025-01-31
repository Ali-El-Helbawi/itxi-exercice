import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Pressable, StyleSheet, Image, Modal} from 'react-native';
const MainScreen = props => {
  const navigation = useNavigation();
  const resetStackVal = props?.route?.params?.resetStack || false;
  const [resetStack, setResetStack] = React.useState(resetStackVal);
  const [showModal, setShowModal] = React.useState(false);
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
      <Modal
        animationType="slide"
        navigationBarTranslucent={true}
        statusBarTranslucent={true}
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Pressable
            onPress={() => {
              setShowModal(false);
            }}
            style={{position: 'absolute', top: 50, right: 0}}>
            <Image
              source={require('../images/close_icon.png')}
              style={{width: 60, height: 60}}
              resizeMode="contain"
            />
          </Pressable>
          <Text style={[Styles.text, {color: '#000'}]}>Voice bot screen</Text>
        </View>
      </Modal>
      <Pressable
        onPress={() => navigation.navigate('SettingStack')}
        style={{position: 'absolute', top: 0, left: 0}}>
        <Image
          source={require('../images/settings_icon.png')}
          style={{width: 60, height: 60}}
          resizeMode="contain"
        />
      </Pressable>
      <View style={Styles.subContainer}>
        <Pressable
          style={Styles.button}
          onPress={() => {
            setShowModal(true);
          }}>
          <Text style={Styles.text}>Launch Voicebot screen</Text>
        </Pressable>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
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
export default MainScreen;
