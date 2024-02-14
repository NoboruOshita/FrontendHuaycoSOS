import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author';
import {MatTableDataSource} from '@angular/material/table'
import { AuthorService } from 'src/app/service/author.service';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-author-listar',
  templateUrl: './author-listar.component.html',
  styleUrls: ['./author-listar.component.css']
})
export class AuthorListarComponent implements OnInit{
  role:string="";
lista: Author[]=[]
dataSource:MatTableDataSource<Author>=new MatTableDataSource();
displayedColumns:string[]=['codigo','nombre','email','fecha','accion01']

constructor(private aS:AuthorService,private ls:LoginService){

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

