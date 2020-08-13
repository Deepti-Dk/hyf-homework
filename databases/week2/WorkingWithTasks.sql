-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES ('DB-W2 HW', 'Homework to be completed, no matter what!', CURDATE(),'2020-08-10','2020-08-12',2,2);
-- Change the title of a task
UPDATE task SET title = 'Hanging just one painting in the living room' WHERE id=33;
-- Change a task due date
UPDATE task SET due_date = '2020-08-13' WHERE id=36;
-- Change a task status
UPDATE task SET status_id=2 WHERE id=31;
-- Mark a task as complete
UPDATE task SET status_id=3 WHERE id=24;
-- Delete a task
DELETE FROM task WHERE title='Wash clothes';