
import React , {Fragment , useState , useEffect} from 'react';

import { 
  StatusBar,
  TextInput,
  Button,
  Text,
  View,
  Image
  } from 'react-native';

import estilo from "./estilo";
import efetuarLogin from "../../api/login";
import AsyncStorage from "@react-native-community/async-storage";

const Login = ({navigation }) => {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const tentarLogar = async () =>{
    try {
      const token = await efetuarLogin(usuario , senha);
      AsyncStorage.setItem("instalura_token" , token);

      // ir para a tela de feed

      navigation.replace("Feed", {nome: usuario});


    } catch (error) {
      setMensagemErro(error.message);  
      
    }
  } 

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
          onChangeText = {texto => setUsuario(texto)}
        />
        <TextInput
          placeholder = "Senha"
          secureTextEntry = {true}
          onChangeText = {texto => setSenha(texto)}
        />
        <Text> {mensagemErro} </Text>
        </View>
        <Button
          title = "Entrar"
          style = {estilo.botao}
          onPress = {tentarLogar}
        />
      </View>
      
    </Fragment>
    
  );
};

Login.navigationOptions = () => {
  const opcoes ={
      title : "Login"
  }
  return opcoes;
}


export default Login;
