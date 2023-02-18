  const join = document.querySelector('#btnJoin')
  const exit = document.querySelector('#btnExit')
  const amount = document.querySelector('#btnAmount')
  const showPlayers = document.querySelector('#totalPlayers')
  
  let countPlayers = 0;

  join.addEventListener('click', () => {
    if(countPlayers <= 1){
      countPlayers++
      showPlayers.innerHTML = countPlayers
      StartGame()
    }
  })

  exit.addEventListener('click', () => {
    if(countPlayers > 0){
      countPlayers--
      showPlayers.innerHTML = countPlayers
      StartGame()
    }
  })

  function StartGame(){
    if(countPlayers == 2){
      let TimerGame = setTimeout(() =>{
        
        console.log('Jogo iniciado')
        
        setTimeout(() =>{
          console.log('restam 10s')
        },10000)
        
        setTimeout(() => {
          console.log('Fim de jogo!')
        },20000)
        
      },1000) 
    }
  }

  amount.addEventListener('click', () => {
    console.log(`Players in game: ${countPlayers}`)
  })