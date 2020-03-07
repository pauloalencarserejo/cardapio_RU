import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { render } from 'react-dom';
import {menu} from '../styles/Styles'

export default class Menu extends React.Component{
    Menu({ navigation }) {
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
    Segunda(){
        return (
          <ImageBackground source={require('../assets/img/papel.jpg')} style={style}>
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
            </View>
          </ImageBackground>
        ) ;
      }
      Terca(){
        return (
          <ImageBackground source={require('../assets/img/papel2.jpg')} style={{with: '100%', height: '100%'}}>
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
      Quarta(){
        return (
          <ImageBackground source={require('../assets/img/papel3.jpg')} style={{with: '100%', height: '100%'}}>
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
      Quinta(){
        return (
          <ImageBackground source={require('../assets/img/papel4.jpg')} style={{with: '100%', height: '100%'}}>
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
      Sexta(){
        return (
          <ImageBackground source={require('../assets/img/papel5.jpg')} style={{with: '100%', height: '100%'}}>
            <View>
              <Text>Sexta</Text>
              <Text>Almoço</Text>
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
      state = { 
          Tab : createBottomTabNavigator()
      }
      MyTabs() {
        return (
          <Tab.Navigator barStyle={{ backgroundColor: '#7159c1' }}>
            <Tab.Screen name="Seg" component={this.Segunda} />
            <Tab.Screen name="Ter" component={this.Terca} />
            <Tab.Screen name="Qua" component={this.Quarta} />
            <Tab.Screen name="Qui" component={this.Quinta} />
            <Tab.Screen name="Sex" component={this.Sexta} />
          </Tab.Navigator>
        );
      }
    render(){
        return(
            <NavigationContainer opacity={0.5} >
                <View>{this.MyTabs}</View>
            </NavigationContainer >
        )
    }
}