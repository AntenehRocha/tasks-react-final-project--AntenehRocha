"use client";

import { useState } from "react";
import { Tarea } from "@/app/modulos/tarea";
import { FormCrearTarea } from "@/app/modulos/formCrearTarea";
import { TablaTareas } from "@/app/modulos/tablaTareas";

export default function Home() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const crearTarea = () => {
    if (!nombre.trim()) return;

    const nuevaTarea: Tarea = {
      id: Date.now(),
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
    setNombre("");
    setDescripcion("");
  };

  const marcarCompletada = (id: number) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl p-4">
        <h1 className="text-3xl font-bold mb-4">Gestor de tareas</h1>

        <FormCrearTarea
          nombre={nombre}
          descripcion={descripcion}
          setNombre={setNombre}
          setDescripcion={setDescripcion}
          crearTarea={crearTarea}
        />

        <div className="mt-8">
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-semibold">Tareas</h2>
            <span className="text-sm text-black">total {tareas.length}</span>
          </div>
          <TablaTareas tareas={tareas} marcarCompletada={marcarCompletada} />
        </div>
      </div>
    </div>
  );
}
