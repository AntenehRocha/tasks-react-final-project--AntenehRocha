import { crearTarea } from "./actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function TareaForm() {
  return (
    <form className="flex flex-col gap-10" action={crearTarea}>
      <Label>
        Título
        <Input name="titulo" />
      </Label>

      <Label>
        Descripción
        <Textarea name="descripcion" />
      </Label>

      <Button>Guardar tarea</Button>
    </form>
  );
}
