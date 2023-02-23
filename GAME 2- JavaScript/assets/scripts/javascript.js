let Timer = document.querySelector('.timer')
let trys = document.querySelector('.trys')
const writeInput = document.querySelector('#writeTry')
const buttonTry = document.querySelector('#btnTry')
const buttonStart = document.querySelector('#btnStart')

let numero
let tentativas = 10
let segundos = 60
let cron
let controller = 0

buttonStart.addEventListener('click', () =>{
  if(controller == 0){
    numero = parseInt(Math.random() * 1000 + 1)
    controller = 1
    
    cron = setInterval(() =>{
      if(segundos > 0){
        segundos--
        
        if(segundos == 0){
          alert('Tempo acabou! Jogue de novo.')
          clearInterval(cron)
          buttonStart.value = 'Jogar de novo'
        }else if(tentativas == 0){
          alert('tentativas acabaram! Jogue de novo.')
          trys.innerHTML = `Tentativas: ${tentativas}`
          clearInterval(cron)
          buttonStart.value = 'Jogar de novo' 
        }
        
      }
      
      Timer.innerHTML = `Tempo: ${segundos}`
    },1000)
  }else if(buttonStart.value == 'Jogar de novo'){
    jogardenovo()
  }
})

buttonTry.addEventListener('click', () =>{
  
  if(controller == 1){
    
    if(numero == writeInput.value && (segundos > 0 && tentativas > 0)){
      alert(`Você acertou o número ${numero}, jogue de novo!`)
      clearInterval(cron)
      buttonStart.value = 'Jogar de novo'
    }else if(writeInput.value > numero && (segundos > 0 && tentativas > 0)){
      alert('numero é menor')
      writeInput.value = ''
    }else if(writeInput.value < numero && (segundos > 0 && tentativas > 0)){
      alert('numero é maior')
      writeInput.value = ''
    }else if(tentativas == 0){
      alert('suas tentativas acabaram! Jogue de novo.')
    }else if(segundos == 0){
      alert('O tempo acabou! Jogue de novo.')
    }
 
    if(tentativas > 0 && (writeInput != numero && segundos > 0)){
      tentativas--
      trys.innerHTML = `Tentativas: ${tentativas}`
    }
    
  }else{
    alert('você precisa iniciar o game antes de tentar algo!')
  }
  
})

function jogardenovo(){
  controller = 0
  segundos = 60
  tentativas = 10
  trys.innerHTML = `Tentativas: ${tentativas}`
  buttonStart.value = 'Iniciar game' 
  Timer.innerHTML = `Tempo: ${segundos}`
}