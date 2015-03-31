CREATE DATABASE chat;

USE chat;
CREATE TABLE users (
  user_ID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (user_ID),
  username varchar(50)
  -- password varchar(255) 
);

CREATE TABLE rooms(
  roomname varchar(50),
  room_ID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (room_ID)
);

CREATE TABLE messages (
  
  message_ID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (message_ID),
  user_ID int, 
  FOREIGN KEY (user_ID) REFERENCES users(user_ID), 
  message varchar(255),
  room_ID int,
  FOREIGN KEY (room_ID) REFERENCES rooms(room_ID),
  time TIMESTAMP

);
