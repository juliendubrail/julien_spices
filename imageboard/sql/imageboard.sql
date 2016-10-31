
-- DROP TABLE IF EXISTS images;
CREATE TABLE images (
id SERIAL primary key,
url VARCHAR(255) not null,
title VARCHAR(255) not null,
description VARCHAR(255) not null,
user_name VARCHAR(255) not null,
CreateDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



-- DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
    id SERIAL primary key,
    img_id INT references images(id),
    user_name  VARCHAR(255) not null,
    comment  VARCHAR(255) not null,
    CreateDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
