//Função executa ao clicar no botão Enviar
$('#form-contato').submit(function(e){
    e.preventDefault();

    var nome = $('#nome'); //Var nome recebe #nome do Formulário
    var email = $('#email');
    var tel = $('#telefone');
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
        
    }

    if (email.val() == ''){ //Verifica E-mail
        $('#aviso-email').removeClass('d-none');
        aviso.removeClass('d-none');
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    if (tel.val() == ''){ //Verifica Mensagem
        $('#aviso-tel').removeClass('d-none');
        aviso.removeClass('d-none');
        tel.focus();
        tel.addClass('is-invalid');
        return false;
    }

     if (msg.val() == ''){ //Verifica Mensagem
        $('#aviso-msg').removeClass('d-none');
        aviso.removeClass('d-none');
        msg.focus();
        msg.addClass('is-invalid');
        return false;
    }
    
    if ($('#confirmaWhatsapp').is(':checked') == true){ //Verifica se "É WhatsApp" está marcado
        var wpp = tel;
    }

    if ((nome.val() != '') && (email.val() != '') && (tel.val() != '') && (msg.val() != '')){ //Verifica se todos os campos não estão vazios
        $.ajax({ //Ajax para enviar os dados pro PHP
            url: 'http://localhost/Desafio-WebBrain/php/inserir.php', //URL do arquivo onde será enviado os dados
            method: 'POST', //Método para enviar
            data: {nome: nome, email: email, tel: tel, wpp: wpp, msg: msg}, //Dados
            dataType: 'json'
        }).done(function(result){
            console.log(result)
        });

        return false;
    }else{
        return false;
    }
});