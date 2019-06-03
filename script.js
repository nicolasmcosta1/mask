$("#Telefone").mask("(00)0000-0000", {
    placeholder: "(__) ____-____",
    reverse: true
});

//validar formulario com O id meuFormulario
$("#meuFormulario").validate({
    //incluindo regras
    rules: {
        //regra para campo nome
        nome: {
            //obrigatorio
            required: true,
            //tamanho minimo
            minlength: 2
        },
        Email: {
            //obrigatorio
            required: true,
            //validação de email
            email: true
        }
    },
    messages:{
        nome:{
            required:"Digite um Nome",
            minlength:"digite um nome com no minimo 2 caracteres"
        },
        Email:{
            required:"Digite um e-mail",
            email:"digite um email valido"

        }
    }

});