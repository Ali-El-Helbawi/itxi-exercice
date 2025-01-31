/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import EnterCompanyID from './src/screens/EnterCompanyID';

const RootApp = () => {
  const OnboardingNav = createStackNavigator();

  function OnBoardingStack() {
    return (
      <OnboardingNav.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{headerShown: true}}>
        <OnboardingNav.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{title: 'Welcome', headerTitleAlign: 'center'}}
        />
        <OnboardingNav.Screen
          name="EnterCompanyID"
          component={EnterCompanyID}
          options={{title: 'Enter Company ID', headerTitleAlign: 'center'}}
        />
      </OnboardingNav.Navigator>
    );
  }
  const RootStackNav = createStackNavigator();

  return (
    <RootStackNav.Navigator
      initialRouteName="OnBoardingStack"
      screenOptions={{headerShown: false}}>
      <RootStackNav.Screen name="OnBoardingStack" component={OnBoardingStack} />
    </RootStackNav.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle={'default'}
          showHideTransition={'fade'}
          hidden={false}
          translucent={true}
        />
        <RootApp />
      </SafeAreaView>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
