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