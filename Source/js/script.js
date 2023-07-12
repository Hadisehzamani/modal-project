var btn = document.querySelector('button')
var modalParent = document.querySelector('.modal-parent')
var section = document.querySelector('section')
var x = document.querySelector('.X')

function apearModal(){
    modalParent.style.display = 'block'
    section.style.filter = 'blur(6px)'
}



x.addEventListener('click', function(){
    modalParent.style.display = 'none'
    section.style.filter = 'blur(0px)'
})

btn.addEventListener('click',apearModal)