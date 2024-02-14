import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/model/Ubicacion';
import {MatTableDataSource} from '@angular/material/table'
import { UbicacionService } from 'src/app/service/Ubicacion.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-ubicacion-listar',
  templateUrl: './ubicacion-listar.component.html',
  styleUrls: ['./ubicacion-listar.component.css']
})
export class UbicacionlistarComponent implements OnInit{
  lista: Ubicacion[]=[]
  dataSource:MatTableDataSource<Ubicacion>=new MatTableDataSource();
  displayedColumns:string[]=['id','departamento','distrito','direccion','accion01']
  role: any;

  constructor(private ls:LoginService,private aS:UbicacionService,private router:Router){

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

