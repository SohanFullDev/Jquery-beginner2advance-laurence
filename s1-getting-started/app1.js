
console.log($('div'));
$('div').html('Hello');
console.log($('.div2'));
console.log($('#div3'));
console.log($('#div3, .div2'));


const $ele1 = $('div');
//console.log(ele1[0]);
console.log($ele1);
$ele1.html('Hello 2');
const $ele2 = $('.div2');
console.log($ele2);
const $ele3 = $('#div3');
console.log($ele3);
const $ele4 = $('#div3, .div2');
console.log($ele4);