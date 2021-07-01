import React from 'react';
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { View, Text, SafeAreaView, StyleSheet, Image, Linking } from "react-native";

const logo = require('../../../assets/logo.png')

export default function Contact() {
    return (
        <>
        <View style={styles.Container}>
            <Image style={styles.Logo} resizeMode='contain' source={logo} />
        </View>

        <View style={styles.TotalView}>
            <View>
            <Button onPress={() => {Linking.openURL('https://api.whatsapp.com/send/?phone=5561992289905')}} style={styles.Button}><Text style={styles.Text}>Brasília</Text></Button>
            <Paragraph style={styles.Paragraph}>SCS Quadra 01, Bloco G, Ed Baracat, Sala 702 – Brasília, DF</Paragraph>
            </View>

            <View>
            <Button onPress={() => {Linking.openURL('https://api.whatsapp.com/send/?phone=5511999043651')}} style={styles.Button}><Text style={styles.Text}>São Paulo</Text></Button>
            <Paragraph style={styles.Paragraph}>Alameda Mamoré 149, ap 253 – Barueri, SP​​​​​​</Paragraph>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    TotalView: {
        flex: 1,
        alignItems: 'center',
    },

    Button: {
        backgroundColor: 'green',
        color: '#FFFFFF',
        padding: 10,
        marginVertical: 25,
    },
    Text: {
        color: 'white',
    },
    
    Paragraph: {
        marginBottom: 25, 
        fontWeight: 'bold', 
        marginHorizontal: 5,
    },

    Logo: {
        width: '80%',
        height: '100%',
        flex: 1,
        flexWrap: 'wrap'
    },

    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
    },

})