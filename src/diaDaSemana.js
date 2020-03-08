import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground,ScrollView  } from 'react-native';

export default function diaDaSemana(props) {

    return (
        <ImageBackground source={require('./../assets/img/fundo6.jpg')} style={styles.backgroundImage}  >
            <View >
                <ScrollView>
                <View>
                    <Text>Segunda</Text>
                    <View>
                        <Text>Almoço</Text>
                        <View>
                            <Text>Principal</Text>
                            <Text>{props.almocoPrincipal}</Text>
                            <Text>Vegetariano</Text>
                            <Text>{props.almocoVegetariano}</Text>
                            <Text>Salada</Text>
                            <Text>{props.almocoSalada}</Text>
                            <Text>Guarnição</Text>
                            <Text>{props.almocoGuarnicao}</Text>
                            <Text>Acompanhamentos</Text>
                            <Text>{props.almocoAcompanhamento}</Text>
                            <Text>Suco</Text>
                            <Text>{props.almocoSuco}</Text>
                            <Text>Sobremesa</Text>
                            <Text>{props.almocoSobremesa}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Jantar</Text>
                        <View>
                        <Text>Principal</Text>
                            <Text>{props.jantaPrincipal}</Text>
                            <Text>Vegetariano</Text>
                            <Text>{props.jantaVegetariano}</Text>
                            <Text>Salada</Text>
                            <Text>{props.jantaSalada}</Text>
                            <Text>Guarnição</Text>
                            <Text>{props.jantaGuarnicao}</Text>
                            <Text>Acompanhamentos</Text>
                            <Text>{props.jantaAcompanhamento}</Text>
                            <Text>Suco</Text>
                            <Text>{props.jantaSuco}</Text>
                            <Text>Sobremesa</Text>
                            <Text>{props.jantaSobremesa}</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );

}

var styles = StyleSheet.create({
    backgroundImage: {
      resizeMode: 'center',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',  
    },
  });