import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Menu({ navigation }) {
  return (
    <View style={menu.View}>
      <Button  title='Segunda' onPress={() => navigation.navigate('Segunda')}/>
      
      <Button title='Terca' onPress={() => navigation.navigate('Terca')}/>

      <Button title='Quarta' onPress={() => navigation.navigate('Quarta')}/>
      
      <Button title='Quinta' onPress={() => navigation.navigate('Quinta')} />
      
      <Button title='Sexta' style={menu.botao} onPress={() => navigation.navigate('Sexta')} />

      </View>
  );
}
function Segunda(){
  return (
  <View>
    <Text>Segunda</Text>
  </View>) ;
}
function Terca(){
  return (
  <View>
    <Text>Terca</Text>
  </View>) ;
}
function Quarta(){
  return (
  <View>
    <Text>Quarta</Text>
  </View>) ;
}
function Quinta(){
  return (
  <View>
    <Text>Quinta</Text>
  </View>) ;
}
function Sexta(){
  return (
  <View>
    <Text>Sexta</Text>
  </View>) ;
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
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
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
  }

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
  }
  
});