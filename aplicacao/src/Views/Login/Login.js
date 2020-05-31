
import React , {Fragment , useState , useEffect} from 'react';

import { 
  StatusBar,
  TextInput,
  Button,
  Text,
  View,
  Image
  } from 'react-native';

import estilo from "./estilo"

const Login = () => {
  return (
    <Fragment>
      <StatusBar
        backgroundColor = "white"
        barStyle = "dark-content"
      />
      <View style = {estilo.container}>
        <View style = {estilo.containerImagem}>
          <Image
          source = {require("../../../res/img/instagram.png")}
          style = {estilo.imagem} 
          />
        </View>
        
        <View style = {estilo.containerCampos}>
        <TextInput
          placeholder = "Usuario"
        />
           <TextInput
          placeholder = "Senha"
          secureTextEntry = {true}
        />
        </View>
        <Button
          title = "Entrar"
          style = {estilo.botao}
        />
      </View>
      
    </Fragment>
    
  );
};


export default Login;
