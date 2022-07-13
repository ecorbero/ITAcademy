CREATE SCHEMA IF NOT EXISTS `Spotify` DEFAULT CHARACTER SET utf8;

USE Spotify;

CREATE TABLE IF NOT EXISTS `Spotify`.`usuari` (
  `id_usuari` INT NOT NULL,
  `nom_usuari` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `usuari_premium` TINYINT(1) NULL DEFAULT 0,
  `data_naixament` DATE NULL,
  `sexe` VARCHAR(45) NULL,
  `pais` VARCHAR(45) NULL,
  `codi_postal` INT NULL,
  PRIMARY KEY (`id_usuari`),
  UNIQUE INDEX `id_usuari_UNIQUE` (`id_usuari` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`playlists` (
  `id_playlists` INT NOT NULL,
  `titol` VARCHAR(45) NULL,
  `datacreacio` DATE NULL,
  `activa` TINYINT(1) NULL,
  `dataeliminacio` DATE NULL DEFAULT NULL,
  `id_usuari` INT NULL,
  PRIMARY KEY (`id_playlists`),
  UNIQUE INDEX `id_playlists_UNIQUE` (`id_playlists` ASC) VISIBLE,
  INDEX `playlists_usuari_idx` (`id_usuari` ASC) VISIBLE,
  CONSTRAINT `playlists_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`artista` (
  `id_artista` INT NOT NULL,
  `nom` VARCHAR(45) NULL,
  `imatgeartista` VARCHAR(45) NULL,
  PRIMARY KEY (`id_artista`),
  UNIQUE INDEX `id_artista_UNIQUE` (`id_artista` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`artistesrelacionats` (
  `id_artistesrelacionats` INT NOT NULL,
  `artista1` INT NULL,
  `artsista2` INT NULL,
  PRIMARY KEY (`id_artistesrelacionats`),
  UNIQUE INDEX `id_artistesrelacionats_UNIQUE` (`id_artistesrelacionats` ASC) VISIBLE,
  INDEX `artistesrelacionats1_artsita_idx` (`artista1` ASC) VISIBLE,
  INDEX `artistesrelacionats2_artsita_idx` (`artsista2` ASC) VISIBLE,
  CONSTRAINT `artistesrelacionats1_artsita`
    FOREIGN KEY (`artista1`)
    REFERENCES `Spotify`.`artista` (`id_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `artistesrelacionats2_artsita`
    FOREIGN KEY (`artsista2`)
    REFERENCES `Spotify`.`artista` (`id_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`artistesseguits` (
  `id_artistesseguits` INT NOT NULL,
  `id_usuari` INT NULL,
  `id_arttista` INT NULL,
  PRIMARY KEY (`id_artistesseguits`),
  UNIQUE INDEX `id_artistesseguits_UNIQUE` (`id_artistesseguits` ASC) VISIBLE,
  INDEX `artsistesseguits_usuari_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `artsistesseguits_artista_idx` (`id_arttista` ASC) VISIBLE,
  CONSTRAINT `artsistesseguits_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `artsistesseguits_artista`
    FOREIGN KEY (`id_arttista`)
    REFERENCES `Spotify`.`artista` (`id_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`album` (
  `id_album` INT NOT NULL,
  `nom` VARCHAR(45) NULL,
  `id_artista` INT NULL,
  `any` INT NULL,
  `imatgeportada` VARCHAR(45) NULL,
  PRIMARY KEY (`id_album`),
  UNIQUE INDEX `id_album_UNIQUE` (`id_album` ASC) VISIBLE,
  INDEX `album_artista_idx` (`id_artista` ASC) VISIBLE,
  CONSTRAINT `album_artista`
    FOREIGN KEY (`id_artista`)
    REFERENCES `Spotify`.`artista` (`id_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`cancons` (
  `id_cancons` INT NOT NULL,
  `titol` VARCHAR(45) NULL,
  `id_album` INT NULL,
  `durada` DECIMAL(5,2) NULL,
  `reproduccions` INT NULL,
  PRIMARY KEY (`id_cancons`),
  UNIQUE INDEX `id_cancons_UNIQUE` (`id_cancons` ASC) VISIBLE,
  INDEX `cancons_album_idx` (`id_album` ASC) VISIBLE,
  CONSTRAINT `cancons_album`
    FOREIGN KEY (`id_album`)
    REFERENCES `Spotify`.`album` (`id_album`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`canconsplaylist` (
  `id_canconsplaylist` INT NOT NULL,
  `id_playlist` INT NULL,
  `id_cancons` INT NULL,
  `data` DATE NULL,
  PRIMARY KEY (`id_canconsplaylist`),
  UNIQUE INDEX `id_canconsplaylist_UNIQUE` (`id_canconsplaylist` ASC) VISIBLE,
  INDEX `canconsplaylists_playlist_idx` (`id_playlist` ASC) VISIBLE,
  INDEX `canconsplaylists_cancons_idx` (`id_cancons` ASC) VISIBLE,
  CONSTRAINT `canconsplaylists_playlist`
    FOREIGN KEY (`id_playlist`)
    REFERENCES `Spotify`.`playlists` (`id_playlists`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `canconsplaylists_cancons`
    FOREIGN KEY (`id_cancons`)
    REFERENCES `Spotify`.`cancons` (`id_cancons`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`canconsfavorites` (
  `id_canconsfavorites` INT NOT NULL,
  `id_usuari` INT NULL,
  `id_cancons` INT NULL,
  PRIMARY KEY (`id_canconsfavorites`),
  UNIQUE INDEX `id_canconsfavorites_UNIQUE` (`id_canconsfavorites` ASC) VISIBLE,
  INDEX `canconsfavorites_usuari_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `canconsfavorites_cancons_idx` (`id_cancons` ASC) VISIBLE,
  CONSTRAINT `canconsfavorites_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `canconsfavorites_cancons`
    FOREIGN KEY (`id_cancons`)
    REFERENCES `Spotify`.`cancons` (`id_cancons`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`albumsfavorits` (
  `id_albumsfavorits` INT NOT NULL,
  `id_usuari` INT NULL,
  `id_album` INT NULL,
  PRIMARY KEY (`id_albumsfavorits`),
  UNIQUE INDEX `id_albumsfavorits_UNIQUE` (`id_albumsfavorits` ASC) VISIBLE,
  INDEX `albumsfavorits_usuari_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `albumsfavorits_album_idx` (`id_album` ASC) VISIBLE,
  CONSTRAINT `albumsfavorits_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `albumsfavorits_album`
    FOREIGN KEY (`id_album`)
    REFERENCES `Spotify`.`album` (`id_album`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`targetescredit` (
  `id_targetescredit` INT NOT NULL,
  `numero` INT NULL,
  `datacaducitat` DATE NULL,
  `codiseguretat` VARCHAR(45) NULL,
  PRIMARY KEY (`id_targetescredit`),
  UNIQUE INDEX `id_targetescredit_UNIQUE` (`id_targetescredit` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`paypal` (
  `id_paypal` INT NOT NULL,
  `nomusuari` VARCHAR(45) NULL,
  PRIMARY KEY (`id_paypal`),
  UNIQUE INDEX `id_paypal_UNIQUE` (`id_paypal` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`formapagament` (
  `id_formapagament` INT NOT NULL,
  `nom_pagament` VARCHAR(45) NULL,
  PRIMARY KEY (`id_formapagament`),
  UNIQUE INDEX `idformapagament_UNIQUE` (`id_formapagament` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`subscripcions` (
  `id_subscripcions` INT NOT NULL,
  `data_inci` DATE NULL,
  `data_renovacio` DATE NULL,
  `forma_pagament` INT NULL,
  `targetacredit` INT NULL,
  `paypal` INT NULL,
  `id_usuari` INT NULL,
  PRIMARY KEY (`id_subscripcions`),
  UNIQUE INDEX `id_subscripcions_UNIQUE` (`id_subscripcions` ASC) VISIBLE,
  INDEX `usuari_subscripcions_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `subscripcions_formapagament_idx` (`forma_pagament` ASC) VISIBLE,
  INDEX `subscripcions_targetes_idx` (`targetacredit` ASC) VISIBLE,
  INDEX `subscripcions_paypal_idx` (`paypal` ASC) VISIBLE,
  CONSTRAINT `subscripcions_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `subscripcions_formapagament`
    FOREIGN KEY (`forma_pagament`)
    REFERENCES `Spotify`.`formapagament` (`id_formapagament`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `subscripcions_targetes`
    FOREIGN KEY (`targetacredit`)
    REFERENCES `Spotify`.`targetescredit` (`id_targetescredit`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `subscripcions_paypal`
    FOREIGN KEY (`paypal`)
    REFERENCES `Spotify`.`paypal` (`id_paypal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Spotify`.`pagaments` (
  `id_pagaments` INT NOT NULL,
  `id_subscripcions` INT NULL,
  `data` VARCHAR(45) NULL,
  `total` DECIMAL(8,2) NULL,
  PRIMARY KEY (`id_pagaments`),
  UNIQUE INDEX `id_pagaments_UNIQUE` (`id_pagaments` ASC) VISIBLE,
  INDEX `pagaments_subscripcions_idx` (`id_subscripcions` ASC) VISIBLE,
  CONSTRAINT `pagaments_subscripcions`
    FOREIGN KEY (`id_subscripcions`)
    REFERENCES `Spotify`.`subscripcions` (`id_subscripcions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
