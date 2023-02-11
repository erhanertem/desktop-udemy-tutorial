-- LESSON 3 CRUD OPERATIONS ON DATABASES
-- -->CREATE DB
CREATE DATABASE qadbt;

-- -->POINT TO AXCTIVE DB
USE qadbt;

-- -->DELETE DB
DROP DATABASE qadbt;

-- -->CREATE TABLE
CREATE TABLE
  employee_info (
    id INT,
    name VARCHAR(20),
    location VARCHAR(20),
    age INT
  );

-- -->LIST TABLE COLUMNS
DESCRIBE employee_info;

DESC employee_info;

-- -->INSERT TUPPLES
INSERT INTO
  employee_info
VALUES
  (1, 'sam', 'newjersey', 21),
  (2, 'nam', 'florida', 18),
  (3, 'lam', 'california', 24),
  (4, 'tam', 'charlotte', 68),
  (5, 'zam', 'texas', 8);

-- -->SELECT TUPPLES
SELECT
  name,
  id,
  location,
  age
FROM
  employee_info;

SELECT
  *
FROM
  employee_info;

SELECT
  name,
  age
FROM
  employee_info;

-- -->DELETE TABLE
DROP TABLE employee_info;

-- LESSON 4 ALTERING TABLE SCHEMA OPERATIONS
-- -->ADD COLUMN TO TABLE
ALTER TABLE employee_info ADD gender VARCHAR(10);

DESC employee_info;

-- -->MODIFY COLUMN 
ALTER TABLE employee_info MODIFY gender VARCHAR(20);

DESC employee_info;

-- -->MODIFY COLUMN NAME + COLUMN DEFINITION
ALTER TABLE employee_info CHANGE gender gender_name VARCHAR(30);

DESC employee_info;

-- -->DELETE COLUMN
ALTER TABLE employee_info
DROP gender;

-- -->ADD COLUMN VALUES
SELECT
  *
FROM
  employee_info;

UPDATE employee_info
SET
  gender='male'
WHERE
  id=1;

UPDATE employee_info
SET
  gender='female'
WHERE
  gender IS NULL;

-- -->DELETE TABLE ROW
DELETE FROM employee_info
WHERE
  id=5;

-- LESSON 5 SQL LOGICAL OPERATORS
-- -->SELECT DISTINCT EXPRESSION
SELECT
  age,
  gender
FROM
  employee_info;

SELECT DISTINCT
  gender
FROM
  employee_info;

-- -->EQUALITY OPERATORS
SELECT
  name
FROM
  employee_info
WHERE
  location='newjersey';

-- -->AND/OR/IN/BETWEEN/NOT LOGIC OPERATORS
SELECT
  name
FROM
  employee_info
WHERE
  location='newjersey'
  AND age>23;

SELECT
  name
FROM
  employee_info
WHERE
  (
    location='newjersey'
    AND age>23
  )
  OR location='charlotte';

SELECT
  *
FROM
  employee_info
WHERE
  id=1
  OR id=2;

SELECT
  *
FROM
  employee_info
WHERE
  id=1
  OR location='charlotte';

-- SELECT * FROM employee_info WHERE id %2=1;
-- SELECT * FROM employee_info WHERE id %2=0;
SELECT
  *
FROM
  employee_info;

SELECT
  name
FROM
  employee_info
WHERE
  age IN (23, 24, 25);

SELECT
  *
FROM
  employee_info
WHERE
  age>=21
  AND age<=99;

SELECT
  *
FROM
  employee_info
WHERE
  age BETWEEN 21 AND 99;

SELECT
  *
FROM
  employee_info
WHERE
  age<25;

SELECT
  *
FROM
  employee_info
WHERE
  age NOT BETWEEN 25 AND 1000;

SELECT
  *
FROM
  employee_info
WHERE
  id NOT BETWEEN 1 AND 3;

-- LESSON 6 REGULAR EXPRESSIONS WITH SQL QUERIES
-- ->Load world.sql dataset in the mysql server via mysql CLI
-- SOURCE c:/world.sql;
-- ->SWITCH DATABASE
USE world;

SELECT
  *
FROM
  city;

-- -->LIKE/ILIKE WITH REGEX WILDCARDS
SELECT
  name,
  countrycode
FROM
  city
WHERE
  countrycode LIKE 'A%';

SELECT
  name,
  countrycode
FROM
  city
WHERE
  countrycode LIKE '__T%';

SELECT
  name,
  countrycode
FROM
  city
WHERE
  countrycode LIKE '_A%';

-- ->SWITCH DATABASE
USE qadbt;

SELECT
  *
FROM
  employee_info;

SELECT
  *
FROM
  employee_info
ORDER BY
  name DESC;

SELECT
  *
FROM
  employee_info
ORDER BY
  id;