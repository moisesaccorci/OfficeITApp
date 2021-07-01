import React from 'react';
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from "react-native";

const logo = require('../../../assets/logo.png')
const marketplace = require('../../../assets/marketplace.png')
function Store({ navigation }) {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.Container}>
                    <Image style={styles.Logo} resizeMode='contain' source={logo} />
                </View>

                <View>
                    <Paragraph style={styles.Paragraph}>
                        Seja muito bem-vindo (a) à loja da Office IT. Selecione o produto desejado.
            </Paragraph>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: 250, marginVertical: 25 }}>
                    <Image style={styles.marketplace} resizeMode='cover' source={marketplace} />
                </View>

                <View style={styles.TotalView}>

                    <ScrollView horizontal={true}>
                        <Card style={styles.Card}>
                            <Card.Content>
                                <Title style={styles.Title}>Cursos + Exames</Title>
                                <Paragraph>Cursos presenciais, a distância com aulas gravadas e aulas ao vivo.</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Cursos')}>
                                    Acessar
                </Button>
                            </Card.Actions>
                        </Card>

                        <Card style={styles.Card}>
                            <Card.Content>
                                <Title style={styles.Title}>Exames</Title>
                                <Paragraph>Fale com nossa equipe de profissionais em Brasília e em São Paulo.</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Exames')}>
                                    Acessar
                </Button>
                            </Card.Actions>
                        </Card>
                    </ScrollView>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    TotalView: {
        marginHorizontal: 25,
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

    marketplace: {
        width: 250,
        height: 250,
        flex: 1,
        flexWrap: 'wrap',
    },

    Title: {
        textAlign: 'center'
    },

    Paragraph: {
        textAlign: 'center',
        marginHorizontal: 5,
        marginBottom: 25,
    },

    Card: {
        width: '25%',
        marginRight: 15,
    }


})

const { width, height } = Dimensions.get('screen') / 4;


export default Store;