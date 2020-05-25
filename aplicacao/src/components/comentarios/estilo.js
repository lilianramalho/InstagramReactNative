import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

    containerCampoComentario: {
        flexDirection: "row",
        alignItems: "center",
    },

    btnEnviar:{
        marginRight: 10,
    },

    textoBtn:{
        color: "#0984e3",
        fontWeight: "bold",
    },

    campo:{
        flex: 1,
    },

    comentarios:{
        flexDirection: "row",
        paddingLeft: 10,
    },

    userName:{
        fontWeight: "bold",
    },

    icone:{
        width: 35,
        height: 35,
        borderRadius: 50,
        marginRight: 5,
        marginLeft: 10,
    }

})

export default estilo;