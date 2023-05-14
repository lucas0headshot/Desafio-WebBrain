<?php
    include ("conectar.php");

    date_default_timezone_set('America/Sao_Paulo'); //Configura zona de horário pro PHP
    
    $f_nome = $_POST['f_nome']; //Coleta os dados via POST lá do formulairo.js
    $f_dt_nasc = $_POST['f_dt_nasc'];
    $f_email = $_POST['f_email'];
    $f_tel = $_POST['f_tel'];
    $f_wpp = $_POST['f_wpp'];
    $f_msg = $_POST['f_msg'];

    //Prepara insert na tabela contato com os campos Nome, Email, Dt_Envio, Telefone, WhatsApp e Mensagem
    $SQL = $pdo->prepare('Insert into contato (Nome, Email, Dt_Nasc, Dt_Envio, Telefone, WhatsApp, Mensagem) Values (?, ?, ?, ?, ?, ?, ?)');
    $SQL->execute(array($f_nome, $f_email, $f_dt_nasc, date('Y/m/d H:m:s'), $f_tel, $f_wpp, $f_msg)); //Executa o insert combinando as varíaveis com seus respectivos campos no BD

    if ($SQL->rowCount() >= 1){
        echo ('console.log("Insert foi um sucesso")');
    }else{
        echo ('console.log("Insert deu errado")');
    }
?>