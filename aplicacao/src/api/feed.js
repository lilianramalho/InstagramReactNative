const lerFotos = async(callback) => {
     const fotosHTTP = await  fetch("http://192.168.15.10:3030/feed");
     const fotosJSON = await fotosHTTP.json();
     callback(fotosJSON);
    }


export default lerFotos;