

import React , {Fragment , useState} from 'react';

import {
  Image, 
  Text,
  TouchableOpacity,
  View
  } from 'react-native';

  
import estilo from './estilo'
import { curtirFoto , getImgLike } from "../../api/curtidas";


const Foto = ({urlFoto , descricaoFoto , likes , userName}) => {
  const [curtiu , setCurtiu] = useState(false);
  const [qntlikes, setqntlikes] = useState(likes);

  const clicouCurtirFoto = () => {
    const [novoEstCurtir, qnt] = curtirFoto(curtiu, qntlikes);
    curtirFoto(curtiu , qntlikes);
    setqntlikes(qnt);
    setCurtiu(!curtiu);
  }

  return (
        <Fragment>

            <Image 
            source={ {uri: urlFoto} }
            style={estilo.imagem}
            /> 
            
            <View style = {estilo.iconesContainer}>
              <TouchableOpacity onPress = {clicouCurtirFoto}>
              <Image
                source = {getImgLike(curtiu)}
                style = {estilo.like}
              />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source = {require("../../../res/img/comment.png")}
                  style = {estilo.comment}
                />
              </TouchableOpacity>
               <TouchableOpacity>
                <Image
                  source = {require("../../../res/img/send.png")}
                  style = {estilo.send}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity style = {estilo.btnBookmark}>
                <Image
                  source = {require("../../../res/img/bookmark.png")}
                  style = {estilo.bookmark}
                />
              </TouchableOpacity> */}
            </View>
            <View style = {estilo.legenda}>
              <Text style = {estilo.userLegenda}>{userName}</Text>
              <Text style = {estilo.descricaoFoto}> {descricaoFoto} </Text>
            </View>
            <Text style = {estilo.qntlikes}> {qntlikes} curtidas </Text>


        </Fragment>
    
  );
};




export default Foto;
