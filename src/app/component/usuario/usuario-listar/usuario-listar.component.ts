import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { usuarioByDonacionDTO } from 'src/app/model/UsuarioByDonacionDTO';
import { usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/service/login.service';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit{
  lista: usuario[]=[]
  role:any
  dataSource:MatTableDataSource<usuario>=new MatTableDataSource();
  dataSource2:MatTableDataSource<usuarioByDonacionDTO>=new MatTableDataSource();
  displayedColumns:string[]=['id','username','enabled','nombres','apellidos','edad','telefono','correo','accion01']
  displayedColumns2:string[]=['id','contador']
  constructor(private ls:LoginService,private uS:usuarioService){

  }
  ngOnInit(): void {
    this.role=this.ls.showRole();

  this.uS.list().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  })

  this.uS.getList().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  })

  this.uS.getDonacionesByUser().subscribe(data => {
    this.dataSource2 = new MatTableDataSource(data);
  });
  }

  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

  boton_eliminar(idd:number){
    this.uS.delete(idd).subscribe(data=>{
      this.uS.list().subscribe(data=>{
        this.uS.setList(data);
    });})
  }


  }
