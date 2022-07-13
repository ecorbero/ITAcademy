CREATE SCHEMA IF NOT EXISTS `Optica` DEFAULT CHARACTER SET utf8 ;

USE optica;

CREATE TABLE IF NOT EXISTS `Optica`.`clients` (
  `clients_id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NULL,
  `adreca` VARCHAR(45) NULL,
  `telefon` INT NULL,
  `email` VARCHAR(45) NULL,
  `data_registre` DATE NULL DEFAULT (current_date),
  `client_prescriptor` INT NULL DEFAULT NULL,
  PRIMARY KEY (`clients_id`),
  INDEX `client_prescriptor_idx` (`client_prescriptor` ASC) VISIBLE,
  UNIQUE INDEX `clients_id_UNIQUE` (`clients_id` ASC) VISIBLE,
  CONSTRAINT `client_prescriptor`
    FOREIGN KEY (`client_prescriptor`)
    REFERENCES `Optica`.`clients` (`clients_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Optica`.`empleats` (
  `empleat_id` INT NOT NULL AUTO_INCREMENT,
  `nom_empleat` VARCHAR(45) NULL,
  PRIMARY KEY (`empleat_id`),
  UNIQUE INDEX `empleat_id_UNIQUE` (`empleat_id` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Optica`.`proveidor` (
  `proveidor_id` INT NOT NULL AUTO_INCREMENT,
  `nom_Proveidor` VARCHAR(45) NULL,
  `adreca_carrer` VARCHAR(45) NULL,
  `adreca_numero` INT NULL,
  `adreca_pis` INT NULL,
  `adreca_porta` INT NULL,
  `adreca_ciutat` VARCHAR(45) NULL,
  `adreca_codi_postal` VARCHAR(45) NULL,
  `ardeca_pais` VARCHAR(45) NULL,
  `telefon` INT NULL,
  `fax` INT NULL,
  `nif` VARCHAR(45) NULL,
  PRIMARY KEY (`proveidor_id`),
  UNIQUE INDEX `proveidor_id_UNIQUE` (`proveidor_id` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Optica`.`marca` (
  `marca_id` INT NOT NULL AUTO_INCREMENT,
  `nom_marca` VARCHAR(45) NULL,
  `proveidor_id` INT NULL,
  PRIMARY KEY (`marca_id`),
  INDEX `proveidor_id_idx` (`proveidor_id` ASC) VISIBLE,
  UNIQUE INDEX `marca_id_UNIQUE` (`marca_id` ASC) VISIBLE,
  CONSTRAINT `proveidor_id`
    FOREIGN KEY (`proveidor_id`)
    REFERENCES `Optica`.`proveidor` (`proveidor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Optica`.`ulleres` (
  `ulleres_id` INT NOT NULL AUTO_INCREMENT,
  `nom_ullera` VARCHAR(45) NULL,
  `marca_id` INT NULL,
  `graduacio_esq` DECIMAL(8,2) NULL,
  `graduacio_dreta` DECIMAL(8,2) NULL,
  `tipus_muntura` VARCHAR(45) NULL,
  `color_muntura` VARCHAR(45) NULL,
  `color_vidres` VARCHAR(45) NULL,
  `preu` DECIMAL(8,2) NULL,
  PRIMARY KEY (`ulleres_id`),
  INDEX `marca_id_idx` (`marca_id` ASC) VISIBLE,
  UNIQUE INDEX `ulleres_id_UNIQUE` (`ulleres_id` ASC) VISIBLE,
  CONSTRAINT `marca_id`
    FOREIGN KEY (`marca_id`)
    REFERENCES `Optica`.`marca` (`marca_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Optica`.`vendes` (
  `venda_id` INT NOT NULL AUTO_INCREMENT,
  `ullera_id` INT NULL,
  `client_id` INT NULL,
  `empleat_id` INT NULL,
  `data_venda` DATE NULL DEFAULT (current_date),
  `quantitat_ulleres` INT NULL,
  PRIMARY KEY (`venda_id`),
  INDEX `ullera_id_idx` (`ullera_id` ASC) VISIBLE,
  INDEX `client_id_idx` (`client_id` ASC) VISIBLE,
  INDEX `empleat_id_idx` (`empleat_id` ASC) VISIBLE,
  UNIQUE INDEX `venda_id_UNIQUE` (`venda_id` ASC) VISIBLE,
  CONSTRAINT `ullera_id`
    FOREIGN KEY (`ullera_id`)
    REFERENCES `Optica`.`ulleres` (`ulleres_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `client_id`
    FOREIGN KEY (`client_id`)
    REFERENCES `Optica`.`clients` (`clients_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `empleat_id`
    FOREIGN KEY (`empleat_id`)
    REFERENCES `Optica`.`empleats` (`empleat_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SELECT * FROM optica.clients;

INSERT INTO clients (nom, adreca, telefon, email,data_registre) 
values 
	('Paco','Carrer Brut 23', 932119694, 'email1@mail.com', current_date()),
	('Pepe','Carrer Net 23', 932129694, 'email2@mail.com', current_date()),
	('Paca','Carrer Cou 23', 222119694, 'email3@mail.com', current_date()),
	('Pepa','Carrer Cau 2', 727119694, 'email4@mail.com', current_date()),
	('Popo','Carrer Ciu 3', 288119694, 'emai51@mail.com', current_date()) ;
    
INSERT INTO clients (nom, adreca, telefon, email,data_registre, client_prescriptor ) 
values 	
	('Tete','Carrer Llis 23', 932219694, 'email5@mail.com', current_date(), 1),
	('Tote','Carrer llos 23', 932229694, 'email6@mail.com', current_date(), 1),
	('Toti','Carrer llus 23', 222441969, 'emai73@mail.com', current_date(), 2),
	('Tute','Carrer Mau 2', 72711494, 'email8@mail.com', current_date(), 3),
	('tutos','Carrer Nu 3', 28814694, 'emai58@mail.com', current_date(), 4) ;
    
SELECT * FROM optica.empleats;

INSERT INTO empleats (nom_empleat) 
values 
	('Treballador Numero u'),
	('Treballador Numero dos'),
	('Treballador Numero tres'),
	('Treballador Numero quatre'),
	('Treballador Numero cins') ;

SELECT * FROM optica.proveidor;

INSERT INTO proveidor (nom_Proveidor, adreca_carrer, adreca_numero, adreca_pis,adreca_porta, adreca_ciutat, adreca_codi_postal, ardeca_pais,telefon, fax,nif) 
values 
	('Nom Proveidor 1','Carrer Proveidor', 1,1,1, 'Cornella', 08080, 'Congo', 932119694, null ,'7389189h' ),
    ('Nom Proveidor 2','Carrer Proveidor', 2,2,2, 'Cornella', 08082, 'Congo', 932129694, null ,'73339189h' ),
    ('Nom Proveidor 3','Carrer Proveidor', 3,3,3, 'Cornella', 08083, 'Congo', 932229694, 93222694 ,'73339h' ) ;    
    
SELECT * FROM optica.marca;
INSERT INTO marca (nom_marca,proveidor_id) 
values 
	('Marca u', 1),
	('Marca dos', 1),
	('Marca tres', 2),
	('Marca quatre', 2),
	('Marca cinc', 3) ;
    
SELECT * FROM optica.ulleres;

INSERT INTO ulleres (nom_ullera,marca_id,graduacio_esq,graduacio_dreta,tipus_muntura,color_muntura,color_vidres,preu) 
values 
	('Ullera 1', 1, 0, 0,'Paata','Negra','Verd', 115),
	('Ullera 2', 1, 1, 1,'ferro','groc','marró', 115),
	('Ullera 3', 1, 2, 2,'alumini','blau','transp', 115),
	('Ullera 4', 1, 3, 3,'Paata','vermell','transp', 115),
	('Ullera 5', 1, 4, 4,'acer','blau','transp', 115),
	('Ullera 6', 2, 2, 2,'alumini','Negra','transp', 115),
	('Ullera 7', 2, 0, 3,'fusta','Negra','transp', 115),
	('Ullera 8', 3, 2, 0,'Paata','Negra','transp', 115),
	('Ullera 9', 4, 0, 0,'Paata','Negra','transp', 115),
	('Ullera 10', 5, 0, 0,'Paata','Negra','Verd', 115) ;
    
SELECT * FROM optica.vendes;

INSERT INTO vendes (ullera_id,client_id,empleat_id,quantitat_ulleres) 
values 
	(1, 6, 5, 1),
	(2, 5, 4, 1),
	(3, 4, 3, 1),
	(4, 3, 2, 1),
	(5, 2, 1, 1),
	(6, 1, 1, 1),
	(7, 10, 2, 1),
	(8, 9, 3, 1),
	(1, 8, 4, 1),
	(2, 7, 5, 1),
	(3, 6, 1, 1),
	(4, 5, 1, 1),
	(5, 4, 1, 1),
	(1, 3, 2, 1),
	(2, 2, 2, 1),
	(3, 1, 1, 1),
	(4, 1, 1, 1),
	(5, 3, 3, 2),
	(6, 7, 1, 1),
	(1, 4, 1, 1),
	(1, 1, 1, 1) ;
    
    -- Nivell 1
-- Llista el total de compres d'un client

USE optica;

SELECT data_venda, ulleres.nom_ullera, quantitat_ulleres, ulleres.preu AS preu_unitari, quantitat_ulleres * ulleres.preu AS preu_total
FROM vendes
JOIN ulleres ON vendes.ullera_id = ulleres.ulleres_id
WHERE client_id = 1
ORDER BY data_venda;

-- Llista les diferents ulleres que ha venut un empleat durant un any

SELECT data_venda, ulleres.nom_ullera, quantitat_ulleres, ulleres.preu AS preu_unitari, quantitat_ulleres * ulleres.preu AS preu_total
FROM vendes
JOIN ulleres ON vendes.ullera_id = ulleres.ulleres_id
WHERE empleat_id = 1 AND data_venda BETWEEN CAST('2022-01-01' AS DATE) AND CAST('2022-12-31' AS DATE);

-- Llista els diferents proveïdors que han subministrat ulleres venudes amb èxit per l'òptica

SELECT nom_Proveidor, SUM(vendes.quantitat_ulleres) as ulleres_venudes
FROM proveidor
JOIN marca ON proveidor.proveidor_id = marca.proveidor_id
JOIN ulleres ON marca.marca_id = ulleres.marca_id
JOIN vendes ON ulleres.ulleres_id = vendes.ullera_id
WHERE vendes.quantitat_ulleres > 0
GROUP BY nom_Proveidor;