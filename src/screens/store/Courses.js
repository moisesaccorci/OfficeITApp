import React, { useState, useRef } from 'react';
import { Button, IconButton } from 'react-native-paper';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { call } from 'react-native-reanimated';
import { WebView } from 'react-native-webview';

export default function Courses() {
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  const webviewRef = useRef(null)


  function backButtonHandler() {
    if (webviewRef.current) webviewRef.current.goBack()
  }

  const frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward()
  }

  return (
    <>


      <WebView
        source={{ uri: 'https://www.officeit.com.br/' }}
        startInLoadingState={true}
        allowsFullscreenVideo={true}
        pullToRefreshEnabled={true}
        ref={webviewRef}
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack)
          setCanGoForward(navState.canGoForward)
          setCurrentUrl(navState.url)
        }}
      />
      <View style={styles.tabBarContainer}>
        <IconButton icon="arrow-left-circle" color={'#fff'} onPress={backButtonHandler} />
        <IconButton icon="arrow-right-circle" color={'#fff'} onPress={frontButtonHandler} />
      </View>

    </>
  )

}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0269A4'

  },
  button: {
    color: 'white',
    fontSize: 24,
    borderRadius: 55,
  }
})