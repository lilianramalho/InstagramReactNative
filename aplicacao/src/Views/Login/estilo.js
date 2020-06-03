import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;
let larguraTela = largura * 0.8;

const estilo = StyleSheet.create({

    container: {
        height: altura,
        width: largura,
        justifyContent: 'center',
    },
  
    containerCampos: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        width: larguraTela,
        borderWidth: 5,
    },

    imagem:{
        height: 160,
        width: 160,
    },

    containerImagem:{
        justifyContent: 'center',
        alignItems: 'center',
    },

   

})

export default estilo;