/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {Easing, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import EnterCompanyID from './src/screens/EnterCompanyID';
import PickVoice from './src/screens/PickVoice';
import MainScreen from './src/screens/MainScreen';

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
        <OnboardingNav.Screen
          name="PickVoice"
          component={PickVoice}
          options={{
            title: 'Pick Voice',
            headerTitleAlign: 'center',
            presentation: 'card',
          }}
        />
      </OnboardingNav.Navigator>
    );
  }
  const MainNav = createStackNavigator();
  function MainStack() {
    return (
      <MainNav.Navigator
        initialRouteName="MainScreen"
        screenOptions={{headerShown: true}}>
        <MainNav.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: 'Main Screen',
            headerTitleAlign: 'center',
            headerLeft: () => null,
          }}
        />
      </MainNav.Navigator>
    );
  }
  const RootStackNav = createStackNavigator();

  return (
    <RootStackNav.Navigator
      initialRouteName="OnBoardingStack"
      screenOptions={{headerShown: false}}>
      <RootStackNav.Screen name="OnBoardingStack" component={OnBoardingStack} />
      <RootStackNav.Screen
        name="MainStack"
        component={MainStack}
        options={{
          gestureEnabled: true,
          gestureDirection: 'vertical-inverted',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
                easing: Easing.out(Easing.ease),
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
                easing: Easing.in(Easing.ease),
              },
            },
          },
        }}
      />
    </RootStackNav.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef(null);
  const pageRef = useRef(null);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
        pageRef.current = routeNameRef.current;
      }}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          routeNameRef.current = currentRouteName;

          pageRef.current = currentRouteName;
          console.log(currentRouteName);
        }
      }}>
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
