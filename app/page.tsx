import { obtenerTareas } from "@/lib/tareas-prisma"
import { TareaForm } from "./gestor-tareas/TareaForm"

export default async function Page() {
  const tareas = await obtenerTareas()

  return (
    <main className="flex flex-col gap-10">
      <h1 className="text-2xl mx-auto text-center">Gestor de tareas con Prisma</h1>

      <TareaForm />

      <section>
        <h2>Tareas guardadas</h2>

        {tareas.length === 0 ? (
          <p>Todavía no hay tareas.</p>
        ) : (
          <ul>
            {tareas.map((tarea) => (
              <li key={tarea.id}>
                <strong>{tarea.titulo}</strong>
                <p>{tarea.descripcion}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}