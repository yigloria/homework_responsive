// alert ('working!')

$(document).ready(start);

function start() {
$('#Mobile-button').click(showMenu);
}

function showMenu() {
 // alert ('working!')
 // $('.hamburger ul li').toggleClass('show');
console.log($('.hamburger ul li').css('display'));
if ($('.hamburger ul li').css('display') == "none"){
  $('.hamburger ul li').css('display','block');
}else{
  $('.hamburger ul li').css('display','none');

}

}
