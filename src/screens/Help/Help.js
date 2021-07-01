import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Help() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>Página em construção</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Text: {
        fontWeight: 'bold',
        fontSize: 24,
    }
})