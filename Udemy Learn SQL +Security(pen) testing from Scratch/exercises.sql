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