import React , {Fragment , useState} from 'react';

import {
  Image, 
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  View
  } from 'react-native';

import estilo from './estilo'

let campoInput;
let mudaTexto = "";

const Comentarios = ({comentarios , adicionarComentarios}) =>{
    const [comment, setComment] = useState(comentarios);
    const comentar = () => {
        campoInput.clear();
        const novoComentario = adicionarComentarios(
            mudaTexto,
            "liliaramalho"
        ) 
        setComment([...comment , novoComentario]);
    }

    return(
        <Fragment>

         <FlatList
          data={comment}
          keyExtractor = {(item , index) => index.toString()}
          renderItem={({item}) =>
            <View style = {estilo.comentarios}>
                <Text style = {estilo.userName}> {item.userName} </Text>
                <Text style = {estilo.comentario}> {item.text} </Text>
            </View>

          }
        />

        <View style = {estilo.containerCampoComentario}>
            <Image
                source = {require("../../../res/img/icone.jpeg")}
                style = {estilo.icone}
            />
            <TextInput 
            ref = {textInput => campoInput = textInput}
            onChangeText = {texto => mudaTexto = texto }
            placeholder={"Deixe seu comentário"}
            style = {estilo.campo}
            />
            <TouchableOpacity style = {estilo.btnEnviar} onPress = {comentar}>
                <Text style = {estilo.textoBtn}> {"Publicar"} </Text>
            </TouchableOpacity>
        </View>
    
        </Fragment>

    ); 
};

export default Comentarios;