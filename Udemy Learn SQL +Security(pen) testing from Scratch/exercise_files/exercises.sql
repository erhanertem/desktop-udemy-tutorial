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

-- -->ORDER BY
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

-- LESSON 7 DEEPER UNDERSTANDING ON GROUP BY, AGGREGATE FUNCTIONS
CREATE TABLE
  transactions (
    month VARCHAR(50),
    day INT (50),
    amount INT (50),
    branch VARCHAR(50)
  );

INSERT INTO
  transactions (month, day, amount, branch)
VALUES
  ('feb', 13, 124, 'bangalore'),
  ('feb', 17, 20400, 'chicago'),
  ('feb', 212, 320, 'sydney'),
  ('mar', 22, 9600, 'bangalore'),
  ('mar', 16, 5200, 'chicago'),
  ('april', 12, 23, 'sydney'),
  ('jan', 13, 666, 'bangalore'),
  ('may', 2, 3111, 'sydney'),
  ('may', 1, 99999, 'paris'),
  ('jan', 12, 2000, 'paris');

SELECT
  *
FROM
  transactions;

-- -->GROUP BY + SUM/MAX/MIN/AVG/COUNT + HAVING
-- #1
SELECT
  month,
  SUM(amount)
FROM
  transactions
GROUP BY
  month
ORDER BY
  SUM(amount) DESC;

SELECT
  branch,
  SUM(amount)
FROM
  transactions
GROUP BY
  branch;

-- #2
SELECT
  month,
  MAX(amount)
FROM
  transactions
GROUP BY
  month
ORDER BY
  MAX(amount) DESC;

-- #3
SELECT
  month,
  MIN(amount)
FROM
  transactions
GROUP BY
  month
ORDER BY
  MIN(amount) DESC;

SELECT
  branch,
  MIN(amount)
FROM
  transactions
GROUP BY
  branch
ORDER BY
  MIN(amount) DESC;

-- #4
SELECT
  month,
  AVG(amount)
FROM
  transactions
GROUP BY
  month
ORDER BY
  AVG(amount) DESC;

-- #5
SELECT
  COUNT(*),
  month
FROM
  transactions
GROUP BY
  month;

-- #6
SELECT
  month,
  COUNT(*)
FROM
  transactions
GROUP BY
  month
HAVING
  COUNT(*)<2;

--#7
SELECT
  month,
  SUM(amount)
FROM
  transactions
WHERE
  branch='bangalore'
GROUP BY
  month;

--#8
SELECT
  month,
  SUM(amount)
FROM
  transactions
WHERE
  branch='bangalore'
GROUP BY
  month
HAVING
  SUM(amount)<1000;

SELECT
  month,
  SUM(amount)
FROM
  transactions
WHERE
  branch IN ('sydney', 'paris')
GROUP BY
  month
HAVING
  SUM(amount)<1000
ORDER BY
  SUM(amount) DESC;

--#9
SELECT
  branch,
  SUM(amount)
FROM
  transactions
WHERE
  month='feb'
GROUP BY
  branch
HAVING
  SUM(amount)>4000;

-- LESSON 8 BUILDING SQL SUBQUERIES
CREATE TABLE
  citizenloc (name VARCHAR(50), location VARCHAR(50));

INSERT INTO
  citizenloc (name, location)
VALUES
  ('rahul', 'california'),
  ('george', 'california'),
  ('flex', 'texas'),
  ('steve', 'california'),
  ('husain', 'chicago');

CREATE TABLE
  citizens (name VARCHAR(50), age INT (3), exp INT (3));

INSERT INTO
  citizens (name, age, exp)
VALUES
  ('rahul', 34, 6),
  ('george', 34, 6),
  ('flex', 23, 15),
  ('steve', 24, 7),
  ('husain', 10, 0);

-- #1
-- SINGLE OUTPUT SUBQUERY RESULTS
SELECT
  name,
  age
FROM
  citizens
WHERE
  name=(
    SELECT
      name
    FROM
      citizenloc
    WHERE
      location='texas'
  );

-- #2
-- MULTIPLE OUTPUT QUERY RESULTS
SELECT
  name,
  age
FROM
  citizens
WHERE
  name IN (
    SELECT
      name
    FROM
      citizenloc
    WHERE
      location='california'
  );

SELECT
  name,
  location
