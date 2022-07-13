CREATE SCHEMA IF NOT EXISTS `Pizzeria` DEFAULT CHARACTER SET utf8;

USE `Pizzeria`;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`provincia` (
  `id_provincia` INT NOT NULL AUTO_INCREMENT,
  `nom_provincia` VARCHAR(45) NULL,
  PRIMARY KEY (`id_provincia`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`localitat` (
  `id_localitat` INT NOT NULL AUTO_INCREMENT,
  `nom_localitat` VARCHAR(45) NULL,
  `id_provincia` INT NULL,
  PRIMARY KEY (`id_localitat`),
  INDEX `id_provincia_idx` (`id_provincia` ASC) VISIBLE,
  CONSTRAINT `id_provincia`
    FOREIGN KEY (`id_provincia`)
    REFERENCES `Pizzeria`.`provincia` (`id_provincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`client` (
  `id_client` INT NOT NULL AUTO_INCREMENT,
  `nom_client` VARCHAR(45) NULL,
  `cognom_client` VARCHAR(45) NULL,
  `adreca_client` VARCHAR(45) NULL,
  `codipostal_client` INT NULL,
  `id_localitat` INT NULL,
  `id_provincia` INT NULL,
  `telefon_client` VARCHAR(45) NULL,
  PRIMARY KEY (`id_client`),
  INDEX `id_localitat_idx` (`id_localitat` ASC) VISIBLE,
  INDEX `id_provincia_idx` (`id_provincia` ASC) VISIBLE,
  CONSTRAINT `client_localitat`
    FOREIGN KEY (`id_localitat`)
    REFERENCES `Pizzeria`.`localitat` (`id_localitat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `client_provincia`
    FOREIGN KEY (`id_provincia`)
    REFERENCES `Pizzeria`.`provincia` (`id_provincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`botiga` (
  `id_botiga` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NULL,
  `adreca` VARCHAR(45) NULL,
  `codipostal` INT NULL,
  `id_localitat` INT NULL,
  `id_provincia` INT NULL,
  PRIMARY KEY (`id_botiga`),
  INDEX `id_localitat_idx` (`id_localitat` ASC) VISIBLE,
  INDEX `id_provincia_idx` (`id_provincia` ASC) VISIBLE,
  CONSTRAINT `botiga_localitat`
    FOREIGN KEY (`id_localitat`)
    REFERENCES `Pizzeria`.`localitat` (`id_localitat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `botiga_provincia`
    FOREIGN KEY (`id_provincia`)
    REFERENCES `Pizzeria`.`provincia` (`id_provincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`empleat` (
  `id_empleat` INT NOT NULL AUTO_INCREMENT,
  `id_botiga` INT NULL,
  `nom` VARCHAR(45) NULL,
  `cognoms` VARCHAR(45) NULL,
  `nif` VARCHAR(45) NULL,
  `telefon` VARCHAR(45) NULL,
  `carrec` VARCHAR(45) NULL,
  PRIMARY KEY (`id_empleat`),
  INDEX `id_botiga_idx` (`id_botiga` ASC) VISIBLE,
  CONSTRAINT `empleat_botiga`
    FOREIGN KEY (`id_botiga`)
    REFERENCES `Pizzeria`.`botiga` (`id_botiga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`vendes_repartiment` (
  `id_vendes_repartiment` INT NOT NULL AUTO_INCREMENT,
  `id_empleat` INT NULL,
  `data_llirament` DATE NULL DEFAULT (current_date),
  `hora_llirament` TIME NULL DEFAULT (current_time),
  PRIMARY KEY (`id_vendes_repartiment`),
  INDEX `id_empleat_idx` (`id_empleat` ASC) VISIBLE,
  CONSTRAINT `id_empleat`
    FOREIGN KEY (`id_empleat`)
    REFERENCES `Pizzeria`.`empleat` (`id_empleat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`comandes` (
  `id_comandes` INT NOT NULL AUTO_INCREMENT,
  `id_botiga` INT NULL,
  `data` DATE NULL DEFAULT (current_date),
  `hora` TIME NULL DEFAULT (current_time),
  `venda_repartiment` TINYINT(1) NULL,
  `venda_botiga` TINYINT(1) NULL,
  `id_vendes_repartiment` INT NULL,
  `id_client` INT NULL,
  PRIMARY KEY (`id_comandes`),
  INDEX `id_botiga_idx` (`id_botiga` ASC) VISIBLE,
  INDEX `id_vendes_repartiment_idx` (`id_vendes_repartiment` ASC) VISIBLE,
  INDEX `comandes_client_idx` (`id_client` ASC) VISIBLE,
  CONSTRAINT `comandes_botiga`
    FOREIGN KEY (`id_botiga`)
    REFERENCES `Pizzeria`.`botiga` (`id_botiga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comandes_vendes_repartiment`
    FOREIGN KEY (`id_vendes_repartiment`)
    REFERENCES `Pizzeria`.`vendes_repartiment` (`id_vendes_repartiment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comandes_client`
    FOREIGN KEY (`id_client`)
    REFERENCES `Pizzeria`.`client` (`id_client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`pizzacategoria` (
  `id_pizzacategoria` INT NOT NULL AUTO_INCREMENT,
  `nom_categoria` VARCHAR(45) NULL,
  PRIMARY KEY (`id_pizzacategoria`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`pizzanom` (
  `id_pizzanom` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NULL,
  `id_pizzacategoria` INT NULL,
  PRIMARY KEY (`id_pizzanom`),
  INDEX `id_pizzacategoria_idx` (`id_pizzacategoria` ASC) VISIBLE,
  CONSTRAINT `pizzanom_pizzacategoria`
    FOREIGN KEY (`id_pizzacategoria`)
    REFERENCES `Pizzeria`.`pizzacategoria` (`id_pizzacategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`producte` (
  `id_producte` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NULL,
  `descripcio` VARCHAR(45) NULL,
  `imatge` VARCHAR(45) NULL,
  `preu` DECIMAL(8,2) NULL,
  `id_pizza` INT NULL,
  PRIMARY KEY (`id_producte`),
  INDEX `id_pizza_idx` (`id_pizza` ASC) VISIBLE,
  CONSTRAINT `producte_pizza`
    FOREIGN KEY (`id_pizza`)
    REFERENCES `Pizzeria`.`pizzanom` (`id_pizzanom`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`detallcomanda` (
  `id_detallcomanda` INT NOT NULL AUTO_INCREMENT,
  `id_comanda` INT NULL,
  `id_producte` INT NULL,
  `quantitat` INT NULL,
  PRIMARY KEY (`id_detallcomanda`),
  INDEX `id_comanda_idx` (`id_comanda` ASC) VISIBLE,
  INDEX `id_producte_idx` (`id_producte` ASC) VISIBLE,
  CONSTRAINT `id_comanda`
    FOREIGN KEY (`id_comanda`)
    REFERENCES `Pizzeria`.`comandes` (`id_comandes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_producte`
    FOREIGN KEY (`id_producte`)
    REFERENCES `Pizzeria`.`producte` (`id_producte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Pizzeria`.`comandes` (
  `id_comandes` INT NOT NULL AUTO_INCREMENT,
  `id_botiga` INT NULL,
  `data` DATE NULL,
  `hora` TIME NULL,
  `venda_repartiment` TINYINT(1) NULL,
  `venda_botiga` TINYINT(1) NULL,
  `id_vendes_repartiment` INT NULL,
  PRIMARY KEY (`id_comandes`),
  INDEX `id_botiga_idx` (`id_botiga` ASC) VISIBLE,
  INDEX `id_vendes_repartiment_idx` (`id_vendes_repartiment` ASC) VISIBLE,
  CONSTRAINT `comandes_botiga`
    FOREIGN KEY (`id_botiga`)
    REFERENCES `Pizzeria`.`botiga` (`id_botiga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comandes_vendes_repartiment`
    FOREIGN KEY (`id_vendes_repartiment`)
    REFERENCES `Pizzeria`.`vendes_repartiment` (`id_vendes_repartiment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `Pizzeria`;

INSERT INTO provincia (nom_provincia) 
values 
	('Barcelona'),
	('Girona'),
	('Lleida'),
	('Tarragona')
    ;
INSERT INTO localitat (nom_localitat, id_provincia) 
values 
	('Barcelona', 1),
	('Badalona', 1),
	('Hospitalet', 1),
	('santa Coloma', 1),
	('Girona', 2),
	("Platja d'Aro", 2),
	('Lleida', 3),
	('Tarragona', 4),
	('Hospitalet Infant', 2)
    ;
INSERT INTO client (nom_client, cognom_client, adreca_client, codipostal_client, id_localitat, id_provincia, telefon_client) 
values 
	('client 1','cognom 1','adreça 1', 08011, 1, 1, 914559901),
	('client 2','cognom 2','adreça 2', 08012, 2, 1, 924559901),
	('client 3','cognom 3','adreça 3', 08013, 3, 1, 934559901),
	('client 4','cognom 4','adreça 4', 08017, 4, 1, 944559901),
	('client 5','cognom 5','adreça 5', 08057, 5, 2, 954559901),
	('client 6','cognom 6','adreça 6', 08016, 6, 2, 964559901),
	('client 7','cognom 7','adreça 7', 08017, 7, 3, 974559901),
	('client 8','cognom 8','adreça 8', 08018, 8, 4, 984559901)
    ;
INSERT INTO botiga (nom, adreca, codipostal, id_localitat, id_provincia) 
values 
	('botiga 1', 'botiga adreça 1', 08011, 1, 1),
	('botiga 2', 'botiga adreça 2', 08012, 2, 1),
	('botiga 3', 'botiga adreça 3', 08013, 3, 1),
	('botiga 4', 'botiga adreça 4', 08017, 4, 1),
	('botiga 5', 'botiga adreça 5', 08057, 5, 2),
	('botiga 6', 'botiga adreça 6', 08016, 6, 2),
	('botiga 7', 'botiga adreça 7', 08017, 7, 3),
	('botiga 8', 'botiga adreça 8', 08018, 8, 4)
    ;
INSERT INTO empleat (id_botiga, nom, cognoms, nif, telefon, carrec) 
values 
	(1, 'empleat 1', 'cognomn nom 1', '400001h', 99911191, 'repartidor'),
	(2, 'empleat 2', 'cognomn nom 2', '400002h', 999111912, 'repartidor'),
	(3, 'empleat 3' ,'cognomn nom 3', '400003h', 999111913, 'repartidor'),
	(4, 'empleat 4', 'cognomn nom 4', '400004h', 999111914, 'repartidor'),
	(5, 'empleat 5', 'cognomn nom 5', '400005h', 999111915, 'repartidor'),
	(6, 'empleat 6', 'cognomn nom 6', '400002h', 999111912, 'repartidor'),
	(7, 'empleat 7' ,'cognomn nom 7', '400003h', 999111913, 'repartidor'),
	(8, 'empleat 8', 'cognomn nom 8', '400004h', 999111914, 'repartidor'),
	(8, 'empleat 9', 'cognomn nom 9', '400005h', 999111915, 'repartidor'),
	(1, 'empleat 10', 'cognomn nom 10', '400006h', 999111916, 'cuiner'),
	(2, 'empleat 11', 'cognomn nom 11', '4000071h', 999111917, 'cuiner'),
	(3, 'empleat 12', 'cognomn nom 12', '400008h', 999111918, 'cuiner'),
	(4, 'empleat 13', 'cognomn nom 13', '400006h', 999111916, 'cuiner'),
	(5, 'empleat 14', 'cognomn nom 14', '4000071h', 999111917, 'cuiner'),
	(6, 'empleat 15', 'cognomn nom 15', '400008h', 999111918, 'cuiner'),
	(7, 'empleat 16', 'cognomn nom 16', '400006h', 999111916, 'cuiner'),
	(8, 'empleat 17', 'cognomn nom 17', '4000071h', 999111917, 'cuiner'),
	(8, 'empleat 18', 'cognomn nom 18', '400008h', 999111918, 'cuiner')
    ;
INSERT INTO vendes_repartiment (id_empleat) 
values 
	(1),
	(2),
	(3),
	(4),
	(5),
	(6),
	(7),
	(8),
	(9),
	(10)
    ;
    
INSERT INTO comandes (id_botiga, venda_repartiment, venda_botiga, id_vendes_repartiment,id_client) 
values 
	(1, 1, 0, 1, 1),
	(1, 1, 0, 2, 2),
	(2, 1, 0, 3, 3),
	(3, 1, 0, 4, 4),
	(4, 1, 0, 5, 5),
	(5, 1, 0, 6, 6),
	(6, 1, 0, 7, 6),
	(7, 1, 0, 8, 8),
	(8, 1, 0, 10, 1),
	(1, 0, 1, null, 2),
	(1, 0, 1, null, 3),
	(2, 0, 1, null, 4),
	(3, 0, 1, null, 5),
	(4, 0, 1, null, 6),
	(5, 0, 1, null, 7),
	(6, 0, 1, null, 8),
	(7, 0, 1, null, 1)
    ;
       
INSERT INTO pizzacategoria (nom_categoria) 
values 
	('vegetal'),
	('pollastre'),
	('vedella')
    ;
        
INSERT INTO pizzanom (nom, id_pizzacategoria) 
values 
	('vegetal pinya', 1),
	('vegetal boniato', 1),
	('pollastre aletes', 2),
	('pollastre picant', 2),
	('vedella salaami', 3),
	('vedella pebre', 3)
    ;   
INSERT INTO producte (nom, descripcio, imatge, preu, id_pizza) 
values 
	('pizza', 'descripcio pizza', 'url', 9.99, 1),
	('pizza', 'descripcio pizza', 'url', 9.99, 2),
	('pizza', 'descripcio pizza', 'url', 9.99, 3),
	('pizza', 'descripcio pizza', 'url', 9.99, 4),
	('pizza', 'descripcio pizza', 'url', 9.99, 5),
	('begudes', 'descripcio beguda', 'url', 2.99, null),
	('hamburguesa', 'descripcio hamburgesa', 'url', 6, null)
    ; 
INSERT INTO detallcomanda (id_comanda, id_producte, quantitat) 
values 
	(1, 1, 1),
	(1, 2, 2),
	(1, 3, 1),
	(2, 5, 1),
	(3, 6, 1),
	(4, 3, 1),
	(5, 7, 1),
	(6, 3, 1),
	(7, 3, 1),
	(8, 2, 1),
	(9, 5, 1),
	(10, 6, 1),
	(11, 7, 1),
	(12, 3, 1),
	(13, 3, 1),
	(14, 1, 1),
	(15, 3, 1),
	(16, 4, 1),
	(17, 5, 1)
    ;
INSERT INTO comandes (id_botiga, venda_repartiment, venda_botiga, id_vendes_repartiment) 
values 
	(1, 1, 0, 10),
	(1, 1, 0, 9),
	(1, 1, 0, 8),
	(2, 1, 0, 7),
	(3, 1, 0, 6),
	(4, 1, 0, 5),
	(5, 1, 0, 4),
	(6, 1, 0, 3),
	(7, 1, 0, 2),
	(8, 1, 0, 1),
	(1, 0, 1, null),
	(1, 0, 1, null),
	(1, 0, 1, null),
	(2, 0, 1, null),
	(3, 0, 1, null),
	(4, 0, 1, null),
	(5, 0, 1, null),
	(6, 0, 1, null),
	(7, 0, 1, null),
	(8, 0, 1, null)
    ;
    
    
-- Llista quants productes del tipus 'begudes' s'han venut en una determinada localitat

SELECT localitat.nom_localitat, producte.nom, id_comandes, id_botiga, data, hora
FROM pizzeria.comandes
JOIN detallcomanda ON comandes.id_comandes = detallcomanda.id_comanda
JOIN producte ON detallcomanda.id_producte = producte.id_producte
JOIN client ON client.id_client = comandes.id_client
JOIN localitat ON localitat.id_localitat = client.id_localitat
WHERE producte.id_producte = 6 AND localitat.id_localitat = 2;

SELECT empleat.id_empleat, empleat.nom, id_comandes,  data, hora
FROM pizzeria.comandes
JOIN botiga ON comandes.id_botiga = botiga.id_botiga
JOIN empleat ON botiga.id_botiga = empleat.id_botiga
WHERE empleat.id_empleat = 1 ;