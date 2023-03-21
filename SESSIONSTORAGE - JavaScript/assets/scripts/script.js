let campoInput = document.querySelector('#campo')

if(typeof(Storage) != 'undefined'){

  if(sessionStorage.getItem('save')){
    campoInput.value = sessionStorage.getItem('save')
  }


  campoInput.addEventListener('input', ()=> {
    if(campoInput.value == ''){
      sessionStorage.clear()
      return
    }
    sessionStorage.save = campoInput.value
  })

}else{
  alert('Este navegador não possui suporte para Cookies!')
}