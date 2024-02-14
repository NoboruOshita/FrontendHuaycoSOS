import { Component, OnInit } from '@angular/core';
import { cuentabancaria } from 'src/app/model/cuentabancaria';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { cuentabancariaService } from 'src/app/service/cuentabancaria.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-cuentabancaria-listar',
  templateUrl: './cuentabancaria-listar.component.html',
  styleUrls: ['./cuentabancaria-listar.component.css']
})
export class cuentabancariaListarComponent implements OnInit{
lista: cuentabancaria[]=[]
dataSource:MatTableDataSource<cuentabancaria>=new MatTableDataSource();
displayedColumns:string[]=['id','numero','cvv','vencimiento','user','accion01']
  role: any;

constructor(private ls:LoginService, private aS:cuentabancariaService,private router:Router){
}



ngOnInit(): void {
  this.role=this.ls.showRole();
  this.aS.list().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  })

  this.aS.getList().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  })
}

filtrar(e:any){
  this.dataSource.filter=e.target.value.trim();
}

boton_eliminar(idd:number){
  this.aS.delete(idd).subscribe(data=>{
    this.aS.list().subscribe(data=>{
      this.aS.setList(data);
  });})
}
}
