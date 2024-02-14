import { usuario } from "./usuario"

export class cuentabancaria{
  idCuentabancaria:number=0
  numero:number=0
  cvv:number=0
  vencimiento:Date=new Date(Date.now())
  usuario: usuario=new usuario
}
