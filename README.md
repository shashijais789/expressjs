# expressjs
Express JS Learnig try outs


#Table 

mysql> desc fdi;
+-----------------+--------------+------+-----+---------+----------------+
| Field           | Type         | Null | Key | Default | Extra          |
+-----------------+--------------+------+-----+---------+----------------+
| id              | int(11)      | NO   | PRI | NULL    | auto_increment |
| policyNo        | bigint(20)   | NO   |     | NULL    |                |
| firstName       | varchar(45)  | NO   |     | NULL    |                |
| lastName        | varchar(45)  | NO   |     | NULL    |                |
| isPortalUsed    | tinyint(4)   | NO   |     | NULL    |                |
| isOLRKnown      | tinyint(4)   | NO   |     | NULL    |                |
| serviceRating   | tinyint(4)   | NO   |     | NULL    |                |
| recommendRating | tinyint(4)   | NO   |     | NULL    |                |
| description     | varchar(100) | NO   |     | NULL    |                |
| feedback_date   | date         | NO   |     | NULL    |                |
+-----------------+--------------+------+-----+---------+----------------+

#DB Command to execute after table creation
1. mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
2. mysql> flush privileges;


#Start the express service

1. npm install
2. nodemon index.js



