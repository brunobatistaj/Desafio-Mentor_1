let rates = document.querySelectorAll('#nota')
let rating = document.getElementById('rating')
let tela1 = document.querySelector('.first')
let tela2 = document.querySelector('.second')
let btn = document.querySelector('#btn')


    document.addEventListener('click', function(e){
        let classNota = e.target.classList
        if(!classNota.contains('active')){
            rates.forEach(function(rates){
                rates.classList.remove('active')
            })
            classNota.add('active')
        }
    })

    rates.forEach((rate) => {
        rate.addEventListener("click", () => { 
            rating.innerHTML = rate.innerHTML
        })
    })


function enviar(){
    tela1.style.display = 'none'
    tela2.style.display = 'block'
}

btn.addEventListener('click', enviar)