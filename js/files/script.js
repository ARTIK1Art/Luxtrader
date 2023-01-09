// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

var user_icon = document.querySelector('.user-header__icon');
var user_menu = document.querySelector('.user-header__menu');
user_icon.addEventListener("click", function (e) {
	user_menu.classList.toggle('_active');
});
// document.documentElement.addEventListener("click", function (e) {
// 	if (!e.target.closest('.user-header')) {
// 		user_menu.classList.remove('_active');
// 	}
// });
var menu__body = document.querySelector('body');
var menu_header = document.querySelector('.header');
var menu_icon = document.querySelector('.icon-menu');
var body_menu = document.querySelector('.menu__body');
menu_icon.addEventListener("click", function (e) {
	body_menu.classList.toggle('_active');
});
menu_icon.addEventListener("click", function (e) {
	menu_icon.classList.toggle('_active');
});
menu_icon.addEventListener("click", function (e) {
	menu_header.classList.toggle('_active');
});
menu_icon.addEventListener("click", function (e) {
	menu__body.classList.toggle('_active');
});