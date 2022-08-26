-- LESSON: SECTION 9 MAGIC OF AGGREGATE FUNCTIONS
-- min max usage
-- SELECT min(released_year)
-- FROM books;
-- min max usage with group by

-- SELECT author_fname,
--          author_lname,
--          MIN(released_year)
-- FROM books
-- GROUP BY  author_lname, author_fname ORDER BY author_lname, author_fname ASC;

-- SELECT author_fname,
--          author_lname,
--          MAX(pages)
-- FROM books
-- GROUP BY  author_lname, author_fname;

-- SELECT CONCAT(author_fname,
--          ' ', author_lname) AS author, MAX(pages) AS 'longest book'
-- FROM books
-- GROUP BY  author_lname, author_fname;
-- SELECT CONCAT(author_fname,
--          ' ', author_lname) AS author, MAX(pages) AS 'longest book'
-- FROM books
-- GROUP BY  author_lname, author_fname ORDER BY MAX(pages) DESC;

-- SUM FUNCTION

-- SELECT sum(pages)
-- FROM books;

-- SELECT sum(released_year)
-- FROM books;

-- SELECT author_fname,
--          author_lname,
--          sum(pages)
-- FROM books
-- GROUP BY  author_lname, author_fname
-- ORDER BY  author_lname, author_fname;

-- THE AVG FUNCTION

-- SELECT avg(released_year)
-- FROM books;
-- SELECT avg(pages)
-- FROM books;

-- SELECT released_year,
--          AVG(stock_quantity)
-- FROM books GROUP BY  released_year
-- ORDER BY  released_year;

-- Coding Challenge: LECTURE 150 QUIZ

-- SELECT count(*)
-- FROM books; 

-- SELECT released_year,
--         COUNT(*)
-- FROM books
-- GROUP BY  released_year
-- ORDER BY  released_year;

-- SELECT SUM(stock_quantity) FROM books;

-- SELECT CONCAT(author_fname,
--         " ",
--         author_lname) AS author,
--          AVG(released_year)
-- FROM books
-- GROUP BY  author_lname, author_fname
-- ORDER BY  author_lname, author_fname;

-- SELECT CONCAT(author_fname,
--          " ",
--          author_lname) AS author,
--          pages AS "longest book"
-- FROM books GROUP BY author_fname, author_lname
-- ORDER BY  pages DESC LIMIT 1;

-- SELECT CONCAT(author_fname,
--          " ",
--          author_lname) AS author,
--          MAX(pages) AS "longest book"
-- FROM books GROUP BY author_fname, author_lname
-- ORDER BY  MAX(pages) DESC LIMIT 1;

-- SELECT released_year AS "year",
--          COUNT(DISTINCT title) AS "# books",
--          AVG(pages) AS "avg pages"
-- FROM books
-- GROUP BY  released_year
-- ORDER BY  released_year;
-- SELECT released_year AS "year",
--          COUNT(*) AS "# books",
--          AVG(pages) AS "avg pages"
-- FROM books
-- GROUP BY  released_year
-- ORDER BY  released_year;

-- LESSON: SECTION 10 REVISITING DATA TYPES

-- CREATE TABLE dogs (name char(5), breed varchar(10));

-- INSERT INTO dogs (name,breed) VALUES('bob','beagle');
-- INSERT INTO dogs (name,breed) VALUES('robby','corgi');
-- INSERT INTO dogs (name,breed) VALUES('Princess Jane','retriever');

-- NOTE: unless shell opened in non-strict mode char(xxx) dictates how long would be the string and would throw error if not fixed.

-- CREATE TABLE items (price DECIMAL(5,2));
-- INSERT INTO items(price) VALUES(7);
-- INSERT INTO items(price) VALUES(7987654);
-- INSERT INTO items(price) VALUES(34.88);
-- INSERT INTO items(price) VALUES(298.9999);
-- INSERT INTO items(price) VALUES(1.9999);

-- CREATE TABLE thingies (price FLOAT);
-- INSERT INTO thingies(price) VALUES (88.45);
-- INSERT INTO thingies(price) VALUES (8887.47);
-- INSERT INTO thingies(price) VALUES (8898778776687.47);

