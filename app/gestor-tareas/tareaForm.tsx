import { crearTarea } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TareaForm() {
  return (
    <form className="flex flex-col gap-10" action={crearTarea}>
      <Label className="gap-5">
        Título
        <Input name="titulo" />
      </Label>

      <Label className="gap-5">
        Descripción
        <Textarea name="descripcion" />
      </Label>

      <Button type="submit">Guardar tarea</Button>
      <Button variant="destructive">Eliminar tarea</Button>
    </form>
  );
}
