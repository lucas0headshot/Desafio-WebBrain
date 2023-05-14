-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 14-Maio-2023 às 01:46
-- Versão do servidor: 8.0.27
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `desafio_webbrain`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

DROP TABLE IF EXISTS `contato`;
CREATE TABLE IF NOT EXISTS `contato` (
  `ID_Contato` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Dt_Nasc` date NOT NULL,
  `Dt_Envio` datetime NOT NULL,
  `Telefone` varchar(13) NOT NULL,
  `WhatsApp` varchar(14) NOT NULL,
  `Mensagem` varchar(500) NOT NULL,
  PRIMARY KEY (`ID_Contato`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`ID_Contato`, `Nome`, `Email`, `Dt_Nasc`, `Dt_Envio`, `Telefone`, `WhatsApp`, `Mensagem`) VALUES
(40, 'WebBrain', 'webbrain@gmail.com', '2000-05-13', '2023-05-13 22:05:56', '(48) 2102-749', '(48) 9.2102-74', 'Soluções em software para gestão pública ágil e eficiente!'),
(39, 'Teste', 'teste@gmail.com', '2000-05-13', '2023-05-13 22:05:25', '(12) 3456-789', '(09) 8.7654-32', 'Teste, teste, teste, teste e mais teste');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
