CREATE TABLE IF NOT EXISTS posts (
    id serial primary key,
    title VARCHAR(45),
    img text,
    content text,
    author_id integer
);