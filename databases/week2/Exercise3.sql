-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user_task.user_id, user_task.task_id, task.title, user.email 
FROM user_task, task, user
WHERE task.id  = user_task.task_id
AND user.id = user_task.user_id
AND user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id, task.title, user.name, status.name
FROM task, user, status, user_task
WHERE user_task.task_id = task.id
AND user_task.user_id = user.id
AND user.name = 'Donald Duck'
AND status.name = 'Not started';
  
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.id, task.title, user.name, task.created
FROM task, user, status, user_task
WHERE user_task.task_id = task.id
AND user_task.user_id = user.id
AND user.name = 'Maryrose Meadows'
AND MONTH(task.created) = 9 GROUP BY task.id;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october,
-- how many tasks were created in november, etc. (hint: use group by)
select * from task;
SELECT COUNT(task.status_id) Count, MONTHNAME(task.created) Month_Name 
FROM task
WHERE created IS NOT NULL 
GROUP BY MONTH(task.created); 