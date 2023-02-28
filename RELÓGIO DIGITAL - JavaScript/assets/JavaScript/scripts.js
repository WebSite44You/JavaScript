

let horaDocument = document.querySelector('#horas')
let minutoDocument  = document.querySelector('#minutos')
let segundoDocument  = document.querySelector('#segundos')

setInterval(() =>{
  let tempo = new Date()
  let hora = tempo.getHours()
  let minuto = tempo.getMinutes()
  let segundo = tempo.getSeconds()

  if(hora < 10){
    hora = `0${hora}`
  }
  if(minuto < 10){
    minuto = `0${minuto}`
  }

  if(segundo < 10){
    segundo = `0${segundo}`
  }

  horaDocument.innerHTML = hora
  minutoDocument.innerHTML = minuto
  segundoDocument.innerHTML = segundo

},100)

