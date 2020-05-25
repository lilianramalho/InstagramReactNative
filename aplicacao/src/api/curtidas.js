const getImgLike = (curtiu) => {
  if (curtiu) {
    return require("../../res/img/heart_s.png");
  }else{
    return require("../../res/img/heart.png");
  }
}


  const curtirFoto = (curtiu , qntlikes) => {
    let qnt = qntlikes;
    if (curtiu) {
      qnt--;
    } else {
      qnt++;
    }

    return [!curtiu , qnt];
  }

export  {getImgLike , curtirFoto}
