const lerFotos = async(callback) => {
     const fotosHTTP = await  fetch("http://192.168.15.9:3030/feed");
     const fotosJSON = await fotosHTTP.json();
     callback(fotosJSON);
    }


export default lerFotos;