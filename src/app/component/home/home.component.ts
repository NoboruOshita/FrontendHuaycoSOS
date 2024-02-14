import { Component, Input, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { offerService } from 'src/app/service/offer.service';
import { MatTableDataSource } from '@angular/material/table';
import { offer } from 'src/app/model/offer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cantidadElementos: number = 0;
  mensaje: string="";
  lista: offer[]=[];
  dataSource:MatTableDataSource<offer>=new MatTableDataSource();

  constructor(private aS:offerService, public router:Router) {}

  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.lista = data; // Actualizar lista y contador al cargar datos
      this.cantidadElementos = this.lista.length;
    })
  }

  get cantidad(): number {
    return this.cantidadElementos;
  }
}
