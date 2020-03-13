import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { render } from 'react-dom';
import DiaDaSemana from './src/diaDaSemana'
import diaDaSemana from './src/diaDaSemana';

function Segunda(){
  return (
    <DiaDaSemana 
      diaSemana='Segunda'
      almocoPrincipal='Assado de Panela Cubos de Frango ao Molho'
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
    <DiaDaSemana
      diaSemana='Terça'
      almocoPrincipal='Paçoca de Carne  Filé de Frango Dourado'
      almocoVegetariano='Torta de Vegetais'
      almocoSalada='Alface, R. Branco, Tomate e Maçã'
      almocoGuarnicao='Purê'
      almocoAcompanhamento='Baião Arroz Integral Feijão de Corda'
      almocoSuco='Manga'
      almocoSobremesa='Banana Doce'
    
      jantaPrincipal='Cubos Suíno na Chapa   Frango Crocante'
      jantaVegetariano='Bife de Lentilha ao M. Tomate'
      jantaSalada='Acelga, Repolho Branco, Beterraba e Cenoura'
      jantaGuarnicao='Macarrão Parafuso'
      jantaAcompanhamento='Arroz com Cenoura Arroz Integral Feijão Carioca'
      jantaSuco='Acerola'
      jantaSobremesa='Maçã Doce'
    />
  ) ;
}
function Quarta(){
  return (
    <DiaDaSemana
      diaSemana='Quarta'
      almocoPrincipal='Feijoada Filé de Frango Grelhado'
      almocoVegetariano='Omelete de Legumes'
      almocoSalada='Acelga, R. Roxo, Tomate e Passas'
      almocoGuarnicao='Farofa'
      almocoAcompanhamento='Arroz Branco Arroz Integral Feijão de Corda'
      almocoSuco='Acerola'
      almocoSobremesa='Laranja Doce'
    
      jantaPrincipal='Bife ao Molho Frango Xadrez'
      jantaVegetariano='Lasanha de Brócolis'
      jantaSalada='Acelga, R. Roxo, e Tomate'
      jantaGuarnicao='Cuscuz'
      jantaAcompanhamento='Arroz Branco Arroz Integral Feijão de Corda'
      jantaSuco='Goiaba'
      jantaSobremesa='Abacaxi Doce'
    />
    ) ;
}
function Quinta(){
  return (
    <DiaDaSemana
      diaSemana='Quinta'
      almocoPrincipal='Cozido Bovino Filé de Frango ao Molho de Calabresa'
      almocoVegetariano='Jardineira de Lentilha'
      almocoSalada='Acelga, R. Branco, Alface e Melão'
      almocoGuarnicao='Macarrão Espaguete'
      almocoAcompanhamento='Arroz Branco Arroz Integral Feijão Carioca'
      almocoSuco='Goiaba'
      almocoSobremesa='Maçã Doce'
    
      jantaPrincipal='Picadinho de Carne Canja'
      jantaVegetariano='Escondidinho de Soja'
      jantaSalada='Acelga, R. Branco, Beterraba, Pepino e Ervilha'
      jantaGuarnicao='Macarrão Parafuso'
      jantaAcompanhamento='Arroz Branco Arroz Integral Feijão de Corda'
      jantaSuco='Maracujá'
      jantaSobremesa='Tangerina Doce'
    />  
  ) ;
}
function Sexta(){
  return (
    <DiaDaSemana
    diaSemana='Sexta'
    almocoPrincipal='Bife na Manteiga Filé de Frango ao Molho'
    almocoVegetariano='Yakissoba Vegetariano Ervil'
    almocoSalada='Acelga, Beterraba, R. Branco e Tomate'
    almocoGuarnicao='Cuscuz'
    almocoAcompanhamento='Arroz Branco Arroz Integral Feijão de Corda'
    almocoSuco='Maracujá'
    almocoSobremesa='Melancia Doce'
  
    jantaPrincipal='Bife ao Molho de Tomate Panqueca de Frango'
    jantaVegetariano='Jardineira de Ervilha'
    jantaSalada='Acelga, Cenoura, R. Roxo e Mangaa'
    jantaGuarnicao='Farofa'
    jantaAcompanhamento='Arroz Branco Arroz Integral Feijão Carioca'
    jantaSuco='Cajá'
    jantaSobremesa='Melão Japonês Doce'
  />    
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: 25,
  }
});