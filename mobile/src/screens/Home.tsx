import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';


function Tab1Screen() {
  return (
    <View>
      <Text>Tela 1</Text>
    </View>
  );
}

function Tab2Screen() {
  return (
    <View>
      <Text>Tela 2</Text>
    </View>
  );
}

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
      <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
    </Tab.Navigator>
      
    </View>
  );
}