//Função executa ao tentar Enviar o formulário
$('#form-contato').submit(function(e){
    e.preventDefault();

    var nome = $('#nome').val(); //Var nome recebe #nome do Formulário
    var dataNasc = new Date($('#dataNasc').val());
    var email = $('#email');
    var tel = $('#telefone').val();
    var wpp = $('#wpp').val();
    var msg = $('#mensagem').val();
    var aviso = $('#aviso');

    var dataAtual = new Date();
    var idade = (dataAtual.getFullYear() - dataNasc.getFullYear());

    //Adiciona a classe d-none aos avisos, tornando-os invisíveis
    $('#aviso, #aviso-nome, #aviso-email, #aviso-tel, #aviso-wpp, #aviso-msg').addClass('d-none');

    //Remove o texto dos avisos do Telefone, WhatsApp, idade, Mensagem e Nome
    $('#aviso-mask-tel, #aviso-mask-wpp, #aviso-idade, #aviso-carac-msg, #aviso-carac-nome').text('');

    //Remove a classe is-invalid dos campos
    $('.border-danger').removeClass('border-danger');

    if (nome == ''){ //Verifica se Nome está vazio
        $('#aviso-nome').removeClass('d-none'); //Remove a classe d-none do #aviso-nome, tornando-o visível
        aviso.removeClass('d-none'); //Remove a classe d-none do #aviso, tornando-o visível
        $('#nome').focus(); //Alterna o foco para o nome
        $('#aviso-carac-nome').text("Preencha este campo"); //Insere um texto no p com id aviso-carac-nome, avisando o usuário para preencher o campo
        $('#nome').addClass('border border-danger'); //Adiciona a classe border-danger, colorindo o campo com uma borda vermelha
        return false;
    }else if (nome.length < 3){ //Verifica se Nome tem menos que 3 caracteres
        $('#aviso-nome').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#nome').focus();
        $('#aviso-carac-nome').text("Nome muito curto");
        $('#nome').addClass('border border-danger');
    }else{
        var v_nome = true; //Atribui true à variável que valida o nome
    }

    if (idade < 18){ //Verifica Data Nascimento
        $('#aviso-data').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#aviso-idade').text("Precisa ter mais que 18 anos");
        $('#dataNasc').addClass('border border-danger');
        $('#dataNasc').focus();
        return false;
    }else if (isNaN(dataNasc.getTime())){ //Verifica se a data não é um número
        $('#aviso-data').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#dataNasc').addClass('border border-danger');
        $('#aviso-idade').text("Preencha este campo");
        $('#dataNasc').focus();
    }else{
        var v_idade = true;
    }

   if (email.val() == ''){ //Verifica E-mail
        $('#aviso-email').removeClass('d-none');
        aviso.removeClass('d-none');
        email.focus();
        email.addClass('border border-danger');
        return false;
    }else{
        var v_email = true;
    }

    if (tel == ''){ //Verifica Telefone
        $('#aviso-tel').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#aviso-mask-tel').text("Preencha este campo");
        $('#telefone').focus();
        $('#telefone').addClass('border border-danger');
        return false;
    }else if (tel.length < 14){ //Verifica se o telefone tem menos que 14 caracteres
        $('#aviso-tel').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#aviso-mask-tel').text("Preencha corretamente");
        $('#telefone').focus();
        $('#telefone').addClass('border border-danger');
    }else{
        var v_tel = true;
    }

    if (wpp == ''){ //Verifica Celular/WhatsApp
        $('#aviso-wpp').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#aviso-mask-wpp').text("Preencha este campo");
        $('#wpp').focus();
        $('#wpp').addClass('border border-danger');
        return false;
    }else if (wpp.length < 15){ //Verifica se o celular/whatsapp tem menos que 15 caracteres
        $('#aviso-wpp').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#aviso-mask-wpp').text("Preencha corretamente");
        $('#wpp').focus();
        $('#wpp').addClass('border border-danger');
        return false;
    }else{
        var v_wpp = true;
    }

     if (msg == ''){ //Verifica Mensagem
        $('#aviso-msg').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#msg').focus();
        $('#aviso-carac-msg').text("Preencha este campo");
        $('#msg').addClass('border border-danger');
        return false;
    }else if (msg.length < 10){ //Verifica se a mensagem tem menos que 10 caracteres
        $('#aviso-msg').removeClass('d-none');
        aviso.removeClass('d-none');
        $('#msg').focus();
        $('#aviso-carac-msg').text("Mensagem muito curta");
        $('#msg').addClass('border border-danger');
        return false;
    }else{
        var v_msg = true;
    }

    if ((v_nome == true) && (v_idade == true) && (v_email == true) && (v_tel == true) && (v_wpp == true) && (v_msg == true)){ //Verifica se todos os campos validados
        $.ajax({ //Ajax para enviar os dados pro PHP
            url: 'php/inserir.php', //URL do arquivo onde será enviado os dados
            method: 'POST', //Método para enviar
            data: { //Dados
                f_nome: nome,
                f_dt_nasc: dataNasc.toISOString(),
                f_email: email.val(), 
                f_tel: tel, 
                f_wpp: wpp, 
                f_msg: msg
            },
            success: function(){
                $(location).attr('href', 'mensagem.html');
                return true;
            },
            error: function(errorThrown, textStatus, XMLHttpRequest, result){
                console.log(errorThrown);
                console.log(textStatus);
                console.log(XMLHttpRequest);
                console.log(result);
            }
        });
    }else{
        return false;
    }
});