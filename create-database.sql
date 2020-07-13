DROP DATABASE IF EXISTS `sql_database`;
CREATE DATABASE `sql_database`; 
USE `sql_database`;


CREATE TABLE `user_credentials` (
  `id` varchar(100) NOT NULL,
  `password` varchar(106) NOT NULL,
  PRIMARY KEY (`id`)
); 
INSERT INTO `user_credentials` VALUES ('test','sha256$5adad2b3134d3cc6c91fcf0e44b8a246$5$0a9f6c26b4d7e119e75e3a0564a85b033324c830a10cd63ac87f31c995bc3c64');
INSERT INTO `user_credentials` VALUES ('test2','sha256$5adad2b3134d3cc6c91fcf0e44b8a246$5$0a9f6c26b4d7e119e75e3a0564a85b033324c830a10cd63ac87f31c995bc3c64');



CREATE TABLE `client_information` (
  `id` varchar(100) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `address_1` varchar(100) NOT NULL,
  `address_2` varchar(100) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `state` char(2) NOT NULL,
  `zipcode` int(9) NOT NULL,
  PRIMARY KEY (`id`)
); 
INSERT INTO `client_information` VALUES ('test','Test Testerson','0005 Example Dr','','Houston','TX','77204');
INSERT INTO `client_information` VALUES ('test2','Test Testerson','0005 Example Dr','','Houston','TX','77204');

ALTER TABLE `client_information`
  ADD CONSTRAINT `client_information_fk_1` FOREIGN KEY (`id`) REFERENCES `user_credentials` (`id`);
  
CREATE TABLE `fuel_quote` (
  `id` varchar(100) NOT NULL,
  `quote_id` int(10) NOT NULL AUTO_INCREMENT,
  `gallons_requested` int(10) NOT NULL,
  `address_1` varchar(100) NOT NULL,
  `delivery_date`  varchar(10) NOT NULL,
  `suggested_price` decimal(10,3) NOT NULL,
  `total_amount_due` decimal(10,2) NOT NULL,
  PRIMARY KEY (`quote_id`),
  KEY `id` (`id`)
);
INSERT INTO `fuel_quote` VALUES ('test', 1,'1','0005 Example Dr','2020-06-28',1,5);
INSERT INTO `fuel_quote` VALUES ('test2', 2,'2','0005 Example Dr','2020-06-28',1,5);
INSERT INTO `fuel_quote` VALUES ('test', 3, '3','0005 Example Dr','2020-06-28',1,5);

ALTER TABLE `fuel_quote`
 ADD CONSTRAINT `fuel_quote_fk_1` FOREIGN KEY (`id`) REFERENCES `user_credentials` (`id`);
 
 
