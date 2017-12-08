### Schema
CREATE DATABASE chores_db;
USE chores_db;

CREATE TABLE tasks
(
	task_id int NOT NULL AUTO_INCREMENT,
	taskname varchar(255) NOT NULL,
    taskhrs Float(3,2),
	PRIMARY KEY (task_id)
);


CREATE TABLE user
(
	user_id int NOT NULL auto_increment,
    username varchar(255) NOT NULL,
    PRIMARY KEY (user_id)
);


CREATE TABLE task_pref_map
(
	pref_id int NOT NULL AUTO_INCREMENT,
    task_id int,
    user_id int,
    ranking int,
    PRIMARY KEY (pref_id)
    
);


CREATE TABLE task_user_map
(
	tumap_id int NOT NULL AUTO_INCREMENT,
    task_id int,
    user_id int,
    sched_id int,
	PRIMARY KEY (tumap_id)
);



CREATE TABLE task_user_sched
(
	tu_sched_id int NOT NULL AUTO_INCREMENT,
    sched_day varchar(255) NOT NULL,
    PRIMARY KEY (tu_sched_id)
);


