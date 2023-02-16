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

-- LESSON 9 PRIMARY, ALTERNATIVE & FOREIGN KEY
-- PRIMARY KEY
CREATE TABLE
  customers_2 (
    customerID INT NOT NULL, -- PRIMARY KEY
    customerCode VARCHAR(10) UNIQUE, -- ALTERNATIVE KEY
    customerName VARCHAR(50),
    customerAddress VARCHAR(255),
    PRIMARY KEY (customerID)
  );

CREATE TABLE
  customers_3 (
    customerID INT AUTO_INCREMENT PRIMARY KEY,
    customerCode VARCHAR(10) UNIQUE, -- ALTERNATIVE KEY
    customerName VARCHAR(50),
    customerAddress VARCHAR(255)
  );

-- LESSON 10 PRIMARY & FOREIGN KEY CONSTRAINTS
-- -->PRIMARY KEY
CREATE TABLE
  users1 (
    userID INT,
    username VARCHAR(50),
    password VARCHAR(255),
    PRIMARY KEY (userID, username) -- multiple primary_keys
  );

DESC users1;

CREATE TABLE
  users2 (
    userID INT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255)
  );

DESC users2;

ALTER TABLE users2
DROP PRIMARY KEY;

CREATE TABLE
  persons (
    personID INT NOT NULL,
    personName VARCHAR(50),
    Person_Address VARCHAR(255)
  );

DESC persons;

ALTER TABLE persons ADD PRIMARY KEY (personID);

-- -->FOREIGN KEY
CREATE TABLE
  customers (
    customerID INT NOT NULL,
    customerName VARCHAR(50),
    customerAddress VARCHAR(255),
    PRIMARY KEY (customerID)
  );

CREATE TABLE
  Orders (
    orderID INT NOT NULL,
    orderNumber INT NOT NULL,
    customerID INT,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (customerID) REFERENCES customers (customerID)
  );

INSERT INTO
  customers
VALUES
  (10, 'Peter Dav', '23 Mall Street');

INSERT INTO
  orders (orderID, orderNumber, customerID)
VALUES
  (01, 14, 10),
  (02, 15, 10);

INSERT INTO
  orders
VALUES
  (03, 14, 9);

INSERT INTO
  orders
VALUES
  (04, 14, 10);

CREATE TABLE
  Orders2 (
    orderID INT NOT NULL,
    orderNumber INT NOT NULL,
    customerID INT,
    PRIMARY KEY (OrderID),
    CONSTRAINT fk_customerID FOREIGN KEY (customerID) REFERENCES customers (customerID)
  );

CREATE TABLE
  Order2 (
    orderID INT NOT NULL,
    orderNumber INT NOT NULL,
    customerID INT,
    PRIMARY KEY (OrderID)
  );

ALTER TABLE Order2 ADD FOREIGN KEY (customerID) REFERENCES customers (customerID);

ALTER TABLE persons ADD CHECK (personID>=100);

CREATE TABLE
  customersZ (
    customerID INT NOT NULL,
    customerName VARCHAR(50),
    customerAddress VARCHAR(255),
    PRIMARY KEY (customerID)
  );

CREATE TABLE
  OrdersZ (
    orderID INT NOT NULL,
    orderNumber INT NOT NULL,
    customerID INT,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (customerID) REFERENCES customersZ (customerID) ON DELETE CASCADE
  );

ALTER TABLE OrdersZ
DROP COLUMN orderNumber;

SHOW
CREATE TABLE
  OrdersZ;

ALTER TABLE OrdersZ
DROP FOREIGN KEY ordersz_ibfk_1;

-- LESSON 11 REVISIT SELECT STATEMENT
SELECT
  *
FROM
  customers;

SELECT
  customerID,
  address
FROM
  customers;

SELECT
  companyname,
  contactname,
  address
FROM
  customers;

-- LESSON 12 ALIAS - AS
SELECT
  companyname AS 'Customer Name'
FROM
  customers;

SELECT
  companyname AS CustomerName
FROM
  customers;

SELECT
  20+50+30 AS Addition;

SELECT
  20*100 AS 'Multiplication';

SELECT
  20/2 Division;

-- SELECT
--   5%2 'Modulus';
-- LESSON 13 CONCAT() FUNCTION
SELECT
  CONCAT ('HELLO', ' ', 'WORLD') txt;

SELECT
  CONCAT (FirstName, ' ', LastName) fullname
FROM
  employees;

-- LESSON 14 ORDER BY
SELECT
  CONCAT (FirstName, ' ', LastName) fullname
FROM
  employees
ORDER BY
  fullname;

SELECT
  CONCAT (FirstName, ' ', LastName) fullname
FROM
  employees
ORDER BY
  fullname DESC;

SELECT
  productname,
  unitprice
FROM
  products
ORDER BY
  unitprice;

SELECT
  productname,
  unitprice
FROM
  products
ORDER BY
  unitprice ASC;

SELECT
  CONCAT (firstname, ' ', lastname) employeename,
  salary
FROM
  employees
ORDER BY
  salary DESC;

SELECT
  firstname,
  lastname,
  CONCAT ('$', FORMAT (salary, 2)),
  salary
FROM
  employees
ORDER BY
  salary DESC;

SELECT
  firstname,
  lastname,
  TIMESTAMPDIFF (YEAR, birthdate, CURDATE ()) AS age
FROM
  employees
ORDER BY
  age DESC;

-- LESSON 15 LIMIT CLAUSE
-- FIRST 3 ELEMENTS
SELECT
  firstname,
  lastname,
  TIMESTAMPDIFF (YEAR, birthdate, CURDATE ()) AS age
FROM
  employees
ORDER BY
  age DESC
LIMIT
  3;

-- 4TH
SELECT
  firstname,
  lastname,
  TIMESTAMPDIFF (YEAR, birthdate, CURDATE ()) AS age
FROM
  employees
ORDER BY
  age DESC
LIMIT
  3, 1;

-- 4TH ONWARD 5 ELEMENTS
SELECT
  firstname,
  lastname,
  TIMESTAMPDIFF (YEAR, birthdate, CURDATE ()) AS age
FROM
  employees
ORDER BY
  age DESC
LIMIT
  3, 5;

SELECT
  *
FROM
  orders
ORDER BY
  orderdate DESC
LIMIT
  10;

SELECT
  firstname,
  lastname,
  salary
FROM
  employees
ORDER BY
  salary DESC
LIMIT
  1;

-- LESSON 16 ORDER BY & RAND() FUNCTION
SELECT
  *
FROM
  employees
ORDER BY
  RAND ()
LIMIT
  2;

-- LESSON 17 COMMENTS
-- I AM A COMMENT
-- SELECT * FROM employees;
/*
I AM A MULTI LINE
COMMENT !
I AM 
COMMENT !
 */
-- LESSON 18 WHERE CLAUSE
SELECT
  *
FROM
  customers
WHERE
  city='London';

SELECT
  *
FROM
  customers
WHERE
  customerID LIKE 'GREAL%'
  OR 'greal%';

SELECT
  productname,
  unitprice
FROM
  products
WHERE
  unitprice=21.35;

SELECT
  firstname,
  lastname
FROM
  employees
WHERE
  title LIKE 'Sales rep%';

SELECT
  companyname,
  phone
FROM
  customers
WHERE
  country!='Spain';

SELECT
  companyname,
  phone
FROM
  customers
WHERE
  country<>'Spain';

SELECT
  productname
FROM
  products
WHERE
  supplierid=12;

SELECT
  supplierid,
  companyname
FROM
  suppliers
WHERE
  supplierid<>28;

SELECT
  supplierid,
  companyname
FROM
  suppliers
WHERE
  NOT supplierid=28;

SELECT
  productname,
  ROUND(unitprice, 2)
FROM
  products
WHERE
  unitprice>20
ORDER BY
  unitprice;

SELECT
  *
FROM
  products
WHERE
  unitprice<50
ORDER BY
  productid;

SELECT
  productname,
  UnitsInStock
FROM
  products
WHERE
  UnitsInStock<10
ORDER BY
  UnitsInStock ASC;

SELECT
  firstname,
  lastname,
  salary
FROM
  employees
WHERE
  salary<2000
ORDER BY
  FirstName;

SELECT
  orderid,
  (unitprice*quantity) AS linetotal
FROM
  orderdetails
WHERE
  (unitprice*quantity)>=10000;

SELECT
  productid,
  productname,
  unitsinstock,
  reorderlevel
FROM
  products
WHERE
  UnitsInStock<ReorderLevel
ORDER BY
  UnitsInStock;

SELECT
  *
FROM
  customers
WHERE
  country='usa'
  AND city='San Francisco';

SELECT
  *
FROM
  customers
WHERE
  country='Mexico'
  AND contacttitle='Owner';

SELECT
  *
FROM
  customers
WHERE
  country NOT IN ('USA', 'UK');

SELECT
  *
FROM
  customers
WHERE
  country!='USA'
  AND country!='UK';

SELECT
  *
FROM
  customers
WHERE
  NOT country='USA'
  AND NOT country='UK';

SELECT
  *
FROM
  customers
WHERE
  country<>'USA'
  AND country<>'UK';

SELECT
  *
FROM
  customers
WHERE
  country IN ('Brazil', 'Venezuela');

SELECT
  *
FROM
  customers
WHERE
  country='Brazil'
  OR country='Venezuela';

SELECT
  *
FROM
  suppliers
WHERE
  SupplierID BETWEEN 20 AND 25;

SELECT
  *
FROM
  suppliers
WHERE
  SupplierID>22
  OR SupplierID<10;

SELECT
  *
FROM
  suppliers
WHERE
  SupplierID BETWEEN 6 AND 9
  OR SupplierID BETWEEN 18 AND 24;

SELECT
  *
FROM
  suppliers
WHERE
  SupplierID BETWEEN 6 AND 9
UNION
SELECT
  *
FROM
  suppliers
WHERE
  SupplierID BETWEEN 18 AND 24;

SELECT
  *
FROM
  suppliers
WHERE
  SupplierID NOT BETWEEN 12 AND 20;

SELECT
  *
FROM
  customers
WHERE
  city IN ('Paris', 'Nantes')
  AND country='France';

SELECT
  CONCAT ('$', FORMAT (unitprice, 2)) price
FROM
  products
WHERE
  UnitPrice BETWEEN 31 AND 70
ORDER BY
  UnitPrice;

SELECT
  *
FROM
  employees
WHERE
  region IS NULL;

SELECT
  *
FROM
  employees
WHERE
  ReportsTo=2
  AND salary<=3000
  AND region IS NOT NULL;

SELECT
  *
FROM
  customers
WHERE
  country IN (
    'sweden',
    'germany',
    'belgium',
    'spain',
    'france',
    'austria',
    'italy',
    'switzerland',
    'norway',
    'denmark',
    'finland',
    'poland'
  );

SELECT
  *
FROM
  customers
WHERE
  country NOT IN ('germany', 'uk', 'france');

-- LESSON 19 INDEX
CREATE DATABASE people;

USE people;

CREATE TABLE
  person (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255),
    INDEX (LastName, FirstName)
  );

CREATE INDEX addresses_index ON person (address);

SHOW INDEX
FROM
  orders;

SELECT
  orderid,
  ShipVia,
  ShipName
FROM
  orders
WHERE
  CustomerID="SEVES";

EXPLAIN ANALYZE
SELECT
  orderid,
  ShipVia,
  ShipName
FROM
  orders
WHERE
  CustomerID="SEVES";

CREATE INDEX CusIndex ON orders (CustomerID);

EXPLAIN
select
  orderid,
  ShipVia,
  ShipName
from
  orders
where
  CustomerID="SEVES";

SHOW INDEX
FROM
  orders;

DROP INDEX CusIndex ON orders;

ALTER TABLE orders
DROP INDEX cusindex;

-- LESSON 20 WILDCARDS
SELECT
  *
FROM
  orders
WHERE
  customerid LIKE 'T';

SELECT
  *
FROM
  orders
WHERE
  customerid LIKE 'T%';

SELECT
  *
FROM
  orders
WHERE
  customerid LIKE '%OR%';

SELECT
  *
FROM
  orders
WHERE
  customerid LIKE '%OR';

SELECT
  *
FROM
  orders
WHERE
  customerid LIKE 'T____';

SELECT
  *
FROM
  employees
WHERE
  Title LIKE BINARY '%Sales%';

SELECT
  *
FROM
  employees
WHERE
  Title LIKE '%sales%';

SELECT
  *
FROM
  employees
WHERE
  country IN ('UK', 'USA')
  AND (
    homephone LIKE '%44%'
    OR extension LIKE '%44%'
  );

SELECT
  *
FROM
  customers
WHERE
  CompanyName LIKE '%Restaura%';

SELECT
  *
FROM
  customers
WHERE
  ContactTitle NOT LIKE '%Representative%';

-- LESSON 21 UPDATE STATEMENT & REPLACE() FUNCTION
UPDATE cars
SET
  price=10920
WHERE
  carid=3;

UPDATE cars
SET
  price=10920
WHERE
  manufacturerid=102
  AND carname='civic';

UPDATE cars
SET
  price=220,
  carname='Honda CRV-Dragon X-men'
WHERE
  carid=7;

UPDATE employees
SET
  photopath=REPLACE (photopath, 'webacc', 'accweb')
WHERE
  photopath LIKE 'http://webacc%';

CREATE TABLE
  person (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255),
    INDEX (LastName, FirstName)
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LESSON 22 SELECT DISTINCT() STATEMENT
SELECT DISTINCT
  (country)
FROM
  customers;

SELECT DISTINCT
  shipregion
FROM
  orders
WHERE
  ShipRegion IS NOT NULL;

-- LESSON 23 FORMAT FUNCTION
SELECT
  FORMAT (8934343.943943, 0);

SELECT
  FORMAT (8934343.943943, 1);

SELECT
  FORMAT (8934343.943943, 2);

SELECT
  FORMAT (8934343.943943, 3);

SELECT
  ROUND(8934343.943943, 3);

SELECT
  unitprice,
  FORMAT (unitprice, 2),
  productname
FROM
  products;

-- LESSON 24 GROUP BY STATEMENT
SELECT
  title,
  CONCAT ('$', FORMAT (MIN(salary), 2)),
  CONCAT ('$', FORMAT (MAX(salary), 2)),
  CONCAT ('$', FORMAT (AVG(salary), 2)),
  CONCAT ('$', FORMAT (SUM(salary), 2))
FROM
  employees
GROUP BY
  title;

SELECT
  shipregion,
  COUNT(shipregion)
FROM
  orders
GROUP BY
  shipregion;

SELECT
  shipregion,
  COUNT(*)
FROM
  orders
GROUP BY
  shipregion;

SELECT
  productid,
  COUNT(*)
FROM
  orderdetails
GROUP BY
  productid;

SELECT
  productid,
  SUM(quantity)
FROM
  orderdetails
GROUP BY
  productid;

SELECT
  employeeid,
  COUNT(orderid) numberofordershandled
FROM
  orders
GROUP BY
  employeeid
ORDER BY
  numberofordershandled DESC
LIMIT
  1;

-- LESSON 25~26 JOINS
SELECT
  a1,
  b1
FROM
  tablea
  INNER JOIN tableb ON b1=a1;

SELECT
  o.orderid,
  o.shipvia,
  s.CompanyName
FROM
  orders o
  INNER JOIN shippers s ON s.ShipperID=o.ShipVia
ORDER BY
  o.OrderID;

SELECT
  a1,
  b1
FROM
  tablea
  LEFT JOIN tableb ON b1=a1;

SELECT
  a1,
  b1
FROM
  tablea
  RIGHT JOIN tableb ON b1=a1;

SELECT
  shipperid,
  shipvia
FROM
  shippers
  RIGHT JOIN orders ON ShipperID=shipvia;

INSERT INTO
  shippers
VALUES
  (4, 'USPS', '(949)626-0303');

SELECT
  shipperid,
  shipvia
FROM
  shippers
  LEFT JOIN orders ON ShipperID=shipvia;

-- LESSON 27 JOINS ON vs WHERE ON vs USING
SELECT
  o.orderid,
  o.shipvia,
  s.CompanyName
FROM
  orders o
  INNER JOIN shippers s ON s.ShipperID=o.ShipVia
ORDER BY
  o.OrderID
LIMIT
  3;

SELECT
  o.orderid,
  o.shipvia,
  s.CompanyName
FROM
  orders o
  INNER JOIN shippers s
WHERE
  s.ShipperID=o.ShipVia
ORDER BY
  o.OrderID
LIMIT
  3;

SELECT
  o.orderid,
  o.shipvia,
  s.CompanyName
FROM
  orders o
  INNER JOIN shippers s ON s.ShipperID=o.ShipVia
WHERE
  s.ShipperID=1
ORDER BY
  o.OrderID
LIMIT
  3;

SELECT
  o.orderid,
  o.shipvia,
  s.CompanyName
FROM
  orders o
  INNER JOIN shippers s ON s.ShipperID=o.ShipVia
  AND s.ShipperID=1
ORDER BY
  o.OrderID
LIMIT
  3;

SELECT
  o.orderid,
  o.shipvia,
  s.CompanyName
FROM
  orders o
  INNER JOIN shippers s
WHERE
  s.ShipperID=o.ShipVia
  AND s.ShipperID=1
ORDER BY
  o.OrderID
LIMIT
  3;

SELECT
  o.orderid,
  o.shipvia,
  s.CompanyName
FROM
  orders o
  INNER JOIN shippers s USING s.ShipperID=o.ShipVia
ORDER BY
  o.OrderID
LIMIT
  3;

SELECT
  companyname,
  productname
FROM
  products p
  JOIN suppliers s ON s.SupplierID=p.SupplierID;

SELECT
  companyname,
  productname
FROM
  products p
  JOIN suppliers s USING (SupplierID);

SELECT
  companyname,
  productname
FROM
  products p
  NATURAL JOIN suppliers;

-- LESSON 28 JOINS CHALLANGES
SELECT
  CONCAT (e.firstname, ' ', e.lastname) AS employeename,
  o.orderid,
  o.orderdate
FROM
  orders o
  JOIN employees e USING (EmployeeID)
GROUP BY
  o.orderdate;

SELECT
  p.productid,
  p.productname,
  s.CompanyName AS `supplier name`
FROM
  products p
  JOIN suppliers s USING (supplierID);

SELECT
  c.contactname,
  o.shipvia
FROM
  customers c
  JOIN orders o USING (customerid);

USE northwind;

SELECT
  customers.CompanyName AS `customer name`,
  shippers.CompanyName AS `shipper name`
FROM
  customers c
  INNER JOIN orders o ON c.customerID=o.customerID
  INNER JOIN shippers s ON o.shipvia=s.shipperid;

-- LESSON 29~30 JOINS MULTIPLE TABLES
SELECT
  CONCAT (e.firstname, ' ', e.lastname, ', ', e.title) AS `Sales Department Employees`,
  "Reports to" AS `Resports to`,
  CONCAT (er.firstname, ' ', er.lastname, ', ', er.title) AS `Manager`
FROM
  employees e
  JOIN employees er ON e.ReportsTo=er.EmployeeID
ORDER BY
  `Manager`;

-- LESSON 31 TWO TABLE JOINS
SELECT
  p.productname,
  p.unitprice,
  c.CategoryName,
  c.Description
FROM
  products p
  JOIN categories c ON c.CategoryID=p.CategoryID;

SELECT
  p.productname,
  s.CompanyName,
  CONCAT (
    s.Address,
    ', ',
    s.City,
    ', ',
    s.PostalCode,
    ', ',
    s.Country
  ) AS Address
FROM
  products p
  JOIN suppliers s ON s.SupplierID=p.SupplierID;

SELECT
  c.ContactName,
  COUNT(*) AS order_count
FROM
  orders o
  JOIN customers c ON c.CustomerID=o.CustomerID
GROUP BY
  c.ContactName
ORDER BY
  order_count DESC;

SELECT
  e.employeeId,
  CONCAT (e.firstname, ' ', e.lastname) AS fullname,
  COUNT(et.TerritoryID) AS visited_territory_count
FROM
  employees e
  JOIN employeeterritories et ON et.EmployeeID=e.EmployeeID
GROUP BY
  e.EmployeeID;

-- LESSON 32 3 TABLE JOINS
SELECT
  o.OrderID,
  c.companyname,
  CONCAT (e.firstname, ' ', e.LastName) AS employee_fullname
FROM
  orders o
  JOIN customers c ON c.CustomerID=o.CustomerID
  JOIN employees e ON e.EmployeeID=o.EmployeeID
ORDER BY
  o.OrderID;

SELECT
  p.ProductName,
  c.CategoryName,
  s.CompanyName
FROM
  products p
  JOIN suppliers s ON p.SupplierID=s.SupplierID
  JOIN categories c ON c.CategoryID=p.CategoryID
ORDER BY
  c.CategoryName;

-- LESSON 33 4 TABLE JOINS
SELECT
  o.OrderID AS `Order ID`,
  c.CompanyName AS `Customer Name`,
  CONCAT (
    '$',
    FORMAT (SUM(((od.UnitPrice-od.discount)*od.Quantity)), 2)
  ) AS `Grand Total`,
  CONCAT (firstname, ' ', lastname) AS `Employee Name`
FROM
  orders o
  JOIN customers c ON o.CustomerID=c.CustomerID
  JOIN orderdetails od ON od.OrderID=o.OrderID
  JOIN employees e ON e.EmployeeID=o.EmployeeID
GROUP BY
  o.OrderID
ORDER BY
  o.OrderID
LIMIT
  4;

-- LESSON 34 5 TABLE JOINS