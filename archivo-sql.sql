CREATE DATABASE gestor_tareas;

\c gestor_tareas

CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    creada_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
