import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from '../screens/home/Home';
import Classroom from '../screens/home/Classroom';
import {Action} from '../screens/home/Classroom';
import Contact from '../screens/home/Contact';
import Store from '../screens/store/Store';
import Courses from '../screens/store/Courses';
import Exam from '../screens/store/Exam';
import React, { useRef } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTheme = {
   dark: false,
   colors: {
    primary: 'white',
    background: 'rgb(242, 242, 242)',
    card: '#01458e',
    text: 'white',
    border: '#0769d3',
    notification: 'rgb(255, 69, 58)',
   }
}

export default function Navigators() {

    return (
        <NavigationContainer theme={MyTheme}> 
            <Tab.Navigator tabBarOptions={{showLabel: false,}}>
            <Tab.Screen options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='home' color={'#e46713'} size={40} />
                )
            }} name='Inicio' component={HomeStack} />
            <Tab.Screen options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='store' color={'#e46713'} size={40} />
                )
            }} name='Loja' component={StoreStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export const HomeStack = () => {

    return (
    <Stack.Navigator>
        <Stack.Screen name='Inicio' component={Home} />
        <Stack.Screen name='Plataforma EAD' component={Classroom} />
        <Stack.Screen name='Contato' component={Contact} />
    </Stack.Navigator>
    )
}

const StoreStack  = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Loja' component={Store} />
            <Stack.Screen name='Cursos' component={Courses} />
            <Stack.Screen name='Exames' component={Exam} />
        </Stack.Navigator>
    )
}