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