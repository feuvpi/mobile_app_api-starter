import './src/lib/dayjs';
import { StatusBar } from 'react-native';
import { Subscription } from "expo-modules-core"; 
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { Button } from 'react-native-elements';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification:async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export default function App() {

  async function handleCallNotification() {

    await Notifications.scheduleNotificationAsync({
      content:{
        title: 'Viva uma vida mais organizada!',
        body: 'Cheque a sua rotina diária',
        data:{},
      },
      trigger:{
        seconds:5,
      },
    });
  }

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent />
    </>
  );
}