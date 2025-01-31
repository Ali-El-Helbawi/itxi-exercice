/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Easing,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
import SettingsScreen from './src/screens/SettingsScreen';
import SetCompanyID from './src/screens/SetCompanyID';

const RootApp = props => {
  const OnboardingNav = createStackNavigator();
  const initialRoutes = props?.initialRoutes ?? null;
  function OnBoardingStack() {
    return (
      <OnboardingNav.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: true,
          headerBackTitleStyle: {display: 'none'},
        }}>
        <OnboardingNav.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{title: 'Welcome', headerTitleAlign: 'center'}}
        />

        <OnboardingNav.Screen
          name="EnterCompanyID"
          options={{title: 'Enter Company ID', headerTitleAlign: 'center'}}>
          {props => (
            <EnterCompanyID
              {...props}
              onPress={() => props.navigation.navigate('PickVoice')}
              title="Continue"
            />
          )}
        </OnboardingNav.Screen>
        <OnboardingNav.Screen
          name="PickVoice"
          options={{
            title: 'Pick Voice',
            headerTitleAlign: 'center',
            presentation: 'card',
          }}>
          {props => (
            <PickVoice
              {...props}
              onDismiss={() => {
                console.log('onDismiss');

                props.navigation.navigate('MainStack', {
                  screen: 'MainScreen',
                  params: {resetStack: true},
                });
              }}
            />
          )}
        </OnboardingNav.Screen>
      </OnboardingNav.Navigator>
    );
  }
  const MainNav = createStackNavigator();
  function MainStack() {
    return (
      <MainNav.Navigator
        initialRouteName={initialRoutes?.main ?? 'MainScreen'}
        screenOptions={{headerShown: true}}>
        <MainNav.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: 'Main Screen',
            headerTitleAlign: 'center',
            headerLeft: () => null,
            headerBackTitleStyle: {display: 'none'},
          }}
        />
        <MainNav.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            headerTitleAlign: 'center',
            headerShown: true,
            headerBackTitleStyle: {display: 'none'},
            gestureEnabled: true,
            gestureDirection: 'vertical',
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
        <MainNav.Screen
          name="PickVoice"
          options={{
            title: 'Pick Voice',
            headerTitleAlign: 'center',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          {props => (
            <PickVoice
              {...props}
              onDismiss={() => {
                console.log('onDismiss');
                props.navigation.goBack();
              }}
            />
          )}
        </MainNav.Screen>
        <MainNav.Screen
          name="SetCompanyID"
          component={SetCompanyID}
          options={{
            title: 'Set Company ID',
            headerTitleAlign: 'center',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <MainNav.Screen
          name="EnterCompanyID"
          options={{
            title: 'Enter Company ID',
            headerTitleAlign: 'center',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          {props => (
            <EnterCompanyID
              {...props}
              onPress={() => props.navigation.goBack()}
              title="Go Back"
            />
          )}
        </MainNav.Screen>
      </MainNav.Navigator>
    );
  }

  const RootStackNav = createStackNavigator();

  return (
    <RootStackNav.Navigator
      initialRouteName={initialRoutes?.initialRoute ?? 'OnBoardingStack'}
      screenOptions={{
        headerShown: false,
        headerBackTitle: '',
      }}>
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
  const [initialRoutes, setInitialRoutes] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getInitialURL = async () => {
      const url = await Linking.getInitialURL();
      let routeConfig = {};

      if (url) {
        const path = url.replace(/.*?:\/\//g, ''); // Remove the scheme (mydeeplinkapp://)
        console.log('Deep Link Path:', path);

        if (path.startsWith('main/settings/setCompanyID')) {
          routeConfig.main = 'MainScreen';
          routeConfig.initialRoute = 'MainStack';
        }
      }
      console.log(routeConfig);

      setInitialRoutes(routeConfig);
      setLoading(false);
    };

    getInitialURL();
  }, []);
  const linking = {
    prefixes: ['itxi://', 'https://www.itxi.net/'],
    config: {
      screens: {
        OnBoardingStack: {
          screens: {
            WelcomeScreen: 'welcome',
            EnterCompanyID: 'welcome/enterCompanyID',
          },
        },
        MainStack: {
          initialRouteName: 'MainScreen',
          screens: {
            MainScreen: 'main',
            SettingsScreen: 'main/settings',
            SetCompanyID: 'main/settings/setCompanyID',
          },
        },
      },
    },
  };
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading...</Text>}
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
        <RootApp initialRoutes={initialRoutes} />
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
