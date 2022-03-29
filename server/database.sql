CREATE DATABASE perntodo;

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

/* Insert values into table with table-name */
INSERT INTO <table-name> (<column1>, <column2>,...)
VALUES (<value1>, <value2>,...)
RETURNING * or <column_name>;

DELETE FROM table_name WHERE condition;

/* SQL UPDATE HTTP/EXPRESS PUT*/
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