FROM
  citizenloc
WHERE
  name IN (
    SELECT
      name
    FROM
      citizens
    WHERE
      age=34
  );

-- LESSON 9 SQL TABLE RELATIONSHIPS
SELECT
  c.name,
  cl.location,
  c.age
FROM
  citizens c
  INNER JOIN citizenloc cl ON c.name=cl.name
WHERE
  cl.location='california';

CREATE TABLE
  company (
    name VARCHAR(50),
    branch VARCHAR(20),
    employees INT (10)
  );

INSERT INTO
  company (name, branch, employees)
VALUES
  ('qaclickacademy', 'us', 20),
  ('google', 'us', 500),
  ('yahoo', 'canada', 250),
  ('google', 'india', 400),
  ('qaclickacademy', 'india', 75),
  ('qaclickacademy', 'uk', 10),
  ('qaclickacademy', 'canada', 30),
  ('yahoo', 'us', 200),
  ('yahoo', 'india', 150),
  ('facebook', 'us', 50);

CREATE TABLE
  established (name VARCHAR(50), year INT (4));

INSERT INTO
  established (name, year)
VALUES
  ('qaclickacademy', 2010),
  ('google', 1990),
  ('yahoo', 1992),
  ('facebook', 1992);

SELECT
  e.year,
  c.name,
  COUNT(*)
FROM
  company c
  INNER JOIN established e ON e.name=c.name
GROUP BY
  c.name
HAVING
  e.year LIKE '19%';

SELECT
  e.year,
  c.name,
  SUM(c.employees)
FROM
  company c
  INNER JOIN established e ON e.name=c.name
GROUP BY
  c.name
HAVING
  e.year LIKE '19%';

SELECT
  e.year,
  c.name,
  MIN(c.employees)
FROM
  company c
  INNER JOIN established e ON e.name=c.name
GROUP BY
  c.name;

-- -----------------
CREATE TABLE
  studentdetailsro (
    name VARCHAR(50),
    id INT (10),
    age INT (10),
    gender ENUM ("male", "female"),
    location VARCHAR(10)
  );

INSERT INTO
  studentdetailsro (name, id, age, gender, location)
VALUES
  ('sai', 1, 12, 'female', 'spain'),
  ('baba', 2, 15, 'male', 'newyork'),
  ('ram', 3, 15, 'male', 'spain'),
  ('raghu', 4, 15, 'female', 'newyork'),
  ('ajay', 5, 12, 'male', 'nijeria'),
  ('marthru', 6, 12, 'male', 'spain');

CREATE TABLE
  grades (grade VARCHAR(2), id INT (10));

INSERT INTO
  grades (grade, id)
VALUES
  ('A', 2),
  ('B', 3),
  ('A', 4),
  ('C', 5),
  ('B', 7);

-- #1 GET THE STUDENT DETAILS OF RO WITH RESULTS WHO PASSED IN EXAMS
SELECT
  *
FROM
  studentdetailsro s
  INNER JOIN grades g ON g.id=s.id;

-- #2 GET THE STUDENT DETAILS OF RO WITH RESULT WHO APPEARED IN EXAMS
SELECT
  *
FROM
  studentdetailsro s
  LEFT JOIN grades g ON g.id=s.id;

-- #3 GET THE ALL STUDENT DETAILS WITH RESULT WHO PASSED IN EXAM
SELECT
  *
FROM
  studentdetailsro s
  RIGHT JOIN grades g ON g.id=s.id
WHERE
  name IS NOT NULL;

-- LESSON 10 SQL STRING FUNCTIONS AND VIEWS
-- -->VIEWS
CREATE VIEW
  google_info AS
SELECT
  *
FROM
  company
WHERE
  name='google';

SELECT
  *
FROM
  google_info;

SELECT
  *
FROM
  company;

SELECT
  AVG(employees)
FROM
  company;

-- company names where employees are more than the avg count
CREATE VIEW
  avg_company AS
SELECT
  name,
  AVG(employees)
FROM
  company
WHERE
  employees>(
    SELECT
      AVG(employees)
    FROM
      company
  )
GROUP BY
  name;

SELECT
  *
FROM
  avg_company;

SELECT DISTINCT
  p.name
FROM
  (
    SELECT
      name,
      employees
    FROM
      company
    WHERE
      employees>(
        SELECT
          AVG(employees)
        FROM
          company
      )
  ) p;

