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

CREATE TABLE
  specialtitles (`deliminator's` INT, `ALTER` INT, `DELETE` INT);

SHOW TABLES;

DESC customer;