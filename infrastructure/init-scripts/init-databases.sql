-- Script tự động khởi tạo các database độc lập cho từng microservice
-- Tuân thủ nguyên tắc "Database per Service"

CREATE DATABASE auth_db;
CREATE DATABASE user_db;
CREATE DATABASE post_db;
