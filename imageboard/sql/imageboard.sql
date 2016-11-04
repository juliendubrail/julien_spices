
-- DROP TABLE IF EXISTS public.comments CASCADE;
-- DROP TABLE IF EXISTS public.images CASCADE;

CREATE TABLE images (
id SERIAL primary key,
url VARCHAR(255),
title VARCHAR(255) ,
description VARCHAR(255),
user_name VARCHAR(255),
CreateDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE comments (
    id SERIAL primary key,
    img_id INT references images(id),
    user_name VARCHAR(255),
    comment  VARCHAR(255),
    CreateDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
