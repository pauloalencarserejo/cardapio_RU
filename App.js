import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from 'react-native-gesture-handler';


function Menu({ navigation }) {
  return (
    <View style={menu.View}>
      <Button title='Segunda' style={menu.botao}onPress={() => navigation.navigate('Segunda')}/>
      
      <Button title='Terça' style={menu.botao} onPress={() => navigation.navigate('Terca')}/>

      <Button title='Quarta' style={menu.botao} onPress={() => navigation.navigate('Quarta')}/>
      
      <Button title='Quinta' style={menu.botao} onPress={() => navigation.navigate('Quinta')} />
      
      <Button title='Sexta' style={menu.botao} onPress={() => navigation.navigate('Sexta')} />
    </View>
  );
}
function Segunda(){
  return (
  <View>
    <Text>Segunda</Text>
    <Text>Almoço</Text>
    <Text>Principal</Text>
    <Text>Assado de Panela Cubos de Frango ao Molho</Text>
    <Text>Vegetariano</Text>
    <Text>Fricassê de Grão de Bico</Text>
    <Text>Salada</Text>
    <Text>Acelga, Beterraba, Tomate e Abacaxi</Text>
    <Text>Guarnição</Text>
    <Text>Cuscuz</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Cajá</Text>
    <Text>Sobremesa</Text>
    <Text>Doce</Text>

    <Text>Jantar</Text>
    <Text>Principal</Text>
    <Text>Carne Trinchada  Filé de Frango Grelhado</Text>
    <Text>Vegetariano</Text>
    <Text>Almôngedas de Soja</Text>
    <Text>Salada</Text>
    <Text>Acelga, Alface, Cenoura, Pepino e Milho</Text>
    <Text>Guarnição</Text>
    <Text>Macarrão Espaguete</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Manga</Text>
    <Text>Sobremesa</Text>
    <Text>Laranja Doce</Text>
  </View>) ;
}
function Terca(){
  return (
  <View>
    <Text>Terca</Text>
    <Text>Almoço</Text>
    <Text>Principal</Text>
    <Text>Assado de Panela Cubos de Frango ao Molho</Text>
    <Text>Vegetariano</Text>
    <Text>Fricassê de Grão de Bico</Text>
    <Text>Salada</Text>
    <Text>Acelga, Beterraba, Tomate e Abacaxi</Text>
    <Text>Guarnição</Text>
    <Text>Cuscuz</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Cajá</Text>
    <Text>Sobremesa</Text>
    <Text>Doce</Text>

    <Text>Jantar</Text>
    <Text>Principal</Text>
    <Text>Carne Trinchada  Filé de Frango Grelhado</Text>
    <Text>Vegetariano</Text>
    <Text>Almôngedas de Soja</Text>
    <Text>Salada</Text>
    <Text>Acelga, Alface, Cenoura, Pepino e Milho</Text>
    <Text>Guarnição</Text>
    <Text>Macarrão Espaguete</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Manga</Text>
    <Text>Sobremesa</Text>
    <Text>Laranja Doce</Text>
  </View>) ;
}
function Quarta(){
  return (
  <View>
    <Text>Quarta</Text>
    <Text>Almoço</Text>
    <Text>Principal</Text>
    <Text>Assado de Panela Cubos de Frango ao Molho</Text>
    <Text>Vegetariano</Text>
    <Text>Fricassê de Grão de Bico</Text>
    <Text>Salada</Text>
    <Text>Acelga, Beterraba, Tomate e Abacaxi</Text>
    <Text>Guarnição</Text>
    <Text>Cuscuz</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Cajá</Text>
    <Text>Sobremesa</Text>
    <Text>Doce</Text>

    <Text>Jantar</Text>
    <Text>Principal</Text>
    <Text>Carne Trinchada  Filé de Frango Grelhado</Text>
    <Text>Vegetariano</Text>
    <Text>Almôngedas de Soja</Text>
    <Text>Salada</Text>
    <Text>Acelga, Alface, Cenoura, Pepino e Milho</Text>
    <Text>Guarnição</Text>
    <Text>Macarrão Espaguete</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Manga</Text>
    <Text>Sobremesa</Text>
    <Text>Laranja Doce</Text>
  </View>) ;
}
function Quinta(){
  return (
  <View>
    <Text>Quinta</Text>
    <Text>Almoço</Text>
    <Text>Principal</Text>
    <Text>Assado de Panela Cubos de Frango ao Molho</Text>
    <Text>Vegetariano</Text>
    <Text>Fricassê de Grão de Bico</Text>
    <Text>Salada</Text>
    <Text>Acelga, Beterraba, Tomate e Abacaxi</Text>
    <Text>Guarnição</Text>
    <Text>Cuscuz</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Cajá</Text>
    <Text>Sobremesa</Text>
    <Text>Doce</Text>

    <Text>Jantar</Text>
    <Text>Principal</Text>
    <Text>Carne Trinchada  Filé de Frango Grelhado</Text>
    <Text>Vegetariano</Text>
    <Text>Almôngedas de Soja</Text>
    <Text>Salada</Text>
    <Text>Acelga, Alface, Cenoura, Pepino e Milho</Text>
    <Text>Guarnição</Text>
    <Text>Macarrão Espaguete</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Manga</Text>
    <Text>Sobremesa</Text>
    <Text>Laranja Doce</Text>
  </View>) ;
}
function Sexta(){
  return (
  <View>
    <Text>Sexta</Text>
    <Text>Almoço</Text>
    <Text>Principal</Text>
    <Text>Assado de Panela Cubos de Frango ao Molho</Text>
    <Text>Vegetariano</Text>
    <Text>Fricassê de Grão de Bico</Text>
    <Text>Salada</Text>
    <Text>Acelga, Beterraba, Tomate e Abacaxi</Text>
    <Text>Guarnição</Text>
    <Text>Cuscuz</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Cajá</Text>
    <Text>Sobremesa</Text>
    <Text>Doce</Text>

    <Text>Jantar</Text>
    <Text>Principal</Text>
    <Text>Carne Trinchada  Filé de Frango Grelhado</Text>
    <Text>Vegetariano</Text>
    <Text>Almôngedas de Soja</Text>
    <Text>Salada</Text>
    <Text>Acelga, Alface, Cenoura, Pepino e Milho</Text>
    <Text>Guarnição</Text>
    <Text>Macarrão Espaguete</Text>
    <Text>Acompanhamentos</Text>
    <Text>Arroz Branco Arroz Integral Feijão de Corda</Text>
    <Text>Suco</Text>
    <Text>Manga</Text>
    <Text>Sobremesa</Text>
    <Text>Laranja Doce</Text>
  </View>) ;
}

const Stack = createStackNavigator();

function App() {
  const ref = React.useRef(null);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Segunda" component={Segunda} />
        <Stack.Screen name="Terca" component={Terca} />
        <Stack.Screen name="Quarta" component={Quarta} />
        <Stack.Screen name="Quinta" component={Quinta} />
        <Stack.Screen name="Sexta" component={Sexta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
    backgroundColor:'red',
  }
  
});