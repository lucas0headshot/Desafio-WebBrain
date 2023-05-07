<?php
    header('ContentType: application/json');

    $_POST['nome']; //Coletar os dados via POST lá do formulairo.js
    $_POST['email'];
    $_POST['telefone'];
    $_POST['wpp'];
    $_POST['msg'];

    //Conexão PDO com o BD mySQL - host, nome da database, usuário, senha
    $pdo = new PDO('mysql:host=localhost; dbname=desafio_webbrain;', 'root', '');

    $SQL = $pdo->prepare('Insert into contato (Nome, Email, Telefone, WhatsApp, Mensagem) Values ($nome, $email, $telefone, $wpp, $msg)');
    $SQL->execute();

    if ($SQL->rowCount() >= 1){
        echo json_encode('Enviado com sucesso!');
    }else{
        echo json_encode('Ocorreu um erro...');
    }
?>