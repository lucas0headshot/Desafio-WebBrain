-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 13-Maio-2023 às 06:18
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
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`ID_Contato`, `Nome`, `Email`, `Dt_Nasc`, `Dt_Envio`, `Telefone`, `WhatsApp`, `Mensagem`) VALUES
(1, 'Lucas Teixeira Ronchi', 'lucas0headshot@gmail.com', '0000-00-00', '0000-00-00 00:00:00', '21', '0', 'sasa'),
(9, 'Lucas Teixeira Ronchi', 'lucas0headshot@gmail.com', '0000-00-00', '0000-00-00 00:00:00', '1212', '1212', 'asasas'),
(21, 'Lucas Teixeira Ronchi', 'lucas0headshot@gmail.com', '1111-11-11', '2023-05-13 03:05:53', '121', '0', 'aaa'),
(15, 'Lucas Teixeira Ronchi', 'lucas0headshot@gmail.com', '0000-00-00', '2023-05-13 00:05:56', '121', '0', 'asa'),
(23, 'Lucas Teixeira Ronchi', 'lucas0headshot@gmail.com', '1111-11-11', '2023-05-13 03:05:37', '(11) 1111-111', '(11) 11111-111', 'a');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