CREATE VIEW
  avg_company AS
SELECT
  name,
  AVG(employees)
FROM
  company
GROUP BY
  name
HAVING
  AVG(employees)>(
    SELECT
      AVG(employees)
    FROM
      company
  );

-- -->STRING FUNCTIONS
-- ->CONCAT()
SELECT
  CONCAT (name, branch) AS aggregate
FROM
  company;

-- ->SUBSTRING()
SELECT
  SUBSTRING(name, 8)
FROM
  company
WHERE
  name='qaclickacademy';

SELECT
  SUBSTRING(name, 8, 5)
FROM
  company
WHERE
  name='qaclickacademy';

-- ->REPLACE()
SELECT
  REPLACE (name, 'q', '11')
FROM
  company
WHERE
  name='qaclickacademy';

UPDATE company
SET
  name=REPLACE (name, 'q', 'XXXX')
WHERE
  name='qaclickacademy';

SELECT
  *
FROM
  company;

-- ->LENGTH()
SELECT
  name,
  LENGTH (name)
FROM
  company;

-- ->TRIM()
SELECT
  TRIM('king ');

-- ->LIMIT()
SELECT
  *
FROM
  company
LIMIT
  2, 1;

SELECT
  *
FROM
  company;

-- LESSON 11 MISC SQL KEYWORDS
CREATE TABLE
  college (id INT (50), name VARCHAR(50));

INSERT INTO
  college (id, name)
VALUES
  (53, 'tim'),
  (223, 'tam'),
  (574, 'sam'),
  (422, 'ram'),
  (983, 'joe'),
  (5399, 'ten'),
  (5399, 'ten'),
  (574, null),
  (5399, 'ten'),
  (57545, 'sam'),
  (98003, 'joepp'),
  (643, 'ben');

CREATE TABLE
  results (id INT (50), name VARCHAR(50));

INSERT INTO
  results (id, name)
VALUES
  (9893, 'tina'),
  (53, 'tim'),
  (24, 'harsh'),
  (223, 'tam'),
  (575459, 'sam'),
  (887, 'jack'),
  (5444, 'ten'),
  (98003, 'joepp');

-- -->UNION()
SELECT
  *
FROM
  college;

SELECT
  *
FROM
  results;

SELECT
  *
FROM
  college
UNION
(
  SELECT
    *
  FROM
    results
);

-- -->UNION ALL()
SELECT
  *
FROM
  college
UNION ALL
(
  SELECT
    *
  FROM
    results
);

-- -->INTERSECT()
SELECT
  *
FROM
  college
WHERE
  id IN (
    SELECT
      id
    FROM
      results
  );

SELECT
  *
FROM
  college
INTERSECT
(
  SELECT
    *
  FROM
    results
);

-- -->EXISTS()
SELECT
  *
FROM
  college
WHERE
  EXISTS (
    SELECT
      *
    FROM
      college
    WHERE
      name='qwRam'
  );

-- -->CASE()
CREATE TABLE
  marks (score INT (50), name VARCHAR(50));

INSERT INTO
  marks
VALUES
  (45, 'tina'),
  (23, 'tim'),
  (64, 'harsh'),
  (65, 'tam'),
  (98, 'sam'),
  (34, 'jack');

SELECT
  score,
  CASE name
    WHEN 'tim' THEN score*2
    WHEN 'sam' THEN score -25
    WHEN 'tina' THEN score*3
    ELSE score
  END AS new_score
FROM
  marks;

-- LESSON 12 DATA CONSTRAINTS FOR DB VALIDATIONS
-- -->NOT NULL
CREATE TABLE
  constab (flightname VARCHAR(20), flightid INT NOT NULL);

CREATE TABLE
  constab1 (flightname VARCHAR(20), flightid INT);

DESC constab;

INSERT INTO
  constab
VALUES
  ('abcd', 12);

INSERT INTO
  constab
VALUES
  ('abcd', null);

INSERT INTO
  constab1
VALUES
  ('abcd', null);

-- -->DEFAULT
CREATE TABLE
  constab2 (name VARCHAR(20), age INT DEFAULT 25);

INSERT INTO
  constab2 (name)
VALUES
  ('brian');

-- -->UNIQUE
CREATE TABLE
  constab3 (name VARCHAR(20), id INT UNIQUE);

