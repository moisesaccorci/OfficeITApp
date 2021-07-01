import React from 'react';
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import { IconButton } from 'react-native-paper';

const logo = require('../../../assets/icon.png')
const kid = require('../../../assets/kid-studying.png')

function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.Welcome}>Bem-vindo(a)</Text>
                <Image style={{
                    width: width,
                    height: height / 15,
                    left: '50%'
                }} source={logo} resizeMode={'contain'} />
            </View>

            <ScrollView style={styles.FirstScrollView}>
                <TouchableOpacity onPress={() => navigation.navigate('Plataforma EAD')}>
                    <Card style={styles.Card}>
                        <Card.Content>
                            <Title style={styles.Title}>Plataforma EAD</Title>
                            <IconButton style={styles.Icons} icon='notebook' color={'#fff'} size={50} />
                            <Paragraph style={styles.Paragraph}>Acesse nossa plataforma EAD diretamente do nosso aplicativo para celulares.</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Loja')}>
                    <Card style={styles.Card}>
                        <Card.Content>
                            <Title style={styles.Title}>Loja</Title>
                            <IconButton style={styles.Icons} icon='store' color={'#fff'} size={50} />
                            <Paragraph style={styles.Paragraph}>Acesse nossa loja e escolha as melhores ofertas para você!</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => alert('Opa! Nosso blog ainda está em construção!')}>
                    <Card style={styles.Card}>
                        <Card.Content>
                            <Title style={styles.Title}>Blog</Title>
                            <IconButton style={styles.Icons} icon='post' color={'#fff'} size={50} />
                            <Paragraph style={styles.Paragraph}>As melhores notícias e as melhores explicações para você entender
                                                                de vez sobre o universo da governança em tecnologia!</Paragraph>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

            </ScrollView>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.BottomContainer}>

                <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
                    <Card style={styles.BottomCards}>
                        <Card.Content>
                            <IconButton style={styles.Icons} icon='phone-check' color={'#fff'} size={25} />
                            <Title style={styles.BottomTitle}>Contato</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Exames')}>
                    <Card style={styles.BottomCards}>
                        <Card.Content>
                            <IconButton style={styles.Icons} icon='book' size={25} color={'#fff'} />
                            <Title style={styles.BottomTitle}>Exames</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cursos')}>
                    <Card style={styles.BottomCards}>
                        <Card.Content>
                            <IconButton style={styles.Icons} icon='school' size={25} color={'#fff'} />
                            <Title style={styles.BottomTitle}>Cursos</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Ajuda')}>
                    <Card style={styles.BottomCards}>
                        <Card.Content>
                            <IconButton style={styles.Icons} icon='help' size={25} color={'#fff'} />
                            <Title style={styles.BottomTitle}>Ajuda</Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    Container: {
        backgroundColor: '#0269A4',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: StatusBar.currentHeight,

    },

    Header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10
    },

    Welcome: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%',
        fontSize: 16

    },

    Title: {
        textAlign: 'left',
        color: '#fff',
        fontWeight: 'bold',
    },

    Paragraph: {
        textAlign: 'center',
        marginHorizontal: 5,
        color: '#fff',
        fontSize: 16,
    },

    Card: {
        width: '90%',
        minHeight: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: '#ffa500'

    },

    FirstScrollView: {
        height: '60%'
    },

    BottomContainer: {
        paddingTop: 25,
    },

    BottomCards: {
        width: width,
        height: height,
        marginHorizontal: 10,
        backgroundColor: '#ffa500',
        justifyContent: 'space-between'
    },

    BottomTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 12,

    },

    Icons: {
        alignSelf: 'center',

    }


})

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Home;