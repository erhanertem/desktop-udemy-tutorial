DELIMITER $$
CREATE TRIGGER self_follow_prevention 
BEFORE INSERT ON follows FOR EACH ROW
BEGIN 
IF NEW.follower_id = NEW.followee_id
THEN 
SIGNAL SQLSTATE '45000'
SET MESSAGE_TEXT = 'You cannot follow yourself!';
END IF;
END;
$$

DELIMITER ;