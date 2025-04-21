document.addEventListener("DOMContentLoaded", function () {
    const dropdownIcons = document.querySelectorAll(".main-menu .dropdown-icon");

    dropdownIcons.forEach(icon => {
        icon.addEventListener("click", function (e) {
            e.stopPropagation(); // جلوگیری از بسته‌شدن کل منو
            const parentLi = icon.closest("li");
            const submenu = parentLi.querySelector(".sub-menu");

            if (submenu) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
                icon.classList.toggle("active");
            }
        });
    });
});

document.querySelector(".mobile-menu-toggle").addEventListener("click", function () {
    document.querySelector(".main-menu").classList.toggle("show-menu");
});