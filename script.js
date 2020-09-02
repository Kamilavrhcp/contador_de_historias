function carregar (){
  var msg = window.document.getElementById ("msg")
  var img = window.document.getElementById ("imagem")
  var data = new Date ()
  //var hora = data.getHours()
  var hora = 
  msg.innerHTML = `Agora são ${hora} hora`
  if (hora >= 0 && hora <12) {
      //Bom dia! 
      img.src = 'alessandra.png'
      document.body.style.background = "#734023"
  } else if (hora >= 12 && hora < 18){
      //Boa tarde!
      img.src = 'matteo2_n.jpg'
      document.body.style.background = "#58656c"
  } else {
      img.src = 'haia.png' 
      document.body.style.background = "#151513"
  }
}
