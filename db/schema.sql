CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name TEXT NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);