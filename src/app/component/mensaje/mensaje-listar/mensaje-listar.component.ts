import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { mensaje } from 'src/app/model/mensaje';
import { MensajeService } from 'src/app/service/mensaje.service';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from 'src/app/service/login.service';
import { MensajeEnviadoDTO } from 'src/app/model/MensajeEnviadoDTO';

@Component({
  selector: 'app-mensaje-listar',
  templateUrl: './mensaje-listar.component.html',
  styleUrls: ['./mensaje-listar.component.css']
})
export class MensajeListarComponent implements OnInit{
  //lista: mensaje[]=[]
  dataSource:MatTableDataSource<mensaje>=new MatTableDataSource();
  dataSource2:MatTableDataSource<MensajeEnviadoDTO>=new MatTableDataSource();
  dataSource3:MatTableDataSource<MensajeEnviadoDTO>=new MatTableDataSource();
  displayedColumns:string[]=['id','dni','user_emisor','user_receptor','accion01']
  displayedColumns2:string[]=['receptor','descripcion']
  displayedColumns3:string[]=['Emisor','descripcion']
  role:string="";
  username:string="";
  constructor(private aS:MensajeService,private router:Router,private ls:LoginService){
  }


    ngOnInit(): void {
      this.role=this.ls.showRole();
      this.username=this.ls.get_user();
      console.log(this.role);

      this.aS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })

      this.aS.getList().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })


      this.aS.getMensajesEnviados(this.ls.get_user()).subscribe(data => {
        this.dataSource2 = new MatTableDataSource(data);
      });
      this.aS.getMensajesRecibidos(this.ls.get_user()).subscribe(data => {
        this.dataSource3 = new MatTableDataSource(data);
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
