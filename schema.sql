DROP DATABASE IF EXISTS `cityhop`;
CREATE DATABASE `cityhop`;

use cityhop;

CREATE TABLE users (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  email VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
  first_name VARCHAR(30),
   credit_card_number integer (16) NOT NULL,
   zip integer (5) not null
);

INSERT INTO users (email, last_name, first_name, credit_card_number, zip)
VALUES ("sasi@gmail.com", "kmv", "sasi", 1234567890123456, 30001);

INSERT INTO users (email, last_name, first_name, credit_card_number, zip)
VALUES ("angela@gmail.com", "thompson", "angela", 1234567890123457, 30021);

INSERT INTO users (email, last_name, first_name, credit_card_number, zip)
VALUES ("tony@gmail.com", "scott", "tony", 1234567890123458, 30002);

select * from users; 
