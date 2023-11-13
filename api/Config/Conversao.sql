create database conversao;

CREATE TABLE `conversao`.`numeroconvertido` (
  `id` int NOT NULL AUTO_INCREMENT,
    `bin` varchar(32) NOT NULL,
  `decimal` int NOT NULL,
  `hexa` varchar(8) NOT NULL,
  `octal` varchar(11) NOT NULL,
  `dataConversao` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO conversao.numeroconvertido (`decimal`,  `octal`, `hexa`, `bin`) VALUES (10, '12', 'A', '1010');
INSERT INTO conversao.numeroconvertido (`decimal`,  `octal`, `hexa`, `bin`) VALUES (15, '17', 'F', '1111');
INSERT INTO conversao.numeroconvertido (`decimal`,  `octal`, `hexa`, `bin`) VALUES (20, '24', '14', '10100');
INSERT INTO conversao.numeroconvertido (`decimal`,  `octal`, `hexa`, `bin`) VALUES (25, '31', '19', '11001');
INSERT INTO conversao.numeroconvertido (`decimal`,  `octal`, `hexa`, `bin`) VALUES (30, '36', '1E', '11110');
INSERT INTO conversao.numeroconvertido (`decimal`,  `octal`, `hexa`, `bin`) VALUES (35, '43', '23', '100011');
INSERT INTO conversao.numeroconvertido (`decimal`,  `octal`, `hexa`, `bin`) VALUES (40, '50', '28', '101000');
INSERT INTO conversao.numeroconvertido (`decimal`,  `octal`, `hexa`, `bin`) VALUES (55, '67', '37', '110111');

select * from conversao.numeroconvertido;