//Função executada ao clicar no botão Enviar
$('#form-contato').submit(function(){
    var nome = $('#nome'); //Var nome recebe #nome do Formulário
    var email = $('#email');
    var msg = $('#mensagem');
    var aviso = $('#aviso');

    //Adiciona a classe d-none aos avisos, tornando-os invisíveis
    $('#aviso, #aviso-nome, #aviso-email, #aviso-tel, #aviso-msg').addClass('d-none');
    
    //Remove a classe is-invalid dos campos
    $('.is-invalid').removeClass('is-invalid');

    if (nome.val() == ''){ //Verifica se Nome está vazio
        $('#aviso-nome').removeClass('d-none'); //Remove a classe d-none do #aviso-nome, tornando-o visível
        aviso.removeClass('d-none'); //Remove a classe d-none do #aviso, tornando-o visível
        nome.focus(); //Alterna o foco para o nome
        nome.addClass('is-invalid'); //Adiciona a classe is-invalid, sinalizando o campo
        return false;
    }

    if (email.val() == ''){ //Verifica E-mail
        $('#aviso-email').removeClass('d-none');
        aviso.removeClass('d-none');
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

     if (msg.val() == ''){ //Verifica Mensagem
        $('#aviso-email').removeClass('d-none');
        aviso.removeClass('d-none');
        msg.focus();
        msg.addClass('is-invalid');
        return false;
    }

    return false;
});