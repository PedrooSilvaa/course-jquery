/* $('h1').on('dblclick', function(){
$(this).text('HCode Treinamentos - JQuery')
}) */

// Acionando um evento manualmente
// $('h1').trigger('dblclick')

// Acionando evento automatizados
$('#form_login').on('submit', function(event){
event.preventDefault();

console.log('Aqui estão os valores do formularios', $(this).serializeArray());
})

$('#form_login [name=bio]').blur(function(event){
$(event.target.form).trigger('submit')
})