// Evento para quando pressionarmos o mouse
// $('h1').mousedown(function(){
// console.log("Apertei o mouse")
// })

// Evento para quando soltarmos o mouse
/* $('h1').mouseup(function(){
console.log("Soltei o mouse")
}) */

// Evento para quando pressionarmos e soltarmos o mouse
/* $('h1').click(function(){
console.log("Apertei e soltei o botão")
})
$('h3.books').click(function(){
$(this).text('Fui clicado')
}) */

// Simulando click em um elemento
// $('h3.books').click()

// Evento para o botao direito do mouse
/* $('img').contextmenu(function(){
alert("Clicamos com o botão direito")
}) */

// Simulando o clique com botao direito
/* $('img').contextmenu() */

// Evento para duplo clique
/* $('table tbody tr').dblclick(function(){
$(this).css({
background: 'black',
color: 'white'
});
}) */

// Simulando o duplo clique
// $('table tbody tr:eq(0)').dblclick()

// Evento para quando o cursor "passa por cima" (entra) em um elemento
/* $('table tbody tr').mouseenter(function(){
$(this).addClass('trselected')
}) /*

// Evento para quando o cursor (deixa) em um elemento
/* $('table tbody tr').mouseleave(function(){

$(this).removeClass('trselected')

}) */

// Evento para quando o cursor "entra" e "deixa" um elemento
$('table tbody tr').hover(function(){
$(this).addClass('trselected')
}, function(){
$(this).removeClass('trselected')
}) 

// Evento para quando o mouse se movimenta dentro de um elemento
/* $('table tbody tr').mousemove(function(event){
$('h1').text(`Você está na posição Y ${event.pageX}; Y ${event.pageY}`)
}) */