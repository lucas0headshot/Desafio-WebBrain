//Função executa ao tentar Enviar o formulário
$('#form-contato').submit(function(e){
    e.preventDefault();

    var nome = $('#nome'); //Var nome recebe #nome do Formulário
    var dataNasc = new Date($('#dataNasc').val());
    var email = $('#email');
    var tel = $('#telefone');
    var wpp = $('#wpp');
    var msg = $('#mensagem');
    var aviso = $('#aviso');

    var dataAtual = new Date();
    var idade = (dataAtual.getFullYear() - dataNasc.getFullYear());

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
    }else{
        var v_nome = true; //Atribui true à variável que valida o nome
    }

    if (idade < 18){ //Verifica Data Nascimento
        $('#aviso-data').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#aviso-idade').text("Precisa ter mais que 18 anos");
        $('#dataNasc').addClass('is-invalid');
        $('#dataNasc').focus();
        return false;
    }else if (isNaN(dataNasc.getTime())){
        $('#aviso-data').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#aviso-idade').text("Preencha este campo");
        $('#dataNasc').focus();
    }else{
        var v_idade = true;
    }

   if (email.val() == ''){ //Verifica E-mail
        $('#aviso-email').removeClass('d-none');
        aviso.removeClass('d-none');
        email.focus();
        email.addClass('is-invalid');
        return false;
    }else{
        var v_email = true;
    }

    if (tel.val() == ''){ //Verifica Telefone
        $('#aviso-tel').removeClass('d-none');
        aviso.removeClass('d-none');
        tel.focus();
        tel.addClass('is-invalid');
        return false;
    }else{
        var v_tel = true;
    }

    if (wpp.val() == ''){ //Verifica Celular/WhatsApp
        $('#aviso-wpp').removeClass('d-none');
        aviso.removeClass('d-none');
        wpp.focus();
        wpp.addClass('is-invalid');
        return false;
    }else{
        var v_wpp = true;
    }

     if (msg.val() == ''){ //Verifica Mensagem
        $('#aviso-msg').removeClass('d-none');
        aviso.removeClass('d-none');
        msg.focus();
        msg.addClass('is-invalid');
        return false;
    }else{
        var v_msg = true;
    }

    if ((v_nome == true) && (v_idade == true) && (v_email == true) && (v_tel == true) && (v_wpp == true) && (v_msg == true)){ //Verifica se todos os campos não estão vazios
        $.ajax({ //Ajax para enviar os dados pro PHP
            url: 'php/inserir.php', //URL do arquivo onde será enviado os dados
            method: 'POST', //Método para enviar
            data: { //Dados
                f_nome: nome.val(),
                f_dt_nasc: dataNasc.toISOString(),
                f_email: email.val(), 
                f_tel: tel.val(), 
                f_wpp: wpp.val(), 
                f_msg: msg.val()
            },
            success: function(result){
                console.log(result);
                alert('Sucesso!');
            },
            error: function(errorThrown, textStatus, XMLHttpRequest, result){
                console.log(errorThrown);
                console.log(textStatus);
                console.log(XMLHttpRequest);
                console.log(result);
                alert('Erro!');
            }
        });
        
        return false;
    }else{
        return false;
    }
});