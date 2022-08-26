-- -- NOTE: DWELLS ON WORK @ INSTAGRAM FOLDER. THIS IS JUST AN ITERATION ON THE WORK RELATED TO TRIGGER EXERCISES
-- SHOW DATABASES;
-- USE ig_clone;
-- SHOW TABLES;
-- INSERT INTO follows(follower_id,followee_id) VALUES(4,4);
-- NOTE: a follower could follow himself. WE would need a self-follow check trigger set up
-- SOURCE triggers/ig_trigger.sql;
-- INSERT INTO follows(follower_id,followee_id) VALUES(4,4);
-- NOTE: a follower could not follow himself due to established trigger @ ig_trigger.sql
-- -- CREATE unfollows TABLE TO REGISTER THE UNFOLLOW EVENTS
-- CREATE TABLE unfollows (
--   follower_id INT NOT NULL,
--   followee_id INT NOT NULL,
--   created_at TIMESTAMP DEFAULT NOW(),
--   FOREIGN KEY(follower_id) REFERENCES users(id),
--   FOREIGN KEY(followee_id) REFERENCES users(id),
--   PRIMARY KEY(follower_id,followee_id)
-- );

-- DELETE
-- FROM follows
-- WHERE follower_id = 2 && followee_id = 1;

-- SELECT  *
-- FROM unfollows;
-- -- unfollows receives the deleted follow. 

-- DROP TRIGGER character_set_client;
-- -- removes the existing trigger