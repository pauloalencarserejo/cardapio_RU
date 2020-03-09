import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function diaDaSemana(props) {

    return (
        <ImageBackground source={require('./../assets/img/fundo6.jpg')} style={styles.backgroundImage}  >
            <ScrollView style={styles.conteiner}>
                <View style={styles.coluna}>
                    <Text style={styles.diaDaSemana}>Segunda</Text>
                    <View >
                        <View>
                        <Text>Almoço</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Principal: </Text>
                            <Text>{props.almocoPrincipal}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Vegetariano: </Text>
                            <Text>{props.almocoVegetariano}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Salada: </Text>
                            <Text>{props.almocoSalada}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Guarnição: </Text>
                            <Text>{props.almocoGuarnicao}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Acompanhamentos: </Text>
                            <Text>{props.almocoAcompanhamento}</Text>
                        </View>
                        <View style={styles.item}>
                            <View>
                            <Text>Suco: </Text>
                            <Text>{props.almocoSuco}</Text>
                            </View>
                            <View>
                            <Text>Sobremesa: </Text>
                            <Text>{props.almocoSobremesa}</Text>
                        </View>
                        </View>

                    </View>

                    <View>
                        <View>
                        <Text>Jantar</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Principal: </Text>
                            <Text>{props.jantaPrincipal}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Vegetariano: </Text>
                            <Text>{props.jantaVegetariano}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Salada: </Text>
                            <Text>{props.jantaSalada}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Guarnição: </Text>
                            <Text>{props.jantaGuarnicao}</Text>
                        </View>
                        <View style={styles.linha}>
                            <Text>Acompanhamentos: </Text>
                            <Text>{props.jantaAcompanhamento}</Text>
                        </View>
                        <View style={styles.item}>
                            <View>
                            <Text>Suco: </Text>
                            <Text>{props.jantaSuco}</Text>
                            </View>
                            <View>
                            <Text>Sobremesa: </Text>
                            <Text>{props.jantaSobremesa}</Text>
                        </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );

}

var styles = StyleSheet.create({
    cab:{
       
    },
    backgroundImage: {
        resizeMode: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    conteiner: {
        padding: '10%',
    },
    coluna: {
        paddingRight:'10%',
        width:'86%',
        
    },
    item:{
            flexDirection:'row',
            justifyContent:'space-evenly',
    },
    diaDaSemana: {
        textAlign: 'center',
        color: '#DF0101',
        fontSize: 15,
    },
    linha: {
        flexDirection: 'row',
        paddingRight:'25%',
        width:'90%',
        

    }
});