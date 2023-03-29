# ltp_trabs
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bancoVenda
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `bancoVenda` ;

-- -----------------------------------------------------
-- Schema bancoVenda
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bancoVenda` DEFAULT CHARACTER SET utf8 ;
USE `bancoVenda` ;

-- -----------------------------------------------------
-- Table `bancoVenda`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoVenda`.`clientes` (
  `codcli` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `uf` VARCHAR(45) NOT NULL,
  `clientescol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`codcli`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bancoVenda`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoVenda`.`produtos` (
  `codpro` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descri` VARCHAR(45) NOT NULL,
  `qtda` INT NOT NULL,
  `preco` DECIMAL(2) NOT NULL,
  `custo` DECIMAL(2) NOT NULL,
  PRIMARY KEY (`codpro`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bancoVenda`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoVenda`.`compras` (
  `codcomp` INT NOT NULL AUTO_INCREMENT,
  `codcli` INT NOT NULL,
  `codpro` INT NOT NULL,
  `qtda` INT NULL,
  `preco` DECIMAL(2) NULL,
  `datacomp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`codcomp`, `codcli`, `codpro`),
  INDEX `fk_clientes_has_produtos_produtos1_idx` (`codpro` ASC) VISIBLE,
  INDEX `fk_clientes_has_produtos_clientes_idx` (`codcli` ASC) VISIBLE,
  CONSTRAINT `fk_clientes_has_produtos_clientes`
    FOREIGN KEY (`codcli`)
    REFERENCES `bancoVenda`.`clientes` (`codcli`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_produtos_produtos1`
    FOREIGN KEY (`codpro`)
    REFERENCES `bancoVenda`.`produtos` (`codpro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
