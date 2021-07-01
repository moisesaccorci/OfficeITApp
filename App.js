import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import {name as appName} from './app.json';
import Navigators from './src/components/Navigator';

export default function App() {
  return (
    <PaperProvider>
      <Navigators />
    </PaperProvider>
  );
}

