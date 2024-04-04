let arrowicon=document.querySelector('.arrowdown-icon')
let langlist=document.querySelector('.lang-list')
let langli=document.querySelectorAll('.lang-li')
let EnglishText=document.querySelector('.eng-text')

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