<?php
    $f_nome = $_POST['f_nome']; //Coletar os dados via POST lá do formulairo.js
    $f_email = $_POST['f_email'];
    $f_tel = $_POST['f_tel'];
    $f_wpp = $_POST['f_wpp'];
    $f_msg = $_POST['f_msg'];

    //Conexão PDO com o BD mySQL - host, nome da database, usuário, senha
    //$pdo = new PDO('mysql:host=localhost; dbname=desafio_webbrain;', 'root', '');

    try{
        $pdo = new \PDO('mysql:host=localhost;dbname=desafio_webbrain','root','',array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $pdo->setAttribute(\PDO::ATTR_ERRMODE,\PDO::ERRMODE_EXCEPTION);
    }catch(Exception $e){
        echo 'Erro ao conectar-se com MySQL!';
        error_log($e->getMessage());
    }

    $SQL = $pdo->prepare('Insert into contato (Nome, Email, Telefone, WhatsApp, Mensagem) Values (?, ?, ?, ?, ?)');
    $SQL->execute(array($f_nome, $f_email, $f_tel, $f_wpp, $f_msg));

    if ($SQL->rowCount() >= 1){
        echo ('<script>alert("Sucesso")</script>');
    }else{
        echo ('<script>alert("Erro")</script>');
    }
?>