CREATE TABLE users(
    username VARCHAR(25) PRIMARY KEY,
    password TEXT NOT NULL,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    email TEXT NOT NULL CHECK (position('@' IN email) > 1),
    phone VARCHAR(14) -- Example format: (123) 456-7890
        CHECK (phone ~ '^\(\d{3}\) \d{3}-\d{4}$'),
    admin BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO users (username, password, first_name, last_name, email, phone, admin)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User',
        'test@test.com',
        '(123) 456-7890',
        FALSE),
        ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'Admin',
        'testAdmin@test.com',
        '(123) 456-7890',
        TRUE);