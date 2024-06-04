CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL
);

INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');
