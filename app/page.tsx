import { obtenerTareas } from "@/lib/tareas-prisma";
import { TareaForm } from "./gestor-tareas/TareaForm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Page() {
  const tareas = await obtenerTareas();

  return (
    <main className="flex flex-col gap-10">
      <h1 className="text-2xl mx-auto text-center">
        Gestor de tareas con Prisma
      </h1>

      <TareaForm />

      <Table>
        <TableCaption> Tareas Guardadas </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead> Titulo </TableHead>
            <TableHead> Descripción </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tareas.map((tarea) => (
            <TableRow key={tarea.id}>
              <TableCell>{tarea.titulo}</TableCell>
              <TableCell>{tarea.descripcion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell> {tareas.length} </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
}
