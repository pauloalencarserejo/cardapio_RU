import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Menu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Segunda"
        onPress={() => navigation.navigate('Segunda')}
      />
      <Button title="Terça" onPress={() => navigation.navigate('')} />
    </View>
  );
}
function Segunda(){
  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Segunda</Text>

</View>) ;
}

const Stack = createStackNavigator();

function App() {
  const ref = React.useRef(null);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Teste">
      
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Segunda" component={Segunda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
