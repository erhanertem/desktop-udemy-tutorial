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
--ONE TO MANY
DROP TABLE IF EXISTS photos,
users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL
);

INSERT INTO
  users (username)
VALUES
  ('monahan93'),
  ('pferrer'),
  ('si93onis'),
  ('99stroman');

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200) NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO
  photos (url, user_id)
VALUES
  ('http://one.jpg', 4);

INSERT INTO
  photos (url, user_id)
VALUES
  ('http://two.jpg', 1),
  ('http://three.jpg', 1),
  ('http://four.jpg', 1),
  ('http://five.jpg', 2),
  ('http://six.jpg', 3),
  ('http://123.jpg', 4);

SELECT
  *
FROM
  photos
WHERE
  user_id = 4;

SELECT
  url,
  username
FROM
  photos
  INNER JOIN users ON users.id = photos.user_id;

SELECT
  *
FROM
  crew_members;

-- CODING CHALLENGE
-- Create table called 'boats'
CREATE TABLE boats (id SERIAL PRIMARY KEY, name VARCHAR(50));

-- Insert two boats 
INSERT INTO
  boats (name)
VALUES
  ('Rogue Wave'),
  ('Harbor Master');

-- Create table called 'crew_members'
CREATE TABLE crew_members (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR,
  boats_id INT REFERENCES boats(id)
);

-- Insert three crew members
INSERT INTO
  crew_members (first_name, boats_id)
VALUES
  ('Alex', 1),
  ('Lucia', 1),
  ('Ari', 2);

-- Write query here to fetch all columns for all crew_members associated with the boat that has an ID of 1
-- >>>>>>>> TODO #2 HERE!!!
SELECT
  first_name,
  boats_id
FROM
  crew_members
WHERE
  boats_id = 1;

SELECT
  first_name,
  name
FROM
  crew_members
  JOIN boats ON crew_members.boats_id = boats.id
WHERE
  boats_id = 1;

-- -----------------------
INSERT INTO
  photos (url, user_id)
VALUES
  ('http://jpg', 123432);

INSERT INTO
  photos (url, user_id)
VALUES
  ('http://jpg', NULL);

DELETE FROM
  users
WHERE
  id = 1;

DELETE FROM
  photos
WHERE
  id = 9;

-- TESTING DELETION CONSTRAINTS
DROP TABLE IF EXISTS photos,
users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL
);

INSERT INTO
  users (username)
VALUES
  ('monahan93'),
  ('pferrer'),
  ('si93onis'),
  ('99stroman');

-- CREATE TABLE photos (
--   id SERIAL PRIMARY KEY,
--   url VARCHAR(200),
--   user_id INT REFERENCES users(id) ON DELETE
--   SET
--     NULL
-- );
CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO
  photos (url, user_id)
VALUES
  ('http:/one.jpg', 4),
  ('http:/two.jpg', 1),
  ('http:/25.jpg', 1),
  ('http:/36.jpg', 1),
  ('http:/754.jpg', 2),
  ('http:/35.jpg', 3),
  ('http:/256.jpg', 4);

-- TEST CASCADE DELETION
DELETE FROM
  users
WHERE
  id = 1;

SELECT
  *
FROM
  photos;

SELECT
  *
FROM
  users;

-- -- LESSON 4 RELATING RECORDS WITH JOINS