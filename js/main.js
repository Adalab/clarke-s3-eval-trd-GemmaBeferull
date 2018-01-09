'use strict';

var buttonMenu = document.querySelector (".menu-button");
var trigger = document.querySelector (".menu-lateral");
var buttonClose = document.querySelector (".ico-close")
var menuItem = document.querySelectorAll (".menu__item")



function openNavMenu() {
 trigger.classList.add('left');
 buttonMenu.classList.add ('hidden')
}
buttonMenu.addEventListener ('click', openNavMenu)

function closeNavMenu() {
 trigger.classList.remove('left');
 buttonMenu.classList.remove ('hidden');
}

buttonClose.addEventListener ('click', closeNavMenu)

for (var i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener ('click', closeNavMenu)
}
window.addEventListener ('scroll', closeNavMenu)
