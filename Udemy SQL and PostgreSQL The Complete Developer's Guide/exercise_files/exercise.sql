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
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50)
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  contents VARCHAR(240),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  photo_id INTEGER REFERENCES photos(id) ON DELETE CASCADE
);

INSERT INTO
  users (username)
VALUES
  ('Reyna.Marvin'),
  ('Micah.Cremin'),
  ('Alfredo66'),
  ('Gerard_Mitchell42'),
  ('Frederique_Donnelly');

INSERT INTO
  photos (url, user_id)
VALUES
  ('https://santina.net', 3),
  ('https://alayna.net', 5),
  ('https://kailyn.name', 3),
  ('http://marjolaine.name', 1),
  ('http://chet.net', 5),
  ('http://jerrold.org', 2),
  ('https://meredith.net', 4),
  ('http://isaias.net', 4),
  ('http://dayne.com', 4),
  ('http://colten.net', 2),
  ('https://adelbert.biz', 5),
  ('http://kolby.org', 1),
  ('https://deon.biz', 2),
  ('https://marina.com', 5),
  ('http://johnson.info', 1),
  ('https://linda.info', 2),
  ('https://tyrique.info', 4),
  ('http://buddy.info', 5),
  ('https://elinore.name', 2),
  ('http://sasha.com', 3);

INSERT INTO
  comments (contents, user_id, photo_id)
