document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header__menu-burger").classList.toggle("open")
        document.querySelector(".header__burger-btn").classList.toggle("open")
    })
})