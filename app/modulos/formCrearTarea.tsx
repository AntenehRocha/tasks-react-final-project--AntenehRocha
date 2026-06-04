"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormCrearTareaProps {
  nombre: string;
  descripcion: string;
  setNombre: (value: string) => void;
  setDescripcion: (value: string) => void;
  crearTarea: () => void;
}

export function FormCrearTarea({
  nombre,
  descripcion,
  setNombre,
  setDescripcion,
  crearTarea,
}: FormCrearTareaProps) {
  return (
    <div className="space-y-4 border border-gray-700 bg-white p-4 rounded-lg text-black">
      <div>
        <Label htmlFor="nombre" className="block text-sm text-black mb-1">
          Nombre de tarea
        </Label>
        <Input
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          placeholder="nombre"
          className="w-full rounded border border-gray-700 bg-white p-2 text-black"
        />
      </div>

      <div>
        <Label htmlFor="descripcion" className="block text-sm text-black mb-1">
          Descripción
        </Label>
        <Input
          id="descripcion"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          placeholder="descripción"
          className="w-full rounded border border-gray-700 bg-white p-2 text-black"
        />
      </div>

      <Button type="button" onClick={crearTarea} className="w-full rounded">
        Crear nueva tarea
      </Button>
    </div>
  );
}
