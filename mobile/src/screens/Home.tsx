import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../components/Header';
import { Tab1Screen } from './Tab1Screen';
import { Tab2Screen } from './Tab2Screen';
import { Loading } from '../components/Loading';



const Tab = createBottomTabNavigator();
export function Home() {
  const [loading, setLoading] = useState(true);
  const { navigate } = useNavigation();

  // async function fetchData() {
  //   try {
  //     setLoading(true);

  //     const response = await api.get('summary');
  //     console.log(response)
  //     setSummary(response.data);
  //   } catch (error) {

  //     Alert.alert('Oops...', 'Não foi possível carregar o resumo das atividades!');
  //     console.error(error);

  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useFocusEffect(useCallback(() => {
  //   fetchData();
  // }, []));

  // if (loading) {
  //   return (
  //     <Loading />
  //   )
  // }

  return (
    <View className="flex-1 bg-background pt-16">
      <Header />
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0000', paddingTop: 0 },
        }}
    
        >
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
    </Tab.Navigator>
      
    </View>
  );
}