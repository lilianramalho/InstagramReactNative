import {
  Dimensions,
  StyleSheet,
  } from 'react-native';

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    
  imagem:{
    width: largura,
    height: largura,
  },

  iconesContainer:{
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },

  like:{
    width: 30,
    height: 30, 
    marginLeft: 10,
  },

  comment:{
    width: 30,
    height: 30, 
    marginLeft: 10,
  },

  send:{
    width: 30,
    height: 30, 
    marginLeft: 10,

  },

  descricaoFoto:{
    marginLeft: 5,
  },

  qntlikes:{
    marginLeft: 10,
    fontWeight: "bold",
  },

  legenda:{
    flexDirection: "row",
    paddingLeft: 10,
  },

  userLegenda:{
    fontWeight: "bold",

  },

  btnBookmark:{
    flex: 1,
    justifyContent: "flex-start",
  },

  bookmark:{
    width: 30,
    height: 30,
  }

})

export default estilo;