CREATE SCHEMA IF NOT EXISTS `Youtube` DEFAULT CHARACTER SET utf8 ;
USE `Youtube`;

CREATE TABLE IF NOT EXISTS `Youtube`.`usuari` (
  `id_usuari` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `nom_usuari` VARCHAR(45) NULL,
  `data_naixement` DATE NULL,
  `sex` VARCHAR(1) NULL,
  `pais` VARCHAR(45) NULL,
  `codi_postal` INT NULL,
  `subsrcipcio` INT NULL,
  PRIMARY KEY (`id_usuari`),
  UNIQUE INDEX `id_usuari_UNIQUE` (`id_usuari` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`etiquetes` (
  `id_etiquetes` INT NOT NULL AUTO_INCREMENT,
  `nom-etiqueta` VARCHAR(45) NULL,
  PRIMARY KEY (`id_etiquetes`),
  UNIQUE INDEX `id_etiquetes_UNIQUE` (`id_etiquetes` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`estats_videos` (
  `id_estats_videos` INT NOT NULL AUTO_INCREMENT,
  `nom_estat` VARCHAR(45) NULL,
  PRIMARY KEY (`id_estats_videos`),
  UNIQUE INDEX `id_estats_videos_UNIQUE` (`id_estats_videos` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`videos` (
  `id_videos` INT NOT NULL AUTO_INCREMENT,
  `id_usuari` INT NULL,
  `titol` VARCHAR(45) NULL,
  `descripcio` VARCHAR(45) NULL,
  `grandaria` INT NULL,
  `url` VARCHAR(45) NULL,
  `durada` INT NULL,
  `thumbnail` VARCHAR(45) NULL,
  `reproduccions` INT NULL,
  `likes` INT NULL,
  `dislikes` INT NULL,
  `id_estatvideo` INT NULL,
  `id_etiqueta` INT NULL,
  `data_creacio` DATETIME(5) NULL,
  PRIMARY KEY (`id_videos`),
  UNIQUE INDEX `id_videos_UNIQUE` (`id_videos` ASC) VISIBLE,
  INDEX `video_usuari_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `video_estat_idx` (`id_estatvideo` ASC) VISIBLE,
  INDEX `video_etiuqueta_idx` (`id_etiqueta` ASC) VISIBLE,
  CONSTRAINT `video_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `video_estat`
    FOREIGN KEY (`id_estatvideo`)
    REFERENCES `Youtube`.`estats_videos` (`id_estats_videos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `video_etiuqueta`
    FOREIGN KEY (`id_etiqueta`)
    REFERENCES `Youtube`.`etiquetes` (`id_etiquetes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`comentaris` (
  `id_comentaris` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(45) NULL,
  `id_video` INT NULL,
  `id_usuari` INT NULL,
  `datahora` DATETIME NULL,
  PRIMARY KEY (`id_comentaris`),
  UNIQUE INDEX `id_comentaris_UNIQUE` (`id_comentaris` ASC) VISIBLE,
  INDEX `comentari_video_idx` (`id_video` ASC) VISIBLE,
  INDEX `likescomentaris_usuari_idx` (`id_usuari` ASC) VISIBLE,
  CONSTRAINT `comentari_video`
    FOREIGN KEY (`id_video`)
    REFERENCES `Youtube`.`videos` (`id_videos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `likescomentaris_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`likescomentaris` (
  `id_likescomentaris` INT NOT NULL AUTO_INCREMENT,
  `id_usuari` INT NULL,
  `id_comentari` INT NULL,
  `datahora` DATETIME NULL,
  PRIMARY KEY (`id_likescomentaris`),
  UNIQUE INDEX `idlikes_comentaris_UNIQUE` (`id_likescomentaris` ASC) VISIBLE,
  INDEX `likescomentaris_usuari_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `likescomentaris_comentari_idx` (`id_comentari` ASC) VISIBLE,
  CONSTRAINT `likes_comentaris_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `likescomentaris_comentari`
    FOREIGN KEY (`id_comentari`)
    REFERENCES `Youtube`.`comentaris` (`id_comentaris`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`canal` (
  `id_canal` INT NOT NULL AUTO_INCREMENT,
  `id_usuari` INT NULL,
  `nom` VARCHAR(45) NULL,
  `descripcio` VARCHAR(45) NULL,
  `data_creacio` DATE NULL,
  PRIMARY KEY (`id_canal`),
  UNIQUE INDEX `id_canal_UNIQUE` (`id_canal` ASC) VISIBLE,
  INDEX `canal_usuari_idx` (`id_usuari` ASC) VISIBLE,
  CONSTRAINT `canal_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`videoscanal` (
  `id_videoscanal` INT NOT NULL AUTO_INCREMENT,
  `id_canal` INT NULL,
  `id_video` INT NULL,
  PRIMARY KEY (`id_videoscanal`),
  UNIQUE INDEX `id_videoscanal_UNIQUE` (`id_videoscanal` ASC) VISIBLE,
  INDEX `videocanal_canal_idx` (`id_canal` ASC) VISIBLE,
  INDEX `videocanal_video_idx` (`id_video` ASC) VISIBLE,
  CONSTRAINT `videocanal_canal`
    FOREIGN KEY (`id_canal`)
    REFERENCES `Youtube`.`canal` (`id_canal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `videocanal_video`
    FOREIGN KEY (`id_video`)
    REFERENCES `Youtube`.`videos` (`id_videos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`playlists` (
  `id_playlists` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NULL,
  `id_usuari` INT NULL,
  `data` DATE NULL,
  `estat` VARCHAR(45) NULL,
  PRIMARY KEY (`id_playlists`),
  UNIQUE INDEX `id_playlists_UNIQUE` (`id_playlists` ASC) VISIBLE,
  INDEX `playlist_usuari_idx` (`id_usuari` ASC) VISIBLE,
  CONSTRAINT `playlist_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`videos_playlist` (
  `id_videos_playlist` INT NOT NULL AUTO_INCREMENT,
  `id_playlist` INT NULL,
  `id_video` INT NULL,
  PRIMARY KEY (`id_videos_playlist`),
  UNIQUE INDEX `id_videos_playlist_UNIQUE` (`id_videos_playlist` ASC) VISIBLE,
  INDEX `videos_playlist_idx` (`id_playlist` ASC) VISIBLE,
  INDEX `playlist_videos_idx` (`id_video` ASC) VISIBLE,
  CONSTRAINT `videos_playlist`
    FOREIGN KEY (`id_playlist`)
    REFERENCES `Youtube`.`playlists` (`id_playlists`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `playlist_videos`
    FOREIGN KEY (`id_video`)
    REFERENCES `Youtube`.`videos` (`id_videos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`likes` (
  `id_likes` INT NOT NULL AUTO_INCREMENT,
  `id_usuari` INT NULL,
  `datahora` DATETIME NULL,
  `id_video` INT NULL,
  PRIMARY KEY (`id_likes`),
  UNIQUE INDEX `id_likes_UNIQUE` (`id_likes` ASC) VISIBLE,
  INDEX `like_usuari_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `like_video_idx` (`id_video` ASC) VISIBLE,
  CONSTRAINT `like_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `like_video`
    FOREIGN KEY (`id_video`)
    REFERENCES `Youtube`.`videos` (`id_videos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `Youtube`.`dislikes` (
  `id_dislikes` INT NOT NULL AUTO_INCREMENT,
  `id_usuari` INT NULL,
  `datahora` DATETIME NULL,
  `id_video` INT NULL,
  PRIMARY KEY (`id_dislikes`),
  UNIQUE INDEX `id_dislikes_UNIQUE` (`id_dislikes` ASC) VISIBLE,
  INDEX `dislike_usuari_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `dislike_videos_idx` (`id_video` ASC) VISIBLE,
  CONSTRAINT `dislike_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `Youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `dislike_videos`
    FOREIGN KEY (`id_video`)
    REFERENCES `Youtube`.`videos` (`id_videos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

