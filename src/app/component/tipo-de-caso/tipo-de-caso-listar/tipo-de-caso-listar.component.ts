import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import { tipo_de_casoService } from 'src/app/service/tipo-de-caso.service';
import { tipo_de_caso } from 'src/app/model/tipo-de-caso';
import { TipoDeCasoxCasosDTO } from 'src/app/model/TipoDeCasoxCasosDTO';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-tipo-de-caso-listar',
  templateUrl: './tipo-de-caso-listar.component.html',
  styleUrls: ['./tipo-de-caso-listar.component.css']
})
export class tipo_de_casoListarComponent implements OnInit{
lista: tipo_de_caso[]=[]
dataSource2:MatTableDataSource<TipoDeCasoxCasosDTO>=new MatTableDataSource();
dataSource:MatTableDataSource<tipo_de_caso>=new MatTableDataSource();
displayedColumns:string[]=['id','nombre','descripcion','acciones1']
displayedColumns2:string[]=['nombre','contador']
  role: any;
constructor(private ls:LoginService,private aS:tipo_de_casoService){
}


ngOnInit(): void {
  this.role=this.ls.showRole()
  this.aS.list().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    console.log("dataSourece",this.dataSource.data);

  })

  this.aS.getList().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  })

  this.aS.getTiposdecasoByCasos().subscribe(data=>{
    this.dataSource2=new MatTableDataSource(data);
  })
}
boton_eliminar(idd:number){
  this.aS.delete(idd).subscribe(data=>{
    this.aS.list().subscribe(data =>{
      this.aS.setList(data);
    })
  })
}
filter(e: any) {
  this.dataSource.filter = e.target.value.trim();
}
}
