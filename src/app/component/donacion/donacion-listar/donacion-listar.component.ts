import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { departamentoxDonacionDTO } from 'src/app/model/departamentoxDonacionDTO';
import { donacion } from 'src/app/model/donacion';
import { DonacionService } from 'src/app/service/donacion.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-donacion-listar',
  templateUrl: './donacion-listar.component.html',
  styleUrls: ['./donacion-listar.component.css']
})
export class DonacionListarComponent implements OnInit{
  lista: donacion[]=[]
  dataSource:MatTableDataSource<donacion>=new MatTableDataSource();
  dataSource2:MatTableDataSource<departamentoxDonacionDTO>=new MatTableDataSource();
  displayedColumns:string[]=['id','tipo','viveres','cantidad','caso','usuario','accion01']
  displayedColumns2:string[]=['Departamento','contador']
  role: any;
  constructor(private ls:LoginService,private donS:DonacionService,private router:Router){
  }


    ngOnInit(): void {
      this.role=this.ls.showRole();
      this.donS.list().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })

      this.donS.getList().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })

      this.donS.getdonacionsxDepartamento().subscribe(data => {
        this.dataSource2 = new MatTableDataSource(data);
      });
  }

  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }

  boton_eliminar(idd:number){
    this.donS.delete(idd).subscribe(data=>{
      this.donS.list().subscribe(data=>{
        this.donS.setList(data);
    });})
  }
}
