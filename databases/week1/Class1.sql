SELECT * FROM task;
-- Find out how many tasks are in the task table
SELECT COUNT(*) FROM task;
-- Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) FROM task WHERE due_date IS NULL;
-- Find all the tasks that are marked as done
SELECT title FROM task WHERE status_id=3;
-- Find all the tasks that are not marked as done
SELECT title FROM task WHERE status_id IN(1,2);
-- Get all the tasks, sorted with the most recently created first
SELECT * FROM task ORDER BY created DESC;
-- Get the single most recently created task
SELECT title,description,created FROM task ORDER BY created DESC LIMIT 1;
-- Get the title and due date of all tasks where the title or description contains database
-- SELECT title, due_date FROM task WHERE title 
-- like '%' || 'database' || '%' OR description like '%' || 'database' || '%';
SELECT title, due_date FROM task WHERE title 
like '%database%' OR description like '%database%';
-- Get the title and status (as text) of all task
SELECT task.title,status.name FROM task JOIN status ON task.status_id=status.id;
-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.id) Count FROM status JOIN task ON task.status_id=status.id GROUP BY status.id;
-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name Name, COUNT(task.id) Count FROM status JOIN task ON task.status_id=status.id GROUP BY status.id ORDER BY COUNT(task.id) DESC;