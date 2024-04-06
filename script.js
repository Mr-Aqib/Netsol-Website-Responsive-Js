let arrowicon=document.querySelector('.arrowdown-icon')
let langlist=document.querySelector('.lang-list')
let langli=document.querySelectorAll('.lang-li')
let EnglishText=document.querySelector('.eng-text')
let menulinesdiv=document.querySelector('.menu-lines-div')
let menutext=document.querySelector('.menu-text')
let menulines=document.querySelectorAll('.menu-line')

arrowicon.addEventListener('click',()=>
{
    arrowicon.classList.toggle('arrow-icon-animation')
    langlist.classList.toggle('lang-list-animation')

})
langli.forEach((languges)=>
{
    languges.addEventListener('click',()=>{
        EnglishText.innerHTML=languges.innerHTML
    })
})
menulinesdiv.addEventListener('click',()=>
{
    if(menutext.innerHTML=='Close')
    {
        menutext.innerHTML='Menu'
    }
    else
    {
        menutext.innerHTML='Close'
    }
 menulines[0].classList.toggle('menu-line1-animation')
 menulines[1].classList.toggle('menu-line2-animation')
 menulines[2].classList.toggle('menu-line3-animation')
})