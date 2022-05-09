<<<<<<< HEAD
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) DEFAULT NULL,
  `product_brand` varchar(45) DEFAULT NULL,
  `product_price` float DEFAULT NULL,
  `product_date` date DEFAULT NULL,
  `product_origin` varchar(45) DEFAULT NULL,
  `product_quantity` int DEFAULT NULL,
  `product_description` varchar(45) DEFAULT NULL,
  `product_seller_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `product_to_seller_idx` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Iphone13','Apple',799,'2021-10-08','US',1,'newest iphone',3),(2,'PS5','Sony',499,'2022-03-05','Japan',1,'best game console',3),(3,'Beef','Asian family',4.99,'2022-04-02','US',1,'fresh beef',3),(4,'Puffs','Mills',10,'2021-12-11','US',11,'cocoa puffs',2),(5,'Lakers Shirt','Nike',39,'2021-10-08','China',1,'james number',3),(6,'Offwhite Hoodie','Offwhite',299,'2021-12-31','China',1,'RIP ',3),(7,'Waterproof Jacket','Levis',98,'2021-11-10','China',1,'keep warm',2),(8,'XPS','Dell',1599,'2022-01-01','China',1,'slim and powerful',2),(9,'Nikon Camera','Nikon',3099,'2021-04-01','Japan',1,'discount now',2),(10,'Boost running','Adidas',159,'2022-03-14','Germany',2,'best running shoes ',2),(11,'Diet Coke','CokeCola',8,'2022-04-24','US',12,'Enjoy yourself',2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-03 21:56:41
=======
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) DEFAULT NULL,
  `product_brand` varchar(45) DEFAULT NULL,
  `product_price` float DEFAULT NULL,
  `product_date` date DEFAULT NULL,
  `product_origin` varchar(45) DEFAULT NULL,
  `product_quantity` int DEFAULT NULL,
  `product_description` varchar(45) DEFAULT NULL,
  `product_seller_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `product_to_seller_idx` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Iphone13','Apple',799,'2021-10-08','US',1,'newest iphone',3),(2,'PS5','Sony',499,'2022-03-05','Japan',1,'best game console',3),(3,'Beef','Asian family',4.99,'2022-04-02','US',1,'fresh beef',3),(4,'Puffs','Mills',10,'2021-12-11','US',11,'cocoa puffs',2),(5,'Lakers Shirt','Nike',39,'2021-10-08','China',1,'james number',3),(6,'Offwhite Hoodie','Offwhite',299,'2021-12-31','China',1,'RIP ',3),(7,'Waterproof Jacket','Levis',98,'2021-11-10','China',1,'keep warm',2),(8,'XPS','Dell',1599,'2022-01-01','China',1,'slim and powerful',2),(9,'Nikon Camera','Nikon',3099,'2021-04-01','Japan',1,'discount now',2),(10,'Boost running','Adidas',159,'2022-03-14','Germany',2,'best running shoes ',2),(11,'Diet Coke','CokeCola',8,'2022-04-24','US',12,'Enjoy yourself',2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-03 21:56:41
>>>>>>> f1c00ab16c053535af36947acf5695dee82c6b47
