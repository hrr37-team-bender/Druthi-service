DROP DATABASE IF EXISTS imageCarousel;
CREATE DATABASE IF NOT EXISTS imageCarousel;

USE imageCarousel;


CREATE TABLE IF NOT EXISTS images (
    id INT AUTO_INCREMENT,
    image_url VARCHAR(255) NOT NULL,
    product_id INT,
    PRIMARY KEY (id)
)



