/*
Navicat MySQL Data Transfer

Source Server         : nestsql
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : nestsql

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-10-15 23:57:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastName` varchar(25) NOT NULL,
  `firstName` varchar(25) NOT NULL,
  `age` int(11) NOT NULL,
  `fullName` varchar(25) NOT NULL,
  `birthday` date NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'lastName', 'firstName', '23', '1571154776229', '2019-10-14', '0');
