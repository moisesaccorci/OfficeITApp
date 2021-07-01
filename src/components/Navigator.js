import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from '../screens/home/Home';
import Classroom from '../screens/home/Classroom';
import { Action } from '../screens/home/Classroom';
import Contact from '../screens/home/Contact';
import Store from '../screens/store/Store';
import Courses from '../screens/store/Courses';
import Exam from '../screens/store/Exam';
import Help from '../screens/Help/Help';
import React, { useRef } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTheme = {
    dark: false,
    colors: {
        primary: 'white',
        background: 'rgb(242, 242, 242)',
        card: '#0269A4',
        text: 'white',
        border: '#0769d3',
        notification: 'rgb(255, 69, 58)',
    }
}

export default function Navigators() {

    return (
        <NavigationContainer theme={MyTheme}>
            <HomeStack />
        </NavigationContainer>
    )
}

export const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='Inicio' component={Home} />
            <Stack.Screen name='Plataforma EAD' component={Classroom} />
            <Stack.Screen name='Contato' component={Contact} />
            <Stack.Screen name='Loja' component={Store} />
            <Stack.Screen name='Cursos' component={Courses} />
            <Stack.Screen name='Exames' component={Exam} />
            <Stack.Screen name='Ajuda' component={Help} />
        </Stack.Navigator>
    )
}