-- CREATE TABLE people (name VARCHAR(100), birthdate DATE, birthtime TIME, birthdt DATETIME);

-- INSERT INTO people (name, birthdate,birthtime,birthdt) VALUES ("Padma", '1983-11-11', "10:07:35", "1983-11-11 10:07:35");
-- INSERT INTO people (name, birthdate,birthtime,birthdt) VALUES ("Larry", '1943-12-25', "04:10:42", "1943-12-25 04:10:42");

-- SELECT CURDATE();
-- SELECT CURTIME();
-- SELECT NOW();

-- INSERT INTO people(name,birthdate,birthtime,birthdt) VALUES("Microwave", CURDATE(), CURTIME(), NOW());

-- SELECT name,
--         birthdate,
--         DAYNAME(birthdate)
-- FROM PEOPLE;

-- SELECT DATE_FORMAT(birthdt,"%m/%d/%Y at %h:%m") FROM people;

-- SELECT name, birthdate, DATEDIFF(NOW(),
--         birthdate) AS "encompassed time"
-- FROM people;

-- SELECT birthdt,
--          date_add(birthdt,
--          interval 1 month)
-- FROM people;

-- SELECT birthdt,
--          birthdt + interval 1 month
-- FROM people; 
-- -- date_add alternate
-- SELECT birthdt,
--          birthdt - interval 1 month
-- FROM people; 
-- -- datediff alternate

-- CREATE TABLE comment2 (content VARCHAR(100), changed_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW());
-- INSERT INTO comment2 (content) VALUES("I may abondon!");
-- INSERT INTO comment2 (content) VALUES("susysysysys");
-- INSERT INTO comment2 (content) VALUES("I have to clear this!");
-- UPDATE comment2 SET content="This is not going to be a giberish comment" WHERE content="susysysysys";
-- SELECT content, changed_at FROM comment2 ORDER BY changed_at;

-- Coding Challenge: LECTURE 173 QUIZ

-- SELECT CURDATE();
-- SELECT CURTIME();
-- SELECT NOW();
-- SELECT DAYOFWEEK(NOW())-1;
-- -- dayofweek takes sunday as 1
-- SELECT DATE_FORMAT(NOW(), "%w");
-- -- date_format takes sunday as 0
-- SELECT DATE_FORMAT(NOW(), "%W");
-- SELECT DAYNAME(NOW());
-- SELECT DATE_FORMAT(NOW(), "%m/%d/%Y");
-- SELECT DATE_FORMAT(NOW(), "%M %D at %h:%i %p");

-- CREATE TABLE tweets (tweet_content VARCHAR(140), tweet_username VARCHAR(20), tweet_created_at TIMESTAMP DEFAULT NOW());

-- INSERT INTO tweets (tweet_content,tweet_username) VALUES("this is my first tweet","coltscat");
-- INSERT INTO tweets (tweet_content,tweet_username) VALUES("this is my second tweet","coltscat");

-- LESSON: SECTION 11 THE POWER OF LOGICAL OPERATORS

-- NOT EQUAL
-- SELECT title, released_year FROM books WHERE released_year != 2017;
-- SELECT title,author_lname FROM books;
-- SELECT title,author_lname FROM books WHERE author_lname != "Carver";

-- NOT LIKE
-- SELECT title FROM books WHERE title LIKE "W%";
-- SELECT title FROM books WHERE title NOT LIKE "W%";

-- GREATER THAN
-- SELECT * FROM books WHERE released_year > 2000 ORDER BY released_year;
-- SELECT * FROM books WHERE released_year >= 2000 ORDER BY released_year;

-- LESS THAN
-- SELECT * FROM books WHERE released_year < 2000 ORDER BY released_year;
-- SELECT * FROM books WHERE released_year <= 2000 ORDER BY released_year;

-- AND &&
-- SELECT title,author_lname,released_year FROM books WHERE author_lname="Eggers" AND released_year>2010;
-- SELECT title,author_lname,released_year FROM books WHERE author_lname="Eggers" AND released_year>=2010 AND title LIKE "%novel%";

-- OR ||
-- SELECT title,author_lname,released_year FROM books WHERE author_lname="Eggers" || released_year>2010 &&author_lname !="Saunders";

