import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { matTabsAnimations } from '@angular/material/tabs';
import { MensajesByRolDTO } from 'src/app/model/MensajesByRolDTO';
import { role } from 'src/app/model/role';
import { LoginService } from 'src/app/service/login.service';
import { roleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-role-listar',
  templateUrl: './role-listar.component.html',
  styleUrls: ['./role-listar.component.css']
})
export class RoleListarComponent implements OnInit{
  lista: role[]=[]
  dataSource:MatTableDataSource<role>=new MatTableDataSource();
  dataSource2:MatTableDataSource<MensajesByRolDTO>=new MatTableDataSource();
  displayedColumns:string[]=['id','role','usuario','accion01']
  displayedColumns2:string[]=['role','count']
  role:string="";
  constructor(private aS:roleService,private ls:LoginService){

  }

    // Variable para determinar si la tabla se muestra o no
    tablaVisible = false;

    // Función que se ejecuta al hacer clic en el botón para mostrar la tabla
    mostrarTabla() {
      if (this.tablaVisible == true) {
        this.tablaVisible = false;
      } else {
        this.tablaVisible = true;
      }
    }


  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.aS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.aS.getMensajesPorRol().subscribe(data => {
      this.dataSource2 = new MatTableDataSource(data);
    });
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
