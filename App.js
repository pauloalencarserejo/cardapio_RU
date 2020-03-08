import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { render } from 'react-dom';
import DiaDaSemana from './src/diaDaSemana'

function Segunda(){
  return (
    <DiaDaSemana almocoPrincipal='Assado de Panela Cubos de Frango ao Molho'
                  almocoVegetariano='Fricassê de Grão de Bico'
                  almocoSalada='Acelga, Beterraba, Tomate e Abacaxi'
                  almocoGuarnicao='Cuscuz'
                  almocoAcompanhamento='Arroz Branco Arroz Integral Feijão de Corda'
                  almocoSuco='Cajá'
                  almocoSobremesa='Doce'
                 
                  jantaPrincipal='Carne Trinchada  Filé de Frango Grelhado'
                  jantaVegetariano='Almôngedas de Soja'
                  jantaSalada='Acelga, Alface, Cenoura, Pepino e Milho'
                  jantaGuarnicao='Macarrão Espaguete'
                  jantaAcompanhamento='Arroz Branco Arroz Integral Feijão de Corda'
                  jantaSuco='Manga'
                  jantaSobremesa='Laranja Doce'
    />
  ) ;
}
function Terca(){
  return (
    <ImageBackground source={require('./assets/img/papel2.jpg')} style={styles.backgroundImage}>
      <View>
        <Text>Terca</Text>
        <Text>Almoço</Text>
        <Text>Principal</Text>
        <Text>Paçoca de Carne  Filé de Frango Dourado</Text>
        <Text>Vegetariano</Text>
        <Text>Torta de Vegetais</Text>
        <Text>Salada</Text>
        <Text>Alface, R. Branco, Tomate e Maçã</Text>
        <Text>Guarnição</Text>
        <Text>Purê</Text>
        <Text>Acompanhamentos</Text>
        <Text>Baião Arroz Integral Feijão de Corda</Text>
        <Text>Suco</Text>
        <Text>Manga</Text>
        <Text>Sobremesa</Text>
        <Text>Banana Doce</Text>

        <Text>Jantar</Text>
        <Text>Principal</Text>
        <Text>Cubos Suíno na Chapa   Frango Crocante</Text>
        <Text>Vegetariano</Text>
        <Text>Bife de Lentilha ao M. Tomate</Text>
        <Text>Salada</Text>
        <Text>Acelga, Repolho Branco, Beterraba e Cenoura</Text>
        <Text>Guarnição</Text>
        <Text>Macarrão Parafuso</Text>
        <Text>Acompanhamentos</Text>
        <Text>Arroz com Cenoura Arroz Integral Feijão Carioca</Text>
        <Text>Suco</Text>
        <Text>Acerola</Text>
        <Text>Sobremesa</Text>
        <Text>Maçã Doce</Text>
      </View>
    </ImageBackground>
  ) ;
}
function Quarta(){
  return (
    <ImageBackground source={require('./assets/img/papel3.jpg')} style={styles.backgroundImage}>
      <View>
        <Text>Quarta</Text>
        <Text>Almoço</Text>
        <Text>Principal</Text>
        <Text>Feijoada Filé de Frango Grelhado</Text>
        <Text>Vegetariano</Text>
        <Text>Omelete de Legumes</Text>
        <Text>Salada</Text>
        <Text>Acelga, R. Roxo, Tomate e Passas</Text>
        <Text>Guarnição</Text>
        <Text>Farofa</Text>
        <Text>Acompanhamentos</Text>
        <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
        <Text>Suco</Text>
        <Text>Acerola</Text>
        <Text>Sobremesa</Text>
        <Text>Laranja Doce</Text>
    
        <Text>Jantar</Text>
        <Text>Principal</Text>
        <Text>Bife ao Molho Frango Xadrez</Text>
        <Text>Vegetariano</Text>
        <Text>Lasanha de Brócolis</Text>
        <Text>Salada</Text>
        <Text>Acelga, R. Roxo, e Tomate</Text>
        <Text>Guarnição</Text>
        <Text>Cuscuz</Text>
        <Text>Acompanhamentos</Text>
        <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
        <Text>Suco</Text>
        <Text>Goiaba</Text>
        <Text>Sobremesa</Text>
        <Text>Abacaxi Doce</Text>
      </View>
    </ImageBackground>
    ) ;
}
function Quinta(){
  return (
    <ImageBackground source={require('./assets/img/papel4.jpg')} style={styles.backgroundImage}>
      <View>
        <Text>Quinta</Text>
        <Text>Almoço</Text>
        <Text>Principal</Text>
        <Text>Cozido Bovino Filé de Frango ao Molho de Calabresa</Text>
        <Text>Vegetariano</Text>
        <Text>Jardineira de Lentilha</Text>
        <Text>Salada</Text>
        <Text>Acelga, R. Branco, Alface e Melão</Text>
        <Text>Guarnição</Text>
        <Text>Macarrão Espaguete</Text>
        <Text>Acompanhamentos</Text>
        <Text>Arroz Branco Arroz Integral Feijão Carioca</Text>
        <Text>Suco</Text>
        <Text>Goiaba</Text>
        <Text>Sobremesa</Text>
        <Text>Maçã Doce</Text>
    
        <Text>Jantar</Text>
        <Text>Principal</Text>
        <Text>Picadinho de Carne Canja</Text>
        <Text>Vegetariano</Text>
        <Text>Escondidinho de Soja</Text>
        <Text>Salada</Text>
        <Text>Acelga, R. Branco, Beterraba, Pepino e Ervilha</Text>
        <Text>Guarnição</Text>
        <Text>Macarrão Parafuso</Text>
        <Text>Acompanhamentos</Text>
        <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
        <Text>Suco</Text>
        <Text>Maracujá</Text>
        <Text>Sobremesa</Text>
        <Text>Tangerina Doce</Text>
      </View>
    </ImageBackground>
  ) ;
}
function Sexta(){
  return (
    <ImageBackground source={require('./assets/img/papel5.jpg')} style={styles.backgroundImage}>
      <View>
        <Text style={tex.bigBlue}>Sexta</Text>
        <Text style={tex.white}>Almoço</Text>
        <Text>Principal</Text>
        <Text>Bife na Manteiga Filé de Frango ao Molho</Text>
        <Text>Vegetariano</Text>
        <Text>Yakissoba Vegetariano Ervil</Text>
        <Text>Salada</Text>
        <Text>Acelga, Beterraba, R. Branco e Tomate</Text>
        <Text>Guarnição</Text>
        <Text>Cuscuz</Text>
        <Text>Acompanhamentos</Text>
        <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
        <Text>Suco</Text>
        <Text>Maracujá</Text>
        <Text>Sobremesa</Text>
        <Text>Melancia Doce</Text>
    
        <Text>Jantar</Text>
        <Text>Principal</Text>
        <Text>Bife ao Molho de Tomate Panqueca de Frango</Text>
        <Text>Vegetariano</Text>
        <Text>Jardineira de Ervilha</Text>
        <Text>Salada</Text>
        <Text>Acelga, Cenoura, R. Roxo e Manga</Text>
        <Text>Guarnição</Text>
        <Text>Farofa</Text>
        <Text>Acompanhamentos</Text>
        <Text>Arroz Branco Arroz Integral Feijão Carioca</Text>
        <Text>Suco</Text>
        <Text>Cajá</Text>
        <Text>Sobremesa</Text>
        <Text>Melão Japonês Doce</Text>
      </View>
    </ImageBackground>
  ) ;
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#7159c1' }}>
      <Tab.Screen name="Seg" component={Segunda} />
      <Tab.Screen name="Ter" component={Terca} />
      <Tab.Screen name="Qua" component={Quarta} />
      <Tab.Screen name="Qui" component={Quinta} />
      <Tab.Screen name="Sex" component={Sexta} />
    </Tab.Navigator>
  );
}

export default function App() {
  
    return (
      
        <NavigationContainer opacity={0.5} >
          <MyTabs opacity={0.5}/>
        </NavigationContainer >
      
    );
  
}
var tex = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  white: {
    color: '#FFFFFF',
    
  },
});


var menu = StyleSheet.create({
  View:{
    padding: '5%',
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'center'
  },
  
  vazio:{
    padding: '0.1%',
  },
  botao:{
    backgroundColor:'skyblue',
  }, 
  titulos:{
    backgroundColor: 'yellow',
    height: 45,
    borderWidth: 50,
  }
});

var menuInferior = StyleSheet.create({
  boton:{ 
    backgroundColor: '#c8a2c8',
  }
});

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