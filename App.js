import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from 'react-native-gesture-handler';


function Menu({ navigation }) {
  return (
    <View style={menu.View}>
      <TouchableHighlight style={menu.botao} onPress={() => navigation.navigate('Segunda')}>
      <Text>Segunda</Text>
      </TouchableHighlight>
      <View style={menu.vazio}></View>
      <TouchableHighlight style={menu.botao} onPress={() => navigation.navigate('Terca')}>
          <Text>Terca</Text>
      </TouchableHighlight>
      
      <TouchableHighlight style={menu.botao} onPress={() => navigation.navigate('Quarta')}>
        <Text>Quarta</Text>
      </TouchableHighlight>
      
      <TouchableHighlight style={menu.botao} onPress={() => navigation.navigate('Quinta')} >
        <View>
        <Text>Quinta</Text>
        </View>
      </TouchableHighlight>
      
      <ButTouchableHighlightton style={menu.botao} onPress={() => navigation.navigate('Sexta')} >
        <Text>Sexta</Text>
      </ButTouchableHighlightton>
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
    backgroundColor:'skyblue',
    padding: '50%',
    borderColor:'black',
    borderWidth:2,
  }
  
});