import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import All from '../component/All/All';
import Accessories from '../component/Accessories/Accessories';
import Electrnics from '../component/Electrnics/Electrnics';
import Furnitures from '../component/Furnitures/Furnitures';
import WomensClothings from '../component/WomensClothings/WomensClothings';
import React from 'react';
import {StyleSheet} from 'react-native';
import DetailScreen from '../component/DetailScreen/DetailScreen';
import { HomeStackNavigatorParamList } from '../../types';
import CreateScreen from '../createScreen/CreateScreen';

const Tabs = createMaterialTopTabNavigator();

const MainScreenNavigator = createStackNavigator<HomeStackNavigatorParamList>();

function TabNavigator() {
  return (
    <Tabs.Navigator  screenOptions={{
      tabBarLabelStyle: { fontSize: 10 },
      tabBarItemStyle: { width: 100 },
      tabBarScrollEnabled: true,
    }}>
      <Tabs.Screen name="All" component={All} />
      <Tabs.Screen name="Accessories" component={Accessories} />
      <Tabs.Screen name="Electrnics" component={Electrnics} />
      <Tabs.Screen name="Furnitures" component={Furnitures} />
      <Tabs.Screen name="Womens Clothings" component={WomensClothings} />
    </Tabs.Navigator>
  );
}


function MyStack() {
  return (
    <MainScreenNavigator.Navigator screenOptions={{ headerShown: false }}>
      <MainScreenNavigator.Screen name="Tab" component={TabNavigator}/>
      <MainScreenNavigator.Screen name="DetailScreen" component={DetailScreen} />
      <MainScreenNavigator.Screen name="CreateScreen" component={CreateScreen}/>       
    </MainScreenNavigator.Navigator>
  );
}

export default MyStack;

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
