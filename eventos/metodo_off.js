let entries = 100;
$('.register').append(`<u> ainda restam ${100 - entries} vagas</u>`)

$('#form_login [type=submit]').on('click', function(e){
    e.preventDefault();
    alert("Você foi cadastrado. PARABENS!!")
})

if(entries >= 100){
    $('#form_login [type=submit]').off('click')
}