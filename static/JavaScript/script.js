console.log("Hello world");

var barbtn = document.querySelector('.bar');

var toggleMenu = document.querySelector('.nav')
var closeBtn = document.querySelector('.close-btn');



barbtn.addEventListener('click', function () {
    toggleMenu.classList.toggle('show-toggle-menu');
})

closeBtn.addEventListener('click', function () {
    toggleMenu.classList.remove('show-toggle-menu');
});