-- BETWEEN
-- SELECT title, released_year FROM books WHERE released_year>=2004 && released_year<=2015;
-- SELECT title, released_year FROM books WHERE released_year BETWEEN 2004 AND 2015;
-- SELECT name, birthdt FROM people WHERE birthdt BETWEEN CAST('1980-01-01' AS DATETIME) AND CAST('2000-01-01' AS DATETIME);
-- NOTE: When working with informal date strings, they need tobe casted as datetime to fullfill proper date conversion before proceeding with before operation

-- IN 
-- SELECT title, author_lname FROM books WHERE author_lname="Carver" || author_lname="Lahiri" || author_lname="Smith";
-- SELECT title, author_lname FROM books WHERE author_lname IN ("Carver","Lahiri","Smith");
-- SELECT title, author_lname, released_year FROM books WHERE released_year IN (2001,1985);

-- NOT IN
-- SELECT  title
--        ,author_lname
--        ,released_year
-- FROM books
-- WHERE released_year NOT IN (2001, 2003, 1985);

-- SELECT  title
--        ,author_lname
--        ,released_year
-- FROM books
-- WHERE released_year != 2001
-- AND released_year != 2003
-- AND released_year != 1985);
-- SELECT  title
--        ,released_year
-- FROM books
-- WHERE released_year >= 2000
-- AND released_year % 2 != 0;

-- CASE STATEMENTS
-- SELECT  title
--        ,released_year
--        ,CASE WHEN released_year >= 2000 THEN "Modern Lit"  ELSE "20th Century Lit" END AS genre
-- FROM books;

-- SELECT  title
--        ,stock_quantity
--        ,CASE WHEN stock_quantity BETWEEN 0 AND 50 THEN "*"
--              WHEN stock_quantity BETWEEN 51 AND 100 THEN "**"  ELSE "***" END AS stock
-- FROM books;

-- Coding Challenge: LECTURE 195 QUIZ

-- SELECT  10 != 10;
-- SELECT  15 > 15 && 99-5 <= 94;
-- SELECT  1 IN (5,3) || 9 BETWEEN 8 AND 10;

-- SELECT  title, released_year
-- FROM books
-- WHERE released_year < 1980;

-- SELECT  title, author_lname
-- FROM books
-- WHERE author_lname IN ("Eggers", "Chabon");

-- SELECT  title
--        ,author_lname
-- FROM books
-- WHERE author_lname = "Lahiri" && released_year > 2000;

-- SELECT  title
--        ,pages
-- FROM books
-- WHERE pages BETWEEN 100 AND 200;

-- SELECT  author_lname
-- FROM books
-- WHERE author_lname LIKE "C%" || author_lname LIKE "S%";

-- SELECT  title
--        ,author_lname
--        ,CASE WHEN title LIKE "%Stories%" THEN "Short Stories"
--              WHEN title IN ("Just Kids","A Heartbreaking Work of Staggering Genius") THEN "Memoir" 
--              ELSE "Novel" END AS type
-- FROM books;

-- SELECT  title
--        ,author_lname
--        ,CASE WHEN COUNT(*) < 2 THEN CONCAT(COUNT(*)," book")  ELSE CONCAT(COUNT(*)," books") END AS count
-- FROM books
-- GROUP BY  author_lname
--          ,author_fname
-- ORDER BY author_lname;

-- LESSON: SECTION 12 ONE TO MANY

-- CREATE TABLE customers(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(100),
--     last_name VARCHAR(100),
--     email VARCHAR(100)
-- );

-- CREATE TABLE orders(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     order_date DATE,
--     amount DECIMAL(8,2),
--     customer_id INT,
--     FOREIGN KEY(customer_id) REFERENCES customers(id) ON DELETE CASCADE;
-- );

-- INSERT INTO customers (first_name, last_name, email) 
-- VALUES ('Boy', 'George', 'george@gmail.com'),
--        ('George', 'Michael', 'gm@gmail.com'),
--        ('David', 'Bowie', 'david@gmail.com'),
--        ('Blue', 'Steele', 'blue@gmail.com'),
--        ('Bette', 'Davis', 'bette@aol.com');
       
