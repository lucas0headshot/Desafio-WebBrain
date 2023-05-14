$('#form-procura').submit(function(e){
    e.preventDefault();

    $.ajax({
        url: 'php/selecionar.php',
        method: 'GET',
        data: {
            p_nome: $('#procura').val()
        },
        success: function(result, textStatus){
            console.log(result);
            $('#card').removeClass('d-none');
        },
        error: function(errorThrown, textStatus, XMLHttpRequest, result){
            console.log(errorThrown);
            console.log(textStatus);
            console.log(XMLHttpRequest);
            console.log(result);
        }
    }).done(function(data){
        $('#tabela').html(data);
    });

    return false;
});