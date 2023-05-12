function descrevendo(){

}




function escrevendoletra(){

    function ativarletra(elemento){
        const arrtexto = elemento.innerHTML.split('');
        elemento.innerHTML ='';
        arrtexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML +=letra 
            }, 75 * i)
        })
    }

    const titulo =document.querySelector('.digitando')
    ativarletra(titulo) 
}

escrevendoletra()



function menumobo(){
    const navmenu = document.querySelector('.navegcao-primaria')


    const ativamenu =document.querySelector('.fa-bars')
    
    ativamenu.addEventListener('click', ()=>{
        ativamenu.classList.toggle ('fa-x')
        navmenu.classList.toggle ('ativado')
    })
    
}

menumobo()


function global(){



const divexp = document.querySelectorAll('.experiencia_content div')
const liexp = document.querySelectorAll('.experiencia_content ul li')

const diveduc = document.querySelectorAll('.education_content div')
const lieduc = document.querySelectorAll('.education_content ul li')

divexp[0].classList.add('ativo')
liexp[0].classList.add('ativo')
diveduc[0].classList.add('ativo')
lieduc[0].classList.add('ativo')

function slide(index){
    divexp.forEach((div)=>{
        div.classList.remove('ativo')
    })
    liexp.forEach((bot)=>{
        bot.classList.remove('ativo')
    })
    divexp[index].classList.add('ativo')
    liexp[index].classList.add('ativo')
}


function slide2(index){
    diveduc.forEach((div)=>{
        div.classList.remove('ativo')
    })
    lieduc.forEach((bot)=>{
        bot.classList.remove('ativo')
    })
    diveduc[index].classList.add('ativo')
    lieduc[index].classList.add('ativo')
}


liexp.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        slide(index)
    })
})


lieduc.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        slide2(index)
    })
})

}

global()