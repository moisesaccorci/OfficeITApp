import React from 'react';
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from "react-native";

const logo = require('../../../assets/logo.png')
const kid = require('../../../assets/kid-studying.png')

function Home({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.Container}>
                    <Image style={styles.Logo} resizeMode='contain' source={logo} />
                </View>

                <View>
                    <Paragraph style={styles.Paragraph}>
                        Seja muito bem-vindo (a) à aplicação móvel da Office IT.
                        Navegue pelo menu na parte inferior da aplicação ou acesse a
                        função desejada.
                </Paragraph>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: 250, marginVertical: 25 }}>
                    <Image style={styles.kid} resizeMode='cover' source={kid} />
                </View>

                <View style={styles.TotalView}>

                    <ScrollView horizontal={true}>
                        <Card style={styles.Card}>
                            <Card.Content>
                                <Title style={styles.Title}>Plataforma EAD</Title>
                                <Paragraph>Acesse nossa plataforma EAD diretamente do nosso aplicativo para celulares.</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Plataforma EAD')}>
                                    Acessar
                    </Button>
                            </Card.Actions>
                        </Card>

                        <Card style={styles.Card}>
                            <Card.Content>
                                <Title style={styles.Title}>Contato</Title>
                                <Paragraph>Fale com nossa equipe de profissionais em Brasília e em São Paulo.</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Contato')}>
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

    kid: {
        width: 250,
        height: 250,
        flex: 1,
        flexWrap: 'wrap',
    },

    Container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
    },

    Title: {
        textAlign: 'center'
    },

    Paragraph: {
        textAlign: 'center',
        marginHorizontal: 5,
    },

    Card: {
        width: '25%',
        marginRight: 15,
    }


})

const { width, height } = Dimensions.get('screen') / 4;

export default Home;