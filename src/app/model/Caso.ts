import { Ubicacion } from "./Ubicacion";
import { tipo_de_caso } from "./tipo-de-caso";
import { usuario } from "./usuario";

export class caso{
  idCaso:number=0
  titulo:string=""
  argumento:string=""
  usuario:usuario = new usuario()
  tipoDeCaso: tipo_de_caso = new tipo_de_caso()
  ubicacion: Ubicacion = new Ubicacion()
}
