import { caso } from "./Caso"
import { usuario } from "./usuario"

export class donacion{
  idDonacion:number=0
  tipo:string=""
  viveres:string=""
  cantidad:number=0
  caso: caso =  new caso
  usuario: usuario=new usuario
}
