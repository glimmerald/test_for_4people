// burger
let burger = document.getElementById('burgerIcon')
let header = document.getElementById('header')
burger.addEventListener('click', function () {
    this.classList.toggle('open')
    header.classList.toggle('header__open')
    console.log("click")
})


AOS.init();



