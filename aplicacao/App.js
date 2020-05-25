
import React , {Fragment , useState , useEffect} from 'react';

import { 
  FlatList, 
  } from 'react-native';

  import { Cabecalho } from './src/components/cabecalho';
  import { Foto } from './src/components/foto';
  import { Comentarios } from "./src/components/comentarios";
  import  lerFotos  from './src/api/feed';

const App: () => React$Node = () => {
  const [fotos , setFotos] = useState([])
  useEffect(() => {
    
    lerFotos(setFotos); 

  }, [])
  return (
    <Fragment>
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
            />
            <Comentarios comentarios = {item.comentarios}/>
    
        </Fragment>}

      />
      
    </Fragment>
    
  );
};


export default App;
