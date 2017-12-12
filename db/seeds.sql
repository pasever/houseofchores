INSERT INTO tasks (taskname, taskhrs) VALUES ('Wash Dishes', 0.5);
INSERT INTO tasks (taskname, taskhrs) VALUES ('Vacuum', 1.0);
INSERT INTO tasks (taskname, taskhrs) VALUES ('Take out Garbage', 0.2);
INSERT INTO tasks (taskname, taskhrs) VALUES ('Clean Bathrooms',1.5);
INSERT INTO tasks (taskname, taskhrs) VALUES ('Cook', 1.0);
INSERT INTO tasks (taskname, taskhrs) VALUES ('Buy Grocery', 2.0);
INSERT INTO tasks (taskname, taskhrs) VALUES ('Do Laundry', 2.3);
INSERT INTO tasks (taskname, taskhrs) VALUES ('Mow Lawn', 2.0);
INSERT INTO tasks (taskname, taskhrs) VALUES ('Trim Hedges', 2.1);


INSERT INTO task_user_sched (sched_day) VALUES ('Sunday');
INSERT INTO task_user_sched (sched_day) VALUES ('Monday');
INSERT INTO task_user_sched (sched_day) VALUES ('Tuesday');
INSERT INTO task_user_sched (sched_day) VALUES ('Wednesday');
INSERT INTO task_user_sched (sched_day) VALUES ('Thursday');
INSERT INTO task_user_sched (sched_day) VALUES ('Friday');
INSERT INTO task_user_sched (sched_day) VALUES ('Saturday');
INSERT INTO task_user_sched (sched_day) VALUES ('Daily');


INSERT INTO chores_db.user (username, login, pswd) VALUES ('Gerald Porter', 'gp', '1234');
INSERT INTO chores_db.user (username, login, pswd) VALUES ('David Cresson', 'dc', '1234');
INSERT INTO chores_db.user (username, login, pswd) VALUES ('Evgheni Pascalov', 'ep', '1234');
INSERT INTO chores_db.user (username, login, pswd) VALUES ('Matt McIntyre', 'mm', '1234');



INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (1, 1, 1, 5);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (2, 1, 2, 2);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (3, 1, 3, 7);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (4, 1, 4, 4);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (5, 1, 5, 8);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (6, 1, 6, 9);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (7, 1, 7, 3);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (8, 1, 1, 6);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (9, 1, 2, 7);




INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (1, 2, 2, 5);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (2, 2, 3, 6);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (3, 2, 4, 1);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (4, 2, 5, 3);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (5, 2, 6, 2);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (6, 2, 7, 8);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (7, 2, 1, 4);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (8, 2, 2, 7);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (9, 2, 3, 9);


INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (1, 3, 3, 2);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (2, 3, 4, 7);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (3, 3, 5, 3);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (4, 3, 6, 5);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (5, 3, 7, 8);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (6, 3, 1, 4);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (7, 3, 2, 6);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (8, 3, 3, 1);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (9, 3, 4, 9);


INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (1, 4, 4, 1);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (2, 4, 5, 4);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (3, 4, 6, 5);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (4, 4, 7, 7);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (5, 4, 1, 3);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (6, 4, 2, 2);
INSERT INTO chores_db.user_chores  (task_id, user_id, tu_sched_id, ranking) VALUES (7, 4, 3, 8);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (8, 4, 4, 9);
INSERT INTO chores_db.user_chores (task_id, user_id, tu_sched_id, ranking) VALUES (9, 4, 5, 6);


-- 
-- SELECT tasks.task_id, tasks.taskname, user_chores.user_id, user.username 
-- FROM ((tasks
-- INNER JOIN user_chores ON tasks.task_id = user_chores.task_id)
-- INNER JOIN user ON user.user_id = user_chores.user_id);