-- INSERT INTO orders (order_date, amount, customer_id)
-- VALUES ('2016/02/10', 99.99, 1),
--        ('2017/11/11', 35.50, 1),
--        ('2014/12/12', 800.67, 2),
--        ('2015/01/03', 12.50, 2),
--        ('1999/04/11', 450.25, 5);

-- INSERT INTO orders (order_date, amount, customer_id)
-- VALUES ('2016/06/06', 33.67, 98);
-- -- 98 fails as there is no correspondance in customers(id)

-- SELECT  id
-- FROM customers
-- WHERE last_name = "Davis";

-- SELECT  *
-- FROM orders
-- WHERE customer_id = 4;

-- -- JOINED FORM
-- SELECT  *
-- FROM orders
-- WHERE customer_id = (
-- SELECT  id
-- FROM customers
-- WHERE last_name = "Davis");

-- SELECT * from customers;
-- SELECT * from orders;
--  -- CROSS JOIN - totally meaningless
--  SELECT * from cusotmers,order;
-- -- IMPLICIT INNER JOIN
-- SELECT  *
-- FROM customers, orders
-- WHERE customers.id = orders.customer_id; 

-- SELECT  customers.id, first_name, last_name, order_date, amount
-- FROM customers, orders
-- WHERE customers.id = orders.customer_id; 

-- EXPLICIT INNER JOIN
-- SELECT  customers.id
--        ,first_name
--        ,last_name
--        ,order_date
--        ,amount
-- FROM customers
-- JOIN orders
-- ON customers.id = orders.customer_id;
-- SELECT  orders.id
--        ,first_name
--        ,last_name
--        ,order_date
--        ,amount
-- FROM orders
-- JOIN customers
-- ON customers.id = orders.customer_id;
-- SELECT  first_name
--        ,last_name
--        ,order_date
--        ,SUM(amount) AS total_spent
-- FROM customers
-- JOIN orders
-- ON customers.id = orders.customer_id
-- GROUP BY orders.customer_id
-- ORDER BY total_spent DESC;

-- LEFT JOIN

-- SELECT  first_name
--        ,last_name
--        ,order_date
--        ,amount
-- FROM customers
-- LEFT JOIN orders
-- ON customers.id = orders.customer_id;

-- SELECT  first_name
--        ,last_name
--        ,IFNULL (SUM(amount), 0) AS total_spent
-- FROM customers
-- LEFT JOIN orders
-- ON customers.id = orders.customer_id
-- GROUP BY customers.id
-- ORDER BY total_spent;

-- RIGHT JOIN

-- SELECT  *
-- FROM customers
-- RIGHT JOIN orders
-- ON customers.id = orders.customer_id;

-- Coding Challenge: LECTURE 216 QUIZ

-- CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(250));

-- CREATE TABLE papers (title VARCHAR(250), grade INT, student_id INT, FOREIGN KEY(student_id) REFERENCES students(id)
-- ON
-- DELETE CASCADE);

-- INSERT INTO students (first_name) VALUES 
-- ('Caleb'), 
-- ('Samantha'), 
-- ('Raj'), 
-- ('Carlos'), 
-- ('Lisa');
 
-- INSERT INTO papers (student_id, title, grade ) VALUES
-- (1, 'My First Book Report', 60),
-- (1, 'My Second Book Report', 75),
-- (2, 'Russian Lit Through The Ages', 94),
-- (2, 'De Montaigne and The Art of The Essay', 98),
-- (4, 'Borges and Magical Realism', 89);
-- -- EXPLICIT INNER JOIN
-- SELECT  first_name
--        ,title
--        ,grade
-- FROM students, papers
-- WHERE students.id = papers.student_id
-- ORDER BY grade DESC;
-- -- IMPLICIT INNER JOIN
-- SELECT  first_name
--        ,title
--        ,grade
-- FROM students INNER JOIN papers
-- ON  students.id = papers.student_id
-- ORDER BY grade DESC;

-- SELECT  first_name
--        ,title
--        ,grade
-- FROM students
-- LEFT JOIN papers
-- ON students.id = papers.student_id;

-- SELECT  first_name
--        ,IFNULL(title,"MISSING") AS title
--        ,IFNULL(grade,0) AS grade
-- FROM students
-- LEFT JOIN papers
-- ON students.id = papers.student_id;

-- SELECT  first_name
--        ,IFNULL(AVG(grade),0) AS average
-- FROM students
-- LEFT JOIN papers
-- ON students.id = papers.student_id GROUP BY students.id ORDER BY average DESC;

-- SELECT  first_name
--        ,IFNULL(AVG(grade),0)                                                    AS average
--        ,CASE WHEN IFNULL(AVG(grade),0) >= 75 THEN "PASSING"  ELSE "FAILING" END AS passing_status
-- FROM students
-- LEFT JOIN papers
-- ON students.id = papers.student_id
-- GROUP BY  students.id
-- ORDER BY average DESC;
-- -- ALTERNATE NULL CHECK SOLUTION PER COLT
-- SELECT  first_name
--        ,IFNULL(AVG(grade),0)                                          AS average
--        ,CASE WHEN AVG(grade) IS NULL THEN "FAILING"
--              WHEN AVG(grade) >= 75 THEN "PASSING"  ELSE "FAILING" END AS passing_status
-- FROM students
-- LEFT JOIN papers
-- ON students.id = papers.student_id
-- GROUP BY  students.id
-- ORDER BY average DESC;

-- LESSON: SECTION 13 MANY TO MANY 

-- CREATE database tv_review_app;
-- USE tv_review_app;
-- SELECT  database();
-- CREATE TABLE reviewers (
--   id INT AUTO_INCREMENT PRIMARY KEY
--   , first_name VARCHAR(100)
--   , last_name VARCHAR(100)
--   );
-- INSERT INTO reviewers (first_name, last_name) VALUES
--     ('Thomas', 'Stoneman'),
--     ('Wyatt', 'Skaggs'),
--     ('Kimbra', 'Masters'),
--     ('Domingo', 'Cortes'),
--     ('Colt', 'Steele'),
--     ('Pinkie', 'Petit'),
--     ('Marlon', 'Crafford');

-- CREATE TABLE series (
--   id INT AUTO_INCREMENT PRIMARY KEY
--   ,title VARCHAR(100)
--   ,released_year YEAR(4)
--   ,genre VARCHAR(100)
-- );
-- INSERT INTO series (title, released_year, genre) VALUES
--     ('Archer', 2009, 'Animation'),
--     ('Arrested Development', 2003, 'Comedy'),
--     ("Bob's Burgers", 2011, 'Animation'),
--     ('Bojack Horseman', 2014, 'Animation'),
--     ("Breaking Bad", 2008, 'Drama'),
--     ('Curb Your Enthusiasm', 2000, 'Comedy'),
--     ("Fargo", 2014, 'Drama'),
--     ('Freaks and Geeks', 1999, 'Comedy'),
--     ('General Hospital', 1963, 'Drama'),
--     ('Halt and Catch Fire', 2014, 'Drama'),
--     ('Malcolm In The Middle', 2000, 'Comedy'),
--     ('Pushing Daisies', 2007, 'Comedy'),
--     ('Seinfeld', 1989, 'Comedy'),
--     ('Stranger Things', 2016, 'Drama');

-- CREATE TABLE reviews (
-- id INT AUTO_INCREMENT PRIMARY KEY
-- ,rating DECIMAL(2,1) 
-- ,series_id INT
-- ,reviewers_id INT
-- ,FOREIGN KEY(series_id) REFERENCES series(id) ON DELETE CASCADE
-- ,FOREIGN KEY(reviewers_id) REFERENCES reviewers(id) ON DELETE CASCADE
-- );
-- INSERT INTO reviews(series_id, reviewers_id, rating) VALUES (1, 1, 8.0), (1, 2, 7.5), (1, 3, 8.5), (1, 4, 7.7), (1, 5, 8.9), (2, 1, 8.1), (2, 4, 6.0), (2, 3, 8.0), (2, 6, 8.4), (2, 5, 9.9), (3, 1, 7.0), (3, 6, 7.5), (3, 4, 8.0), (3, 3, 7.1), (3, 5, 8.0), (4, 1, 7.5), (4, 3, 7.8), (4, 4, 8.3), (4, 2, 7.6), (4, 5, 8.5), (5, 1, 9.5), (5, 3, 9.0), (5, 4, 9.1), (5, 2, 9.3), (5, 5, 9.9), (6, 2, 6.5), (6, 3, 7.8), (6, 4, 8.8), (6, 2, 8.4), (6, 5, 9.1), (7, 2, 9.1), (7, 5, 9.7), (8, 4, 8.5), (8, 2, 7.8), (8, 6, 8.8), (8, 5, 9.3), (9, 2, 5.5), (9, 3, 6.8), (9, 4, 5.8), (9, 6, 4.3), (9, 5, 4.5), (10, 5, 9.9), (13, 3, 8.0), (13, 4, 7.2), (14, 2, 8.5), (14, 3, 8.9), (14, 4, 8.9);

-- SELECT  title
--        ,rating
-- FROM series
-- JOIN reviews
-- ON series_id = series.id;

-- SELECT  title
--        ,AVG(rating) AS avg_rating
-- FROM series
-- JOIN reviews
-- ON series_id = series.id
-- GROUP BY  series.id
-- ORDER BY avg_rating;

-- SELECT  first_name
--        ,last_name
--        ,rating
-- FROM reviewers
-- INNER JOIN reviews
-- ON reviewers.id = reviews.reviewers_id
-- WHERE first_name IN ("Thomas", "Wyatt", "Kimbra")
-- ORDER BY last_name DESC; 

-- SELECT  title AS unreviewed_series
-- FROM series
-- LEFT JOIN reviews
-- ON series.id = reviews.series_id
-- WHERE rating IS NULL;

-- SELECT  genre
--        ,ROUND(AVG(rating),2) AS avg_rating
-- FROM series
-- INNER JOIN reviews
-- ON series.id = reviews.series_id
-- GROUP BY  genre;

-- SELECT  first_name
--        ,last_name
--        ,COUNT(rating)                                                                                                                                AS COUNT
--        ,IFNULL (ROUND(MIN(rating),2),0)                                                                                                              AS MIN
--        ,IFNULL (ROUND(MAX(rating),2),0)                                                                                                              AS MAX
--        ,IFNULL (ROUND(AVG(rating),2),0) AS AVG
-- -- , IF (COUNT(rating) >= 1, "ACTIVE", "INACTIVE") AS STATUS
-- -- NOTE: IF CLAUSE AS AN ALTERNATE TO CASE WHEN
--        ,CASE WHEN (COUNT(rating) < 10) THEN "ACTIVE"
--              WHEN (COUNT(rating) >= 10) THEN "POWERUSER"  ELSE "INACTIVE" END                                                                        AS STATUS
-- FROM reviewers
-- LEFT JOIN reviews
-- ON reviewers.id = reviews.reviewers_id
-- GROUP BY  reviewers.id;

-- SELECT  title
--        ,rating
--        ,CONCAT(first_name," ",last_name) AS reviewer
-- FROM reviews
-- INNER JOIN reviewers
-- ON reviews.reviewers_id = reviewers.id
-- INNER JOIN series
-- ON reviews.series_id = series.id
-- ORDER BY title;

-- SELECT 
--     title,
--     rating,
--     CONCAT(first_name,' ', last_name) AS reviewer
-- FROM reviewers
-- INNER JOIN reviews 
--     ON reviewers.id = reviews.reviewer_id
-- INNER JOIN series
--     ON series.id = reviews.series_id
-- ORDER BY title;

-- LESSON: SECTION 14 INSTAGRAM DATABASE CLONE

-- SEE INSTAGRAM FOLDER

-- LESSON: SECTION 15 WORKING WITH LOTS OF INSTAGRAM DATA

-- SEE INSTAGRAM FOLDER

-- LESSON: SECTION 16 INTRODUCING NODE

-- SEE app_temp FOLDER

-- LESSON: SECTION 17 BUILDING OUR WEB APP

-- SEE JOINUS FOLDER

-- LESSON: SECTION 18 DATABASE TRIGGERS

-- SEE triggers FOLDER

