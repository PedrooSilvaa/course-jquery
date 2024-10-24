// Evento para quando o elemento receber o foco
/* $('[name]').focus(function(){
$(this).css('background', "yellow")
}) */

// Evento para quando o elemento perder o foco
/* $('[name]').blur(function(){
$(this).css('background', "white")
}) */

// Evento para quando o elemento receber o foco, mesmo que seja um elemento filho
/* $('.form-group').focusin(function(){
console.log("Você selecionou um campo")
}) */

// Evento para quando o elemento perder o foco, mesmo que seja um elemento filho
/* $('.form-group').focusout(function(){
console.log("Você deixou um campo")
}) */

// Evento para quando o campo mudar seu valor
$('[name]').change(function(){
console.log(`Valor do campo: ${$(this).val()}`)
})

// Evento para quando selcionarmos o valor de um campo do formulario
$('[type=text]').select(function(){
console.log(`Você selecionou o valor desse campo`)
})


$('form').submit(function(event){
event.preventDefault();
console.log($(this).serializeArray());
})

$('#link_logo').click(function(event){
event.preventDefault();

$(this).find('img').attr('src', 'img/jquery.jpg')
})
