drop database if exists movie_db;
create database movie_db;

use movie_db;

create table movies (
    id int not null primary key auto_increment,
    name varchar(30),
    category varchar(30)
);

create table reviews (
    id int not null primary key auto_increment,
    rating int not null,
    review text not null,
    reviewer varchar(20) not null,
    movie_id int not null,
    foreign key (movie_id) references movies(id) on delete cascade
);