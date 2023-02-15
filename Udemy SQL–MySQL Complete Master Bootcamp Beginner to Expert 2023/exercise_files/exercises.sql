-- LESSON 4 SELECT STATEMENT
SHOW TABLES;

USE northwind;

SELECT
  *
FROM
  employees;

SELECT
  1+1;

SELECT
  10/(21 -1);

SELECT
  'Hello';

SELECT
  firstname,
  'great employee',
  8*10
FROM
  employees;

SELECT
  *
FROM
  orders;

SELECT
  employeeid,
  orderdate
FROM
  orders;

SELECT
  donuts,
  orderdate
FROM
  orders;

SELECT
  'donuts',
  orderdate
FROM
  orders;

SELECT
  67,
  orderdate
FROM
  orders;

-- LESSON 5 DATABASE
CREATE DATABASE IF NOT EXISTS shop;

SHOW DATABASES;

DROP DATABASE IF EXISTS shop;

USE shop;

SELECT
  DATABASE ();

-- LESSON 6 CREATE TABLE
-- IMPORTANT! IF NOT EXISTS HELP PREVENT PREMATURE STOP OF THE EXECUTED SQL BLOCK
CREATE TABLE
  IF NOT EXISTS students (
    student_id INT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    phone_number INT,
    student_email VARCHAR(20)
  );

CREATE TABLE
  IF NOT EXISTS students (
    student_id INT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    phone_number INT,
    student_email VARCHAR(20)
  );

CREATE TABLE
  IF NOT EXISTS students1 (
    student_id INT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    phone_number INT,
    student_email VARCHAR(20)
  );

CREATE TABLE
  IF NOT EXISTS customer (
    `customerid` VARCHAR(5),
    `companyname` VARCHAR(50)
  );

-- CREATE TABLE
--   specialtitles (`deliminator's` INT, `ALTER` INT, `DELETE` INT);
SHOW TABLES;

DESC customer;

-- LESSON 7 DATA TYPES
CREATE TABLE
  IF NOT EXISTS customer2 (`customerid` NUMERIC, `companyname` VARCHAR(50));

INSERT INTO
  customer2 (customerid)
VALUES
  (10);

INSERT INTO
  customer2 (customerid)
VALUES
  (10000000000000000000000);

INSERT INTO
  customer2 (customerid)
VALUES
  (10.2);

INSERT INTO
  customer2 (customerid)
VALUES
  (-10.2);

CREATE TABLE
  IF NOT EXISTS customer3 (
    `customerid` NUMERIC(65, 2),
    `companyname` VARCHAR(50)
  );

INSERT INTO
  customer3 (customerid)
VALUES
  (10);

INSERT INTO
  customer3 (customerid)
VALUES
  (10000000000000000000000.22);

INSERT INTO
  customer3 (customerid)
VALUES
  (10.2);

INSERT INTO
  customer3 (customerid)
VALUES
  (-10.2);

INSERT INTO
  customer3 (customerid)
VALUES
  (-10.223);

CREATE TABLE
  IF NOT EXISTS grades (grade DECIMAL(5, 2), studentname VARCHAR(50));

CREATE TABLE
  test (field FLOAT (6, 3));

INSERT INTO
  test
VALUES
  (494);

INSERT INTO
  test
VALUES
  (49.494);

CREATE TABLE
  test1 (field REAL (4, 2));

INSERT INTO
  test1
VALUES
  (49.494);

INSERT INTO
  test1
VALUES
  (49494);

INSERT INTO
  test1
VALUES
  (49.4);

CREATE TABLE
  test2 (field REAL);

INSERT INTO
  test2
VALUES
  (49.494);

INSERT INTO
  test2
VALUES
  (49.4);

INSERT INTO
  test2
VALUES
  (12149.4);

INSERT INTO
  test2
VALUES
  (12149.41121);

CREATE TABLE
  shoes (
    brand_name VARCHAR(40),
    size ENUM ('40', '70', 'Small', 'Large')
  );

INSERT INTO
  shoes
VALUES
  ('Terry Ma', '70'),
  ('Zara', '40'),
  ('Nike', '45');

INSERT INTO
  shoes
VALUES
  ('Terry Ma', '70'),
  ('Zara', '40'),
  ('Nike', 'Large');

CREATE TABLE
  competition (
    participants
    SET
      ('ERIC', 'MIKE', 'JOHN', 'AISHA', 'TOMMY'),
      team VARCHAR(50),
      score INT
  );

INSERT INTO
  competition (participants, team, score)
VALUES
  ('ERIC,AISHA', 'A', 10),
  ('JOHN,TOMMY', 'C', 12),
  ('MIKE', 'B', 22);

-- LESSON 8 INSERT QUERY
CREATE TABLE
  customers_1 (
    customerID INT NOT NULL,
    customerName VARCHAR(50),
    customerAddress VARCHAR(255),
    PRIMARY KEY (customerID)
  );

INSERT INTO
  customers_1 (customerID, customerName, customerAddress)
VALUES
  (12, 'Addas', 'Baba street');

INSERT INTO
  customers_1
VALUES
  (13, 'Zaddas', 'Baba street');

INSERT INTO
  customers_1
VALUES
  (14, 'Taddas', 'TBaba street'),
  (15, 'STaddas', 'SBaba street'),
  (16, 'DTaddas', 'DTBaba street');

INSERT INTO
  customers_1
VALUES
  (18, '', 'XTBaba street');

INSERT INTO
  customers_1 (customerID, customerAddress)
VALUES
  (17, 'ADTBaba street');

-- LESSON 9 CANDIDATE, SURROGATE, PRIMARY, ALTERNATIVE & FOREIGN KEY