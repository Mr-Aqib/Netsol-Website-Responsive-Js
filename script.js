let arrowicon = document.querySelector('.arrowdown-icon')
let langlist = document.querySelector('.lang-list')
let langli = document.querySelectorAll('.lang-li')
let EnglishText = document.querySelector('.eng-text')
let menulinesdiv = document.querySelector('.menu-lines-div')
let menutext = document.querySelector('.menu-text')
let menulines = document.querySelectorAll('.menu-line')
let menuitems = document.querySelectorAll('.menu-items')
let menuitemitems = document.querySelectorAll('.menu-item-items')
let menuitemitems1 = document.querySelector('.menu-item-items1')
let sidebar=document.querySelector('.sidebar')
arrowicon.addEventListener('click', () => {
    arrowicon.classList.toggle('arrow-icon-animation')
    langlist.classList.toggle('lang-list-animation')
    

})
langli.forEach((languges) => {
    languges.addEventListener('click', () => {
        EnglishText.innerHTML = languges.innerHTML
    })
})
menulinesdiv.addEventListener('click', () => {
    if (menutext.innerHTML == 'Close') {
        menutext.innerHTML = 'Menu'
    } else {
        menutext.innerHTML = 'Close'
    }
    menulines[0].classList.toggle('menu-line1-animation')
    menulines[1].classList.toggle('menu-line2-animation')
    menulines[2].classList.toggle('menu-line3-animation')
    sidebar.classList.toggle('sidebar-anim')
    
})



menuitems.forEach((menu) => {
    menu.addEventListener('click', () => {

        menuitemitems1.classList.toggle('menu-item-ani')
    })
})