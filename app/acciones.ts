"use server";

import { conexionDB } from "@/lib/db";

export async function guardarTareas(tarea: {
  nombre: string;
  descripcion: string;
}) {
  try {
    const conexion = await conexionDB();

    await conexion?.execute(
      "INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)",
      [tarea.nombre, tarea.descripcion],
    );
    await conexion?.end();
  } catch {
    console.error("no se ha podido guardar la tarea");
  }
}
