<?php
    try{ //Conexão PDO com BD, usando a estrutura de try e catch, para evitar possíveis perdas de tempo procurando o erro
        $pdo = new \PDO('mysql:host=localhost;dbname=desafio_webbrain','root','',array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $pdo->setAttribute(\PDO::ATTR_ERRMODE,\PDO::ERRMODE_EXCEPTION);
    }catch(Exception $e){
        echo ('<script>console.log("Erro ao conectar-se com MySQL!")</script>');
        error_log($e->getMessage());
    }
?>