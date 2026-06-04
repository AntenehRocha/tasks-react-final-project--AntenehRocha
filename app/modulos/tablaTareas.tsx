"use client";

import { Tarea } from "./tarea";
import { Button } from "@/components/ui/button";

interface TablaTareasProps {
  tareas: Tarea[];
  marcarCompletada: (id: number) => void;
}

export function TablaTareas({ tareas, marcarCompletada }: TablaTareasProps) {
  if (tareas.length === 0) {
    return (
      <div className="border border-gray-700 bg-white p-4 rounded-lg text-black text-center">
        No hay tareas aun
      </div>
    );
  }

  const elementos = [];

  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];

    if (!tarea) {
      continue;
    }

    const estadoClase = tarea.completada ? "text-green-600" : "text-orange-600";
    const estadoTexto = tarea.completada ? "completada" : "pendiente";

    elementos.push(
      <div
        key={tarea.id}
        className="border border-gray-700 bg-white p-4 rounded-lg"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold">{tarea.nombre}</span>
            <span className="text-sm text-black">{tarea.descripcion}</span>
          </div>
          <Button variant="default" onClick={() => marcarCompletada(tarea.id)}>
            Marcar completada
          </Button>
        </div>
        <div className={`mt-3 text-sm ${estadoClase}`}>{estadoTexto}</div>
      </div>,
    );
  }

  return <div className="space-y-3">{elementos}</div>;
}
