
import React , {Fragment , useState , useEffect} from 'react';

import { 
  FlatList, 
  StatusBar
  } from 'react-native';

  import { Cabecalho } from '../../components/cabecalho';
  import { Foto } from '../../components/foto';
  import { Comentarios } from "../../components/comentarios";
  import  lerFotos  from '../../api/feed';
  import { curtirFoto , getImgLike } from "../../api/curtidas";
  import adicionarComentarios  from "../../api/comentarios";


const Feed = () => {
  const [fotos , setFotos] = useState([])
  useEffect(() => {
    
    lerFotos(setFotos); 

  }, [])

  return (
    <Fragment>
      <StatusBar
        backgroundColor = "white"
        barStyle = "dark-content"
      />
      <FlatList
          data={fotos}
          keyExtractor = {(item) => item.id.toString()}
          renderItem={({item}) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName}
            urlImage = {item.userURL}/>
            <Foto
              urlFoto = {item.url}
              descricaoFoto = {item.description}
              likes = {item.likes}
              userName = {item.userName}
              getImgLike = {getImgLike}
              curtirFoto = {curtirFoto}
            />
            <Comentarios comentarios = {item.comentarios} adicionarComentarios = {adicionarComentarios}/>
    
        </Fragment>}

      />
      
    </Fragment>
    
  );
};

Feed.navigationOptions = ({ navigation }) => {
  const opcoes ={
      title : navigation.getParam("nome")
  }
  return opcoes;
}


export default Feed;
