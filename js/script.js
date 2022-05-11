let burgerMenu = document.querySelector('.burger');
let darkBg = document.querySelector('.nav-trans')
let menu = document.querySelector('.nav-content');
let close = document.querySelector('.burger button img.close')
let open = document.querySelector('.burger button img.open')
let features = document.querySelector('.features')
let arrow1 = document.querySelector('button img.arrow1')
let arrow2 = document.querySelector('button img.arrow2')
let arrow3 = document.querySelector('button img.arrow3')
let fContents = document.querySelector('.features-content')
let company = document.querySelector('.company')
let arrow4 = document.querySelector('.arrow4')
let cContent = document.querySelector('.company-content')
burgerMenu.addEventListener('click', function(){
    this.classList.toggle("active");
    darkBg.classList.toggle("active");
    menu.classList.toggle("active")
    close.classList.toggle("active")
    open.classList.toggle("active")
})

features.addEventListener('click' , function(){
    fContents.classList.toggle("active")
    arrow3.classList.toggle("active")
    arrow1.classList.toggle("active")
})

company.addEventListener('click', function() {
    arrow2.classList.toggle('active')
    cContent.classList.toggle('active')
    arrow4.classList.toggle('active')
})