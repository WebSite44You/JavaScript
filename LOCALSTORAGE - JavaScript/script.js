const btnCookie = document.querySelector('#aceptButton')
const btnNoCookie = document.querySelector('#desaButton')
const containerCookie = document.querySelector('#containerCookies')
const containerConfig = document.querySelector('#table-enabled')
const containCookie = document.querySelector('.cookies-actived')
const containVisits = document.querySelector('.visits-cookie')

if(typeof(Storage) != 'undefined'){

// CASO EXISTA UMA CHAVE 'cookies' ELE ADICIONA +1 E OS DEMAIS CÓDIGOS
  if(localStorage.cookies){
      localStorage.visits = Number(localStorage.visits)+1
      containerCookie.style.display = 'none'
      containerConfig.style.display = 'flex'

      if(localStorage.cookies){
    containCookie.innerText = 'sim'
      }
      containVisits.innerText = localStorage.visits
      

    }
  
// ATIVA OS COOKIES
  btnCookie.addEventListener('click', ()=> {
    containerCookie.style.display = 'none'
    containerConfig.style.display = 'flex'
    // localStorages
    localStorage.cookies = true
    localStorage.visits = 1
    
  containCookie.innerText = 'sim'
    containVisits.innerText = localStorage.visits
    

  })

// DESATIVA OS COOKIES
  btnNoCookie.addEventListener('click', ()=> {
    containerCookie.style.display = 'flex'
    containerConfig.style.display = 'none'
    localStorage.removeItem('cookies')
    localStorage.removeItem('visits')
    alert('Configurações resetadas')
  })

}else{
  alert('Este navegador não possui suporte para Cookies!')
  containerCookie.style.display = 'none'
}