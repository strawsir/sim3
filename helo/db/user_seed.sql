CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    username VARCHAR(20),
    password varchar(20),
    profile_pic text
);
