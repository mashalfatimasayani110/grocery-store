// Swiper JS 
let swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
var swiper2 = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
    userLogin.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-btn').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    userLogin.classList.remove('active');
}

let userLogin = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
    userLogin.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    userLogin.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    userLogin.classList.remove('active');
}

