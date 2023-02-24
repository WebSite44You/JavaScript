const Increment = document.querySelector('#btnIncrement')
const Decrement = document.querySelector('#btnDecrement')
const Reset = document.querySelector('#btnReset')
const countNumber = document.querySelector('#numberCount')

let number = 0;

Increment.addEventListener('click', () =>{
  number++
  countNumber.textContent = number
})

Decrement.addEventListener('click', () =>{
  if(number > 0){
    number--
    countNumber.textContent = number
  }
})

Reset.addEventListener('click', () =>{
  number = 0
  countNumber.textContent = number
})



/*
  Essa é outra forma de fazer esse contador, onde se usa o TARGET
  colocando o document com eventlistener para poder clicar em qual quer
  parte do documento e fazer IF ELSE para saber onde foi clicado.
  É passado um parametro que n precisa ter um valor, e.target.(elemento que queremos pegar).
  Aqui no caso eu peguei o ID, logo foi armazenado em uma variável button.
  se a variável button tiver o ID igual a 'btnIncrement' ele vai incrementar,
  caso seja igual a 'btnDecrement' ele vai decrementar e caso for igual a 'reset'
  ele reseta o contador
*/


// document.addEventListener('click', (e) =>{
//   let button = e.target.id
  
//   if(button === 'btnIncrement'){
//     number++
//   }else if(button === 'btnDecrement' && number > 0){
//     number--
//   }else if(button == 'btnReset'){
//     number = 0
//   }
  
//   countNumber.textContent = number
// })