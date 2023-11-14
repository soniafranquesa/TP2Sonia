'use strict'


'use strict'



const enlaces  = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')
for(const enlace of enlaces){
        enlace.addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = enlace.querySelector('.img').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    })
}


cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})