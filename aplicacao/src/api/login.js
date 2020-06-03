const efetuarLogin = async (usuario , senha) => {
    const cabecalhoHTTP = {
        method: "POST",

        body: JSON.stringify({
            userName: usuario,
            password: senha
        }),

        headers:{
            "Content-type"  : "application/json"
        }
    }
    const resposta = await  fetch("http://192.168.15.10:3030/users/login" ,
     cabecalhoHTTP);

     if (resposta.ok) {
         // consegui
         return resposta.headers.get("x-access-token");
     }else{
         throw new Error("Não foi possivel logar");
         
     }

     

}

export default efetuarLogin;