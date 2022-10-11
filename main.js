$(document).ready(function() {
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira seu nome completo'
        },
        sumitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretor = validador.numberOfInvalids();
            if (camposIncorretor) {
                alert(`Existem ${camposIncorretor} campos incorretos`)
            }
        }
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('#telefone').mask('(00) 00000-0000', { 
        placeholder: '(00) 00000-0000'})
    })