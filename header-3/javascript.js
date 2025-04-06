// scroll-sticky-header
window.addEventListener('scroll', function () {
    if (window.innerWidth > 1024) { // Only apply for desktop version
        let boxMenu = document.querySelector('header');
        let mainMenu = document.querySelector('.second-menu');
        let itemsMenu = document.querySelectorAll('.menu-link');
        let whiteLogo = document.querySelector('.whiteLogo');
        let blackLogo = document.querySelector('.blackLogo');
        let SearchIcon = document.querySelector('.fa-search');
        let offcanvasMenu = document.querySelectorAll('.menu-item');
        if (window.scrollY > 1) {
            boxMenu.classList.add('fixed');
            // mainMenu.classList.add('fixed');
            mainMenu.classList.add('backgroundColorHeader');
            itemsMenu.forEach(item => item.classList.add('itemColor'));
            blackLogo.style.display = 'none';
            whiteLogo.style.display = 'block';
            SearchIcon.style.color = 'white';

        } else {
            boxMenu.classList.remove('fixed');
            // mainMenu.classList.remove('fixed');
            mainMenu.classList.remove('backgroundColorHeader');
            itemsMenu.forEach(item => item.classList.remove('itemColor'));
            whiteLogo.style.display = '';
            blackLogo.style.display = '';
            SearchIcon.style.color = '';
        }
    }
});

// off canvas button
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const offcanvasMenu = document.querySelector(".offcanvas-menu");
    const dropdowns = document.querySelectorAll(".dropdown, .drop-submenu");

    // نمایش و پنهان‌سازی منو
    burgerMenu.addEventListener("click", () => {
        offcanvasMenu.style.right =
            offcanvasMenu.style.right === "0px" ? "-100%" : "0px";
    });

    // بستن اف کانواس وقتی خارج از آن کلیک شد
    document.addEventListener("click", (event) => {
        if (!offcanvasMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            offcanvasMenu.style.right = "-100%";
        }
    });

    // باز کردن زیر منوها
    dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector(".menu-link, .drop-item");
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            dropdown.classList.toggle("open");
        });
    });
});


// saerch button
$('.search').click(function () {
    $('.search-box').css('width', '100%');
    $('.search-box').css('opacity', '1');
    $('.search-box input').focus();
})
$('.search-box .close').click(function () {
    $('.search-box').css('width', '0');
    $('.search-box').css('opacity', '0');
})
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});
document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.drop-toggle');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (event) {
            event.preventDefault();
            var submenu = this.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
});