VALUES
  (
    'Quo velit iusto ducimus quos a incidunt nesciunt facilis.',
    2,
    4
  ),
  ('Non est totam.', 5, 5),
  ('Fuga et iste beatae.', 3, 3),
  ('Molestias tempore est.', 1, 5),
  (
    'Est voluptatum voluptatem voluptatem est ullam quod quia in.',
    1,
    5
  ),
  ('Aut et similique porro ullam.', 1, 3),
  (
    'Fugiat cupiditate consequatur sit magni at non ad omnis.',
    1,
    2
  ),
  (
    'Accusantium illo maiores et sed maiores quod natus.',
    2,
    5
  ),
  ('Perferendis cumque eligendi.', 1, 2),
  ('Nihil quo voluptatem placeat.', 5, 5),
  ('Rerum dolor sunt sint.', 5, 2),
  (
    'Id corrupti tenetur similique reprehenderit qui sint qui nulla tenetur.',
    2,
    1
  ),
  ('Maiores quo quia.', 1, 5),
  (
    'Culpa perferendis qui perferendis eligendi officia neque ex.',
    1,
    4
  ),
  (
    'Reprehenderit voluptates rerum qui veritatis ut.',
    1,
    1
  ),
  ('Aut ipsum porro deserunt maiores sit.', 5, 3),
  ('Aut qui eum eos soluta pariatur.', 1, 1),
  (
    'Praesentium tempora rerum necessitatibus aut.',
    4,
    3
  ),
  ('Magni error voluptas veniam ipsum enim.', 4, 2),
  (
    'Et maiores libero quod aliquam sit voluptas.',
    2,
    3
  ),
  ('Eius ab occaecati quae eos aut enim rem.', 5, 4),
  ('Et sit occaecati.', 4, 3),
  (
    'Illum omnis et excepturi totam eum omnis.',
    1,
    5
  ),
  ('Nemo nihil rerum alias vel.', 5, 1),
  ('Voluptas ab eius.', 5, 1),
  (
    'Dolor soluta quisquam voluptatibus delectus.',
    3,
    5
  ),
  ('Consequatur neque beatae.', 4, 5),
  ('Aliquid vel voluptatem.', 4, 5),
  ('Maiores nulla ea non autem.', 4, 5),
  ('Enim doloremque delectus.', 1, 4),
  ('Facere vel assumenda.', 2, 5),
  (
    'Fugiat dignissimos dolorum iusto fugit voluptas et.',
    2,
    1
  ),
  ('Sed cumque in et.', 1, 3),
  (
    'Doloribus temporibus hic eveniet temporibus corrupti et voluptatem et sint.',
    5,
    4
  ),
  ('Quia dolorem officia explicabo quae.', 3, 1),
  ('Ullam ad laborum totam veniam.', 1, 2),
  (
    'Et rerum voluptas et corporis rem in hic.',
    2,
    3
  ),
  ('Tempora quas facere.', 3, 1),
  (
    'Rem autem corporis earum necessitatibus dolores explicabo iste quo.',
    5,
    5
  ),
  (
    'Animi aperiam repellendus in aut eum consequatur quos.',
    1,
    2
  ),
  ('Enim esse magni.', 4, 3),
  ('Saepe cumque qui pariatur.', 4, 4),
  ('Sit dolorem ipsam nisi.', 4, 1),
  ('Dolorem veniam nisi quidem.', 2, 5),
  (
    'Porro illum perferendis nemo libero voluptatibus vel.',
    3,
    3
  ),
  (
    'Dicta enim rerum culpa a quo molestiae nam repudiandae at.',
    2,
    4
  ),
  (
    'Consequatur magnam autem voluptas deserunt.',
    5,
    1
  ),
  ('Incidunt cum delectus sunt tenetur et.', 4, 3),
  ('Non vel eveniet sed molestiae tempora.', 2, 1),
  (
    'Ad placeat repellat et veniam ea asperiores.',
    5,
    1
  ),
  ('Eum aut magni sint.', 3, 1),
  (
    'Aperiam voluptates quis velit explicabo ipsam vero eum.',
    1,
    3
  ),
  (
    'Error nesciunt blanditiis quae quis et tempora velit repellat sint.',
    2,
    4
  ),
  (
    'Blanditiis saepe dolorem enim eos sed ea.',
    1,
    2
  ),
  ('Ab veritatis est.', 2, 2),
  ('Vitae voluptatem voluptates vel nam.', 3, 1),
  (
    'Neque aspernatur est non ad vitae nisi ut nobis enim.',
    4,
    3
  ),
  ('Debitis ut amet.', 4, 2),
  (
    'Pariatur beatae nihil cum molestiae provident vel.',
    4,
    4
  ),
  ('Aperiam sunt aliquam illum impedit.', 1, 4),
  (
    'Aut laudantium necessitatibus harum eaque.',
    5,
    3
  ),
  (
    'Debitis voluptatum nesciunt quisquam voluptatibus fugiat nostrum sed dolore quasi.',
    3,
    2
  ),
  (
    'Praesentium velit voluptatem distinctio ut voluptatum at aut.',
    2,
    2
  ),
  (
    'Voluptates nihil voluptatum quia maiores dolorum molestias occaecati.',
    1,
    4
  ),
  ('Quisquam modi labore.', 3, 2),
  (
    'Fugit quia perferendis magni doloremque dicta officia dignissimos ut necessitatibus.',
    1,
    4
  ),
  (
    'Tempora ipsam aut placeat ducimus ut exercitationem quis provident.',
    5,
    3
  ),
  ('Expedita ducimus cum quibusdam.', 5, 1),
  (
    'In voluptates doloribus aut ut libero possimus adipisci iste.',
    3,
    2
  ),
  (
    'Sit qui est sed accusantium quidem id voluptatum id.',
    1,
    5
  ),
  (
    'Libero eius quo consequatur laudantium reiciendis reiciendis aliquid nemo.',
    1,
    2
  ),
  (
    'Officia qui reprehenderit ut accusamus qui voluptatum at.',
    2,
    2
  ),
  ('Ad similique quo.', 4, 1),
  (
    'Commodi culpa aut nobis qui illum deserunt reiciendis.',
    2,
    3
  ),
  (
    'Tenetur quam aut rerum doloribus est ipsa autem.',
    4,
    2
  ),
  (
    'Est accusamus aut nisi sit aut id non natus assumenda.',
    2,
    4
  ),
  ('Et sit et vel quos recusandae quo qui.', 1, 3),
  ('Velit nihil voluptatem et sed.', 4, 4),
  ('Sunt vitae expedita fugiat occaecati.', 1, 3),
  ('Consequatur quod et ipsam in dolorem.', 4, 2),
  (
    'Magnam voluptatum molestias vitae voluptatibus beatae nostrum sunt.',
    3,
    5
  ),
  (
    'Alias praesentium ut voluptatem alias praesentium tempora voluptas debitis.',
    2,
    5
  ),
  (
    'Ipsam cumque aut consectetur mollitia vel quod voluptates provident suscipit.',
    3,
    5
  ),
  (
    'Ad dignissimos quia aut commodi vel ut nisi.',
    3,
    3
  ),
  (
    'Fugit ut architecto doloremque neque quis.',
    4,
    5
  ),
  (
    'Repudiandae et voluptas aut in excepturi.',
    5,
    3
  ),
  ('Aperiam voluptatem animi.', 5, 1),
  ('Et mollitia vel soluta fugiat.', 4, 1),
  ('Ut nemo voluptas voluptatem voluptas.', 5, 2),
  ('At aut quidem voluptatibus rem.', 5, 1),
  (
    'Temporibus voluptates iure fuga alias minus eius.',
    2,
    3
  ),
  (
    'Non autem laboriosam consectetur officiis aut excepturi nobis commodi.',
    4,
    3
  ),
  (
    'Esse voluptatem sed deserunt ipsum eaque maxime rerum qui.',
    5,
    5
  ),
  (
    'Debitis ipsam ut pariatur molestiae ut qui aut reiciendis.',
    4,
    4
  ),
  (
    'Illo atque nihil et quod consequatur neque pariatur delectus.',
    3,
    3
  ),
  (
    'Qui et hic accusantium odio quis necessitatibus et magni.',
    4,
    2
  ),
  (
    'Debitis repellendus inventore omnis est facere aliquam.',
    3,
    3
  ),
  (
    'Occaecati eos possimus deleniti itaque aliquam accusamus.',
    3,
    4
  ),
  (
    'Molestiae officia architecto eius nesciunt.',
    5,
    4
  ),
  (
    'Minima dolorem reiciendis excepturi culpa sapiente eos deserunt ut.',
    3,
    3
  );

