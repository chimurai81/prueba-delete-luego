 const btn_hamburguesa = document.querySelector('#btn-hamburguesa')
const menu_hamburguesa = document.querySelector('.lado-der')
 
 btn_hamburguesa.addEventListener('click' , (e) =>{
    menu_hamburguesa.classList.toggle('btn-visible')

 })