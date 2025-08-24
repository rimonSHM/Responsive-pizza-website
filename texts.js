const navMenu   = document.getElementById('nav-menu')   // the menu container
const navToggle = document.getElementById('nav-toggle') // button/icon to open menu
const navClose  = document.getElementById('nav-close')  // button/icon to close menu


navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})



/*===================== REMOVE MENU MOBILE=========*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')


    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=================== ADD SHADOW HEADER================*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


/*================== SWIPER POPULAR===============*/
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
})

// SHOW SCROLL UP 


// const scrollUp = () =>{
//     const scrollUp = document.getElementById('scroll-up')
//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//                     : scrollUp.classList.remove('show-scroll')
// }

// window.addEventListener('scroll', scrollUp)

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
};

window.addEventListener('scroll', scrollUp);


//====================== SCROLL SECTIONS ACTIVE LINK=============

// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//     const scrollDown = window.scrollY

//     sections.forEach(surrent =>{
//         const sectionHeight = current.offsetHeight,
//         sectionTop = current.offsecTop - 58,
//         sectionId = current.getAttribute('id'),
//         sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

//         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//             sectionsClass.classList.add('active-link')
//         }else{
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58, // fixed typo: "offsecTop" → "offsetTop"
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

// Make sure to run it on scroll
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION=================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,

})

sr.reveal('.home__data')
sr.reveal('.home__board', {delay: 700, distance: '100px', origin: 'right'})

