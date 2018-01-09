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


 var threeReasons = '';
 var containerReasons = document.querySelector('.box-s2');
 var moreReasonsButton = document.querySelector('.more-reasons');


 function getMoreReasons() {
 	var request = new XMLHttpRequest();
 	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');
 	request.addEventListener('load', function loadReasons() {
 		var response = request.responseText;
 	  var responseJSON = JSON.parse(response);

 		for (var i = 0; i < responseJSON.reasons.length; i++) {
 			threeReasons += '<div class="div-s2"><h4 class="tittle-s2">' + responseJSON.reasons[i].title + '</h4><p class="txt-s2">'+ responseJSON.reasons[i].description + '</p></div>';

 		}
 		 containerReasons.innerHTML = containerReasons.innerHTML + threeReasons;
     threeReasons = ''
 	})
 	request.send();
 }
moreReasonsButton.addEventListener('click', getMoreReasons);


/*
var request = new XMLHttpRequest();
var listHTML=document.querySelectorAll('.txt-s2');
request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');

request.addEventListener('load', showData);

function showData() {
  var response = request.responseText;
  var reasons = JSON.parse(response);
  for (var i = 0; i < reasons.length; i++) {
    listHTML[i].innerHTML =  reasons[i].description;
}

request.send();

var buttonReasons = document.querySelector ('.more-reasons')
buttonReasons.addEventListener('click', showData);
*/
