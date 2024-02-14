import { usuario } from "./usuario"
export class evento{
  idEvento:number=0
  descripcion:string=""
  ubicacion:string=""
  inicio:Date=new Date(Date.now())
  fin:Date=new Date(Date.now())
  user:usuario =  new usuario
}
