MSQL Download https://dev.mysql.com/downloads/installer/

CREATE TABLE `lic`.`fdi` (
  `id` INT NOT NULL AUTOINCREAMENT,
  `policyNo` BIGINT(20) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `isPortalUsed` tinyint(4) NOT NULL,
  `isOLRKnown` tinyint(4) NOT NULL,
  `serviceRating` tinyint(4) NOT NULL,
  `recommendRating` tinyint(4) NOT NULL,
  `description` varchar(45) NOT NULL,
  `feedback_date` date NOT NULL,
PRIMARY KEY (`id`));

# expressjs
Express JS Learnig try outs

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
mysql> flush privileges;

