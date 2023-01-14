-- -- LESSON 17 INSTAGRAM DATABASE CLONE
CREATE DATABASE instagram;

USE instagram;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE photos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  user_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comment_text VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  user_id INT NOT NULL,
  photo_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(photo_id) REFERENCES photos(id)
);

CREATE TABLE likes (
  created_at TIMESTAMP DEFAULT NOW(),
  user_id INT NOT NULL,
  photo_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(photo_id) REFERENCES photos(id),
  PRIMARY KEY(user_id, photo_id)
);

CREATE TABLE follows (
  follower_id INT NOT NULL,
  followee_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (follower_id) REFERENCES users(id),
  FOREIGN KEY (followee_id) REFERENCES users(id),
  PRIMARY KEY (follower_id, followee_id)
);

-- IMPLEMENT HASHTAGS
CREATE TABLE tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE photo_tags(
  photo_id INT NOT NULL,
  tag_id INT NOT NULL,
  FOREIGN KEY (photo_id) REFERENCES photos(id),
  FOREIGN KEY (tag_id) REFERENCES tags(id),
  PRIMARY KEY (photo_id, tag_id)
);

-- ------------------
INSERT INTO
  users (username)
VALUES
  ('BlueTheCat'),
  ('CharlieBrown'),
  ('ColtSteele');

INSERT INTO
  photos (image_url, user_id)
VALUES
  ('/agwtetydher12', 1),
  ('/agwtetydher23', 2),
  ('/agwtetydher45', 2);

INSERT INTO
  comments (comment_text, user_id, photo_id)
VALUES
  ('Meow!', 1, 2),
  ('Amazing show!', 3, 2),
  ('I LOVE robots', 2, 1);

SHOW TABLES;

SELECT
  image_url,
  username
FROM
  photos
  JOIN users ON photos.user_id = users.id;

INSERT INTO
  likes(user_id, photo_id)
VALUES
  (1, 1),
  (2, 1),
  (1, 2),
  (1, 3),
  (3, 3);

-- DUBLICATE ENTRY NOT ALLOWED....
INSERT INTO
  likes(user_id, photo_id)
VALUES
  (1, 1);

INSERT INTO
  follows(follower_id, followee_id)
VALUES
  (1, 2),
  (1, 3),
  (3, 1),
  (2, 3);

-- DUBLICATE ENTRY NOT ALLOWED....
INSERT INTO
  follows(follower_id, followee_id)
VALUES
  (1, 3);

INSERT INTO
  tags (tag_name)
VALUES
  ('adorable'),
  ('cute'),
  ('paris');

INSERT INTO
  photo_tags (photo_id, tag_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 2);

-- DUBLICATE ENTRY NOT ALLOWED....
INSERT INTO
  photo_tags (photo_id, tag_id)
VALUES
  (1, 1);