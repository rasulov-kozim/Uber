let button = document.querySelector(".subheader_btn");

button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");

    setTimeout(() => {
        button.classList.remove("animate");
    }, 600)
});
let buttonSecond = document.querySelector(".promo_btn");

buttonSecond.addEventListener("click", (e) => {
    e.preventDefault();
    buttonSecond.classList.add("animate");

    setTimeout(() => {
        buttonSecond.classList.remove("animate");
    }, 600)
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})