INSERT INTO
  constab3 (name, id)
VALUES
  ('jack', 21);

INSERT INTO
  constab3 (name, id)
VALUES
  ('mack', 21);

INSERT INTO
  constab3 (name, id)
VALUES
  ('mack', 22);

-- -->CHECK
CREATE TABLE
  constab4 (name VARCHAR(20), id INT, CHECK (id<=500));

INSERT INTO
  constab4 (name, id)
VALUES
  ('jack', 501);

INSERT INTO
  constab4 (name, id)
VALUES
  ('jack', 401);

-- -->PRIMARY KEY
CREATE TABLE
  empdb (
    empid INT PRIMARY KEY,
    name VARCHAR(20),
    branch VARCHAR(20)
  );

CREATE TABLE
  empdb1 (
    empid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    branch VARCHAR(20)
  );

-- LESSON 13 FOREIGN KEY/PRIMARY KEY
-- -->FOREIGN KEY
CREATE TABLE
  orders (
    orderid INT AUTO_INCREMENT PRIMARY KEY,
    customerid INT,
    amount INT NOT NULL,
    date TIMESTAMP DEFAULT NOW (),
    FOREIGN KEY (customerid) REFERENCES cdetails (customerid)
  );

CREATE TABLE
  cdetails (
    customerid INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(100),
    zipcode INT (4)
  );

INSERT INTO
  cdetails (address, zipcode)
VALUES
  ('MELBOURN', 9262),
  ('TEXAS', 1234);

INSERT INTO
  orders (customerid, amount)
VALUES
  (1, 2000),
  (2, 20),
  (1, 120),
  (3, 60);

INSERT INTO
  orders (customerid, amount)
VALUES
  (3, 60);

-- -->ON DELETE CASCADE
CREATE TABLE
  orders (
    orderid INT AUTO_INCREMENT PRIMARY KEY,
    customerid INT,
    amount INT NOT NULL,
    date TIMESTAMP DEFAULT NOW (),
    FOREIGN KEY (customerid) REFERENCES cdetails (customerid) ON DELETE CASCADE
  );

DELETE FROM cdetails
WHERE
  customerid=3;

-- LESSON 14 PRACTICE EXERCISES
SELECT
  *
FROM
  BOOK_INFORMATION;

SELECT
  BOOK_ID
FROM
  BOOK_INFORMATION
WHERE
  PRICE>20;

SELECT
  BOOK_ID,
  BOOK_TITLE
FROM
  BOOK_INFORMATION
WHERE
  BOOK_TITLE LIKE 'A%';

SELECT
  BOOK_ID,
  BOOK_TITLE,
  PRICE
FROM
  BOOK_INFORMATION
ORDER BY
  PRICE DESC;

INSERT INTO
  BOOK_INFORMATION
VALUES
  (20, '1KEYDATA SQL TUTORIAL', 15);

DROP TABLE BOOK_INFORMATION;

DELETE FROM BOOK_INFORMATION
WHERE
  BOOK_ID=15;

UPDATE BOOK_INFORMATION
SET
  PRICE=20
WHERE
  BOOK_TITLE='ELEMENTARY SCHOOL GUIDE';

SELECT
  MAX(PRICE)
FROM
  BOOK_INFORMATION;

SELECT
  BOOK_ID,
  BOOK_TITLE,
  PRICE
FROM
  BOOK_INFORMATION
WHERE
  PRICE BETWEEN 15 AND 20;

-- LESSON 16~19 SQL INJECTION
-- ADD ORDER BY 2 ETC TO THE END OF QUERY LINK ON THE BROWSER TO ACCESS THE EXTEND OF THE TABEL BEING DEALT. IF INTERNAL ERR RESPONSE IS RELEASED, ITS A GOOD CANDIDATE FOR SQL INJECTION AS IT INCLUDES INFORMATION AS TO TYPE OF DBMS USED, AND THE NATURE OF ERROR ETC.
-- NEVER TAKE IN RAW INPUT FROM THE USER INPUTS. IF INPUT DIRECTLY USED ONE MAY INCLUDE a makeup id along with markypass OR 1=1 statement to retireve user list.
-- https://owasp.org/www-project-top-ten/
-- LESSON 20 SECURITY TESTING BASIC TERMINOLOGIES