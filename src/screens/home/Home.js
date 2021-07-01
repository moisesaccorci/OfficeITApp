import React from 'react';
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { IconButton } from 'react-native-paper';

const logo = require('../../../assets/logo.png')
const kid = require('../../../assets/kid-studying.png')

function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.Container}>

            <View>
                <Title style={styles.Welcome}>Bem-vindo (a)!</Title>
            </View>

            <ScrollView>
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
                        <Title style={styles.Title}>Loja</Title>
                        <Paragraph>Acesse nossa loja e escolha as melhores ofertas para você!</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate('Loja')}>
                            Acessar
                        </Button>
                    </Card.Actions>
                </Card>
            </ScrollView>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.BottomContainer}>

                <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
                    <Card style={styles.BottomCards}>
                        <Card.Content>
                            <IconButton style={styles.Icons} icon='phone-check' color={'#fff'} size={80} />
                            <Title style={styles.BottomTitle}>Contato</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Exames')}>
                    <Card style={styles.BottomCards}>
                        <Card.Content>
                            <IconButton style={styles.Icons} icon='book' size={80} color={'#fff'} />
                            <Title style={styles.BottomTitle}>Exames</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cursos')}>
                    <Card style={styles.BottomCards}>
                        <Card.Content>
                            <IconButton style={styles.Icons} icon='school' size={80} color={'#fff'} />
                            <Title style={styles.BottomTitle}>Cursos</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    Container: {
        backgroundColor: '#000075',
        flex: 1,
    },

    Welcome: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: '5%'
    },

    Title: {
        textAlign: 'center'
    },

    Paragraph: {
        textAlign: 'center',
        marginHorizontal: 5,
    },

    Card: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15,

    },

    BottomContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 25,
    },

    BottomCards: {
        width: 180,
        height: 180,
        marginHorizontal: 15,
        backgroundColor: '#ffa500'
    },

    BottomTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',

    },

    Icons: {
        alignSelf: 'center',

    }


})

export default Home;