-- JOIN TECHNIQUE - NO AGGREGATION TECHNIQUE REUIQRED
SELECT
  contents,
  username
FROM
  comments
  JOIN users ON users.id = comments.user_id;

SELECT
  contents,
  url
FROM
  comments
  JOIN photos ON comments.photo_id = photos.id;

SELECT
  url,
  username
FROM
  photos
  JOIN users ON users.id = photos.user_id;

INSERT INTO
  photos (url, user_id)
VALUES
  ('https://banner.jpg', NULL);

-- INNER JOIN
SELECT
  url,
  username
FROM
  photos
  JOIN users ON users.id = photos.user_id;

-- LEFT OUTER JOIN
SELECT
  url,
  user_id,
  username
FROM
  photos
  LEFT JOIN users ON users.id = photos.user_id;

-- RIGHT OUTER JOIN
INSERT INTO
  users (username)
VALUES
  ('Nicole');

SELECT
  url,
  user_id,
  username
FROM
  photos
  RIGHT JOIN users ON users.id = photos.user_id;

-- FULL OUTER JOIN
SELECT
  url,
  user_id,
  username
FROM
  photos FULL
  JOIN users ON users.id = photos.user_id;

-- JOIN EXERCISES
SELECT
  url,
  contents
FROM
  comments
  JOIN photos ON photos.id = comments.photo_id
WHERE
  comments.user_id = photos.user_id;

SELECT
  p.url,
  c.contents,
  u.username
FROM
  comments c
  JOIN photos p ON p.id = c.photo_id
  JOIN users u ON u.id = c.user_id
WHERE
  c.user_id = p.user_id;

SELECT
  p.url,
  c.contents,
  u.username
FROM
  comments c
  JOIN photos p ON p.id = c.photo_id
  JOIN users u ON u.id = c.user_id
  AND u.id = p.user_id;

SELECT
  *
FROM
  photos;

SELECT
  *
FROM
  comments;

SELECT
  *
FROM
  users;

-- -- LESSON 5 AGGREGATION OF RECORDS
-- GROUP BY - CONDENSES THE SIMILAR ITEMS INTO ONE ROW
SELECT
  user_id
FROM
  comments
GROUP BY
  user_id;

-- AGGREGATE FUNCTIONS - CONDENSES THE OUTPOUT TO A SINGLE VALUE
SELECT
  MIN(id),
  MAX(id),
  SUM(id),
  ROUND(AVG(id), 2)
FROM
  comments;

-- COMBINING AGGREGATE FUNCTIONS AND GROUP BY
SELECT
  user_id,
  COUNT(c.id) -- NUMBER OF IDS ON EACH user_id GROUP
FROM
  comments c
GROUP BY
  user_id;

SELECT
  *
FROM
  photos;

-- COUNT ALL ROWS NO MATTER ITS NULL OR NOT
-- NOTE: COUNT DOES NOT COUNT FOR NULL!!!
SELECT
  user_id,
  COUNT(*)
FROM
  comments
GROUP BY
  user_id;

SELECT
  photo_id,
  COUNT(*)
FROM
  comments
GROUP BY
  photo_id;

SELECT
  authors.name,
  COUNT(*)
FROM
  books
  JOIN authors ON authors.id = books.author_id
GROUP BY
  authors.name;

SELECT
  photo_id,
  COUNT(*)
FROM
  comments
WHERE
  photo_id < 3
GROUP BY
  photo_id
HAVING
  COUNT(*) > 2;

SELECT
  c.user_id,
  COUNT(*)
FROM
  comments c
  JOIN photos p ON p.id = c.photo_id
WHERE
  p.id IN (1, 2)
GROUP BY
  c.user_id
HAVING
  COUNT(*) > 2;

SELECT
  c.user_id,
  COUNT(*)
FROM
  comments c
  JOIN photos p ON p.id = c.photo_id
WHERE
  p.id < 3
GROUP BY
  c.user_id
HAVING
  COUNT(*) > 2;

SELECT
  manufacturer,
  SUM(price * units_sold) AS total_revenue
FROM
  phones
GROUP BY
  manufacturer
HAVING
  total_revenue > 2000000;

-- -- LESSON 6 WORKING WITH LARGE DATASETS