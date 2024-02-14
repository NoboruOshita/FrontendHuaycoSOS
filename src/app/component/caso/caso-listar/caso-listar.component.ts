import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { caso } from 'src/app/model/Caso';
import { CasosXDepartamentoDTO } from 'src/app/model/CasosXDepartamentoDTO';
import { CasoService } from 'src/app/service/Caso.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-caso-listar',
  templateUrl: './caso-listar.component.html',
  styleUrls: ['./caso-listar.component.css']
})
export class CasoListarComponent implements OnInit{
  lista: caso[]=[]
  dataSource:MatTableDataSource<caso>=new MatTableDataSource();
  dataSource2:MatTableDataSource<CasosXDepartamentoDTO>=new MatTableDataSource();
  displayedColumns:string[]=['id','titulo','argumento','idUsuario','idTipo','idUbicacion','accion01']
  displayedColumns2:string[]=['departamento','contador'];
  role: any;
  constructor(private ls:LoginService,private cS:CasoService,private router:Router){
  }
  ngOnInit(): void {
    this.role=this.ls.showRole();
      this.cS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        console.log(this.dataSource)
      })

      this.cS.getList().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })
      this.cS.getCasosByDepartamentos().subscribe(data=>{
        this.dataSource2=new MatTableDataSource(data);
      })
  }

  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

  boton_eliminar(idd:number){
    this.cS.delete(idd).subscribe(data=>{
      this.cS.list().subscribe(data=>{
        this.cS.setList(data);
    });})
  }
}
