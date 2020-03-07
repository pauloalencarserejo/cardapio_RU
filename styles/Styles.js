import React from 'react'
import {StyleSheet} from 'react-native'

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
var tex = StyleSheet.create({
  bigBlue: {
    fontFamily: 'Jovanny Lemonad',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  white: {
    fontFamily: 'Jovanny Lemonad',
    color: 'yellow',
    fontWeight: 'Bold',
    
  },
});

var menuInferior = StyleSheet.create({
  boton:{ 
    backgroundColor: '#c8a2c8',
  }
});

var styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'contain',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',  
  },
});