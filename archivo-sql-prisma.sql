CREATE DATABASE gestor_tareas_prisma;
USE gestor_tareas_prisma;

CREATE TABLE tareas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descripcion TEXT NOT NULL,
  creada_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

SELECT * FROM tareas;