DROP DATABASE IF EXISTS `sql_database`;
CREATE DATABASE `sql_database`; 
USE `sql_database`;


CREATE TABLE `user_credentials` (
  `client_id` int(10) NOT NULL,
  `id` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`client_id`)
); 
INSERT INTO `user_credentials` VALUES (1,'test','test');

CREATE TABLE `client_information` (
  `client_id` int(10) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `address_1` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` char(2) NOT NULL,
  `zipcode` int(9) NOT NULL,
  PRIMARY KEY (`client_id`)
); 
INSERT INTO `client_information` VALUES (1,'Test Testerson','0005 Example Dr','Houston','TX','77204');

CREATE TABLE `fuel_quote` (
  `client_id` int(10) NOT NULL,
  `gallons_requested` int(10) NOT NULL,
  `address_1` varchar(100) NOT NULL,
  `delivery_date`  date NOT NULL,
  `suggested_price/gallon` decimal(10,3) NOT NULL,
  `total_amount_due` decimal(10,2) NOT NULL,
  PRIMARY KEY (`client_id`)
);
INSERT INTO `fuel_quote` VALUES (1,'5','0005 Example Dr','2020-06-28',1,5);
