function carregar (){
  var msg = window.document.getElementById ("msg")
  var img = window.document.getElementById ("imagem")
  var data = new Date ()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${data.getHours()}horas `
  if (data.getHours() >= 0 && data.getHours() <12) {
      msg.innerHTML += "Bom dia!" 
      img.src = 'alessandra.png'
      document.body.style.background = "#734023"
  } else if (data.getHours() >= 12 && data.getHours() < 18){
      msg.innerHTML += "Boa tarde!"
      img.src = 'matteo2_n.jpg'
      document.body.style.background = "#58656c"
  } else {
    msg.innerHTML += "Boa noite!"
      img.src = 'haia.png' 
      document.body.style.background = "#151513"
  }
}
