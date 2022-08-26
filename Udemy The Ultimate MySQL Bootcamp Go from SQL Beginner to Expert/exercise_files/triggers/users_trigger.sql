DELIMITER $$
-- NOTE: SETS THE EXTEND OF THE CODE BLOCK TEMPORARILIY WITH $$. WITHOUT IT WE CANT GET THE MULTIPLE CODES RUN IN ONE BLOCK. THEY WOULD GET EXECUTED LINE BY LINE WHENEVER POSSIBLE.
CREATE TRIGGER must_be_adult
     BEFORE INSERT ON users FOR EACH ROW
     BEGIN
          IF NEW.age < 18
-- NOTE: NEW.**** when things gets added, OLD.**** when things is about to be deleted
          THEN
              SIGNAL SQLSTATE '45000'
              -- NOTE: sqlstate 45000 error code is reserved for custom defined messages 
                    SET MESSAGE_TEXT = 'Must be an adult!';
                    -- NOTE: sets the message for the selected error code
          END IF;
     END;
$$

DELIMITER ;
-- NOTE: WE RETURN TO DEFAULT DELIMITER WHICH IS ;  FOR REGULAR STATEMENTS IN SQL