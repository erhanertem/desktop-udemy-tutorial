-- CREATE DATABASE ig_clone;
-- USE ig_clone;

-- CREATE TABLE users (
--   id INT AUTO_INCREMENT PRIMARY KEY
--   , username VARCHAR(255) UNIQUE NOT NULL
--   , created_at TIMESTAMP DEFAULT NOW());

-- CREATE TABLE photos (
--   id INT AUTO_INCREMENT PRIMARY KEY
--   , image_url VARCHAR(255) NOT NULL
--   , user_id INT NOT NULL
--   , created_at TIMESTAMP DEFAULT NOW()
--   , FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
--   );

-- CREATE TABLE comments (
--   id INT AUTO_INCREMENT PRIMARY KEY
--   , comment_text VARCHAR(255) NOT NULL
--   , user_id INT NOT NULL
--   , photo_id INT NOT NULL
--   , created_at TIMESTAMP DEFAULT NOW()
--   , FOREIGN KEY(user_id) REFERENCES users(id)
--   , FOREIGN KEY(photo_id) REFERENCES photos(id)
-- );

-- CREATE TABLE likes (
--   user_id INT NOT NULL, 
--   photo_id INT NOT NULL, 
--   created_at TIMESTAMP DEFAULT NOW(), 
--   FOREIGN KEY(user_id) REFERENCES users(id), 
--   FOREIGN KEY(photo_id) REFERENCES photos(id),
--   PRIMARY KEY(user_id, photo_id)
--   );
-- -- NOTE: having primary key assigned to both user_id and photo_id eliminates the possibility of having dublicate likes

-- CREATE TABLE follows (
-- follower_id INT NOT NULL, 
-- followee_id INT NOT NULL,
-- created_at TIMESTAMP DEFAULT NOW(),
-- FOREIGN KEY(follower_id) REFERENCES users(id),
-- FOREIGN KEY(followee_id) REFERENCES users(id),
-- PRIMARY KEY (follower_id, followee_id)
-- -- NOTE: friendship can only exist once so we lock follower_id and followee_id to a single instance via primary key
-- );

-- CREATE TABLE tags (
-- id INT AUTO_INCREMENT PRIMARY KEY,
-- tag_name VARCHAR(255) UNIQUE,
-- created_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE photo_tags (
-- photo_id INT NOT NULL,
-- tag_id INT NOT NULL,
-- FOREIGN KEY(tag_id) REFERENCES tags(id),
-- FOREIGN KEY(photo_id) REFERENCES photos(id),
-- PRIMARY KEY (photo_id, tag_id)
-- );



-- INSERT INTO users (username) VALUES 
-- ("BlueTheCat")
-- , ("CharlieBrown")
-- , ("ColtSteele");

-- INSERT INTO photos (image_url, user_id) VALUES 
--     ("/alskjd76", 1)
--   , ("/alskjd98", 2)
--   , ("/90skjd76", 2);

-- INSERT INTO comments(comment_text, user_id, photo_id) VALUES ("Meow!", 1, 2), ("Amazing shot!", 3, 2), ("I <3 This", 2, 1);

-- INSERT INTO likes (user_id, photo_id) VALUES (1,1),(2,1),(1,2),(1,3),(3,1);

-- INSERT INTO likes (user_id, photo_id) VALUES (1,1);
-- -- NOTE: DENIED due to dublicate entry

-- INSERT INTO follows(follower_id, followee_id) VALUES (1, 2), (1, 3), (3, 1), (2, 3);

-- INSERT INTO follows(follower_id, followee_id) VALUES (1, 3);
-- -- NOTE: DENIED due to dublicate entry - can not follow twice
-- INSERT INTO follows(follower_id, followee_id) VALUES (2,1);
-- -- NOTE: ACCEPTED - never occured before

-- INSERT INTO tags(tag_name) VALUES 
-- ('adorable'),
-- ('cute'),
-- ('sunrise');
-- INSERT INTO photo_tags(photo_id,tag_id) VALUES
-- (1,1),
-- (1,2),
-- (2,3),
-- (3,2);

-- INSERT INTO photo_tags(photo_id,tag_id) VALUES
-- (1,1);
-- -- NOTE: no dublicate allowed test

-- SELECT  image_url
--        ,username
-- FROM photos
-- JOIN users
-- ON photos.user_id = users.id;

-- LESSON: SECTION 15 WORKING WITH LOTS OF INSTAGRAM DATA

-- -- Action#1 - Find the oldest 5 registration dates 
-- SELECT  *
-- FROM users ORDER BY created_at
-- LIMIT 5;

-- -- Action#2 - Find out the most popular registration date
-- SELECT  DAYNAME(created_at) AS week_day
--        ,COUNT(DISTINCT created_at) AS total_occurance
-- FROM users
-- GROUP BY  week_day ORDER BY total_occurance DESC LIMIT 2;
-- -- DISTINCT created_at VS * yields the same results
-- SELECT  DAYNAME(created_at) AS week_day
--        ,COUNT(*) AS total_occurance
-- FROM users
-- GROUP BY  week_day ORDER BY total_occurance DESC LIMIT 2;

-- -- Action#3 - Identify users with no photos
-- SELECT username FROM users LEFT JOIN photos on users.id=photos.user_id WHERE photos.id IS NULL ORDER BY username; 
-- SELECT username FROM photos LEFT JOIN users on users.id=photos.user_id WHERE photos.id IS NULL ORDER BY username; 


-- -- Action#4 - Most popular photo (and user who created it)

-- SELECT  username
--        ,photos.id
--        ,image_URL
--        ,COUNT(*) AS popularity
-- FROM photos
-- JOIN likes
-- ON photos.id = likes.photo_id
-- JOIN users
-- ON users.id = photos.user_id
-- GROUP BY  image_URL
-- ORDER BY popularity DESC
-- LIMIT 1;

-- -- Action#5 - Calculate average number of photos per user

-- -- total number of photos / total number of users
-- SELECT  ((
-- SELECT  COUNT(*)
-- FROM photos) / (
-- SELECT  COUNT(*)
-- FROM users)) AS avg;

-- -- Action#6 - Find the Top 5 hashtags
-- SELECT  tags.tag_name
--        ,COUNT(*) AS total_hashtags
-- FROM photo_tags
-- JOIN tags
-- ON photo_tags.tag_id = tags.id
-- GROUP BY  tags.id
-- ORDER BY total_hashtags DESC
-- LIMIT 5;

-- -- Action#7 - Find the users(BOTS) which liked every single photo on the site
-- SELECT  users.username
--        ,COUNT(*) AS total_likes
-- FROM likes
-- JOIN users
-- ON users.id = likes.user_id
-- GROUP BY  users.id
-- HAVING total_likes = (SELECT COUNT(*)
-- FROM photos)
-- ORDER BY username;
-- -- NOTE: WHERE COULD NOT BE USED HERE AS IT HAS TO COME BEFORE GROUP BY. HERE, WE NEED TO HAVE IT AFTER GROUP BY sBLOCK. SO HAVING ... AN ALTERNATE OF WHERE NEEDS TO BE USED HERE.

