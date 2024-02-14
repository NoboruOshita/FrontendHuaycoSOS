import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { evento } from 'src/app/model/evento';
import { EventoService } from 'src/app/service/evento.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-evento-listar',
  templateUrl: './evento-listar.component.html',
  styleUrls: ['./evento-listar.component.css']
})
export class EventoListarComponent implements OnInit{
  lista: evento[]=[]
  dataSource:MatTableDataSource<evento>=new MatTableDataSource();
  displayedColumns:string[]=['id','descripcion','ubicacion','inicio','fin','donador','accion01']
  role: any;

  constructor(private ls:LoginService,private aS:EventoService,private router:Router){
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

