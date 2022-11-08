const tabs=document.querySelectorAll('.tab')
const content=document.querySelectorAll('.content')
const parent=document.querySelector('.tab__parent')  
hide=()=>{
    content.forEach(item=>{
        item.classList.add('hidden')
    })
    tabs.forEach(tab=>tab.classList.remove('active'))
}
show=(i=0)=>{
    content[i].classList.toggle('hidden')
    tabs[i].classList.add('active')
}
hide()
show()

parent.addEventListener('click',(e)=>{
    tabs.forEach((tab,i)=>{
        if(e.target==tab){
            hide()
            show(i)
        }
    }
)})

const close=document.querySelector('.close')
const menu=document.querySelector('.side__menu')
const btnMenu=document.querySelector('.menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.toggle('show')
})
close.addEventListener('click',()=>{
    menu.classList.remove('show')
})

$(window).on('load', function(){
$('#video').vide('./video/video',{
    bgColor:'#2ad12a'
})
}
    )


const slides=document.querySelectorAll('.content_item')
const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
let slideIndex=0;

showSlides(slideIndex)

function showSlides(n){
    if(n>slides.length-1){
        slideIndex=0
    }
    if(n<0){
        slideIndex=slides.length-1
    }
    slides.forEach(slide=>{
        slide.style.display = 'none';
    })
    slides[slideIndex].style.display = 'block';
}
function plusSlides(n){
    showSlides(slideIndex +=n)
}
prev.addEventListener('click',()=>{
    plusSlides(-1)
})
next.addEventListener('click',()=>{
    plusSlides(1)
})