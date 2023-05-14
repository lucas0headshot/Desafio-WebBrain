<?php
    include ("conectar.php");

    $p_nome = $_GET['p_nome'];

    $SQL = $pdo->prepare('Select * from contato where Nome like ? Order by Dt_Envio Desc');
    $SQL->execute(array('%'.$p_nome.'%'));
    $dados = $SQL->fetchAll(PDO::FETCH_ASSOC);
    $base = '';

    foreach ($dados as $value)
    $base .= '
            <tr>
                <th>'.$value['Nome'].'</th>
                <th>'.$value['Email'].'</th>
                <th>'.$value['Dt_Nasc'].'</th>
                <th>'.$value['Dt_Envio'].'</th>
                <th>'.$value['Telefone'].'</th>
                <th>'.$value['WhatsApp'].'</th>
                <th>'.$value['Mensagem'].'</th>
            </tr>
    ';

    echo $base;
?>