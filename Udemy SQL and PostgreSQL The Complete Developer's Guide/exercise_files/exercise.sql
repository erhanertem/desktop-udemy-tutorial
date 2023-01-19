-- -- LESSON 1 SIMPLE SQL STATEMENTS
CREATE DATABASE udemy_stephan_sql;

CREATE TABLE cities (
  name VARCHAR(50),
  country VARCHAR(50),
  population INTEGER,
  area INTEGER
);

INSERT INTO
  cities (name, country, population, area)
VALUES
  ('Tokyo', 'Japan', 38505000, 8223),
  ('Delhi', 'India', 28125000, 2240),
  ('Shangai', 'China', 22125000, 4015),
  ('Sao Paulo', 'Brazil', 20935000, 3043);

SELECT
  *
FROM
  cities;

SELECT
  name,
  name,
  name,
  population
FROM
  cities;

SELECT
  name,
  (population / area) AS population_density
FROM
  cities;

SELECT
  name,
  (price * units_sold) AS revenue
FROM
  phones;

--PIPE OPERATOR
SELECT
  name || ', ' || country AS location
FROM
  cities;

-- CONCAT STRING FUNCTION
SELECT
  UPPER(CONCAT(name, ', ', country)) AS location
FROM
  cities;

-- -- LESSON 2 FILTERING RECORDS
-- WHERE STATEMENT
SELECT
  name,
  area
FROM
  cities
WHERE
  area > 4000;

SELECT
  name,
  area
FROM
  cities
WHERE
  area <> 4000;

SELECT
  name,
  area
FROM
  cities
WHERE
  area != 4000;

-- WHERE WITH LOGICAL OPERATORS
SELECT
  name,
  area
FROM
  cities
WHERE
  area BETWEEN 2000
  AND 4000;

SELECT
  name,
  area
FROM
  cities
WHERE
  name IN ('Delhi', 'Shangai');

SELECT
  name,
  area
FROM
  cities
WHERE
  name NOT IN ('Delhi', 'Shangai');

SELECT
  name,
  area
FROM
  cities
WHERE
  area NOT IN (3043, 8223)
  OR name = 'Sao Paulo';

SELECT
  name,
  area
FROM
  cities
WHERE
  area NOT IN (3043, 8223)
  AND name = 'Sao Paulo';

SELECT
  name,
  price
FROM
  phones
WHERE
  units_sold > 5000;

SELECT
  name,
  manufacturer
FROM
  phones
WHERE
  manufacturer IN ('Apple', 'Samsung');

SELECT
  name,
  (price * units_sold) AS total_revenue
FROM
  phones
WHERE
  (price * units_sold) > 1000000;

SELECT
  name,
  (population / area) AS pop_density
FROM
  cities
WHERE
  (population / area) > 6000;

-- UPDATE ROWS
UPDATE
  cities
SET
  population = 39505000
WHERE
  name = 'Tokyo';

SELECT
  *
FROM
  cities;

-- DELETE ROWS
DELETE FROM
  cities
WHERE
  name = 'Tokyo';

DELETE FROM
  cities
WHERE
  name <> 'Tokyo';

UPDATE
  phones
SET
  units_sold = 8543
WHERE
  name = 'N8';

DELETE FROM
  phones
WHERE
  manufacturer = 'Samsung';

SELECT
  *
FROM
  phones;

-- -- LESSON 3 WORKING WITH TABLES