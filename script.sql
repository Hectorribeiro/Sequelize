CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(50) NOT NULL,
    born_date TIMESTAMP NOT NULL,
    nickname DEFAULT ''
);  


TRUNCATE TABLE user;

