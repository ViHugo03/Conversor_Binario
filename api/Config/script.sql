create database conversao;

CREATE TABLE `conversao`.`numeroConvertido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bin` varchar(32) NOT NULL,
  `decimal` int NOT NULL,
  `hexa` varchar(8) NOT NULL,
  `octal` varchar(11) NOT NULL,
  `dataConversao` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

Create Table `conversao`.`usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) NOT NULL UNIQUE,
  `email` varchar(32) NOT NULL UNIQUE,
  `senha` varchar(250) NOT NULL,
  `dataCadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

INSERT INTO
  `conversao`.`numeroConvertido` (`bin`, `decimal`, `hexa`, `octal`)
VALUES
  ('1', 1, '1', '1'),
  ('10', 2, '2', '2'),
  ('11', 3, '3', '3'),
  ('100', 4, '4', '4'),
  ('101', 5, '5', '5'),
  ('110', 6, '6', '6'),
  ('111', 7, '7', '7'),
  ('1000', 8, '8', '10'),
  ('1001', 9, '9', '11'),
  ('1010', 10, 'A', '12'),
  ('1011', 11, 'B', '13'),
  ('1100', 12, 'C', '14'),
  ('1101', 13, 'D', '15'),
  ('1110', 14, 'E', '16'),
  ('1111', 15, 'F', '17'),
  ('10000', 16, '10', '20'),
  ('10001', 17, '11', '21'),
  ('10010', 18, '12', '22'),
  ('10011', 19, '13', '23'),
  ('10100', 20, '14', '24'),
  ('10101', 21, '15', '25'),
  ('10110', 22, '16', '26'),
  ('10111', 23, '17', '27'),
  ('11000', 24, '18', '30'),
  ('11001', 25, '19', '31'),
  ('11010', 26, '1A', '32'),
  ('11011', 27, '1B', '33'),
  ('11100', 28, '1C', '34'),
  ('11101', 29, '1D', '35'),
  ('11110', 30, '1E', '36'),
  ('11111', 31, '1F', '37'),
  ('100000', 32, '20', '40');

select
  *
from
  conversao.usuario;

select
  *
from
  conversao.numeroConvertido;