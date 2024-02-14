import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { eventoUsuarioDTO } from 'src/app/model/eventoUsuarioDTO';
import { EventoService } from 'src/app/service/evento.service';

@Component({
  selector: 'app-reporteu1',
  templateUrl: './reporteu1.component.html',
  styleUrls: ['./reporteu1.component.css']
})
export class Reporteu1Component implements OnInit {
  eventoCounts: eventoUsuarioDTO[] = [];
  dataSource: MatTableDataSource<eventoUsuarioDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['usuario','cantidad']

  constructor(private eS: EventoService) { }

  ngOnInit(): void {
    this.eS.getEventoCountByUsuario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getEventoCountByUsuario(): void {
    this.eS.getEventoCountByUsuario()
      .subscribe((data: eventoUsuarioDTO[]) => {
        this.eventoCounts = data;
      });
  }
}
