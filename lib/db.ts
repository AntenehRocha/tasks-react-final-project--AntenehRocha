import mysql from 'mysql2/promise';

  export async function conexionDB () {
    try {
      const conexion = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'gestor_tareas',
        port: 5432
      });
      console.log('conexion realizada correctamente');
      return conexion;
    } catch {
      console.error('no se ha podido conectar a la base de datos');
    }
  }