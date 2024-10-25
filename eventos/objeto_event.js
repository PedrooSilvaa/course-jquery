$('p').click(function(event){
    // Retorna o tipo de evento realizado
    // console.log(`Você realizou um evento de ${event.type}`)

    // Retorna o nome do elemento que clicamos
    // alert(`Você clicou em uma tag <${event.target.localName}>`)

    // console.log("Target " + event.target)
    // console.log("Current target " + event.currentTarget)
})
 
// Retorna a posição X e Y do elemento onde ocorreu o evento
// event.pageX, event.pageY

$('[name=bio]').keydown(function(e){
    // Retorna o código da tecla clicada
    // console.log(e.keyCode)
    // console.log(e.which)

    // Retorna o nome da tecla pressionada
    // console.log(e.key)
    /* if (e.key == "Enter"){
        console.log("Você pressionou o enter")
    } */


// Para a execução padrão de eventos
// e.preventDefault()

// Para a propagação de eventos
// e.stopPropagation

})