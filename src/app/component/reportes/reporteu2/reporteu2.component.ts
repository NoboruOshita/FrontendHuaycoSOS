import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ubicacionCountDTO } from 'src/app/model/ubicacionCountDTO';
import { UbicacionService } from 'src/app/service/Ubicacion.service';

@Component({
  selector: 'app-reporteu2',
  templateUrl: './reporteu2.component.html',
  styleUrls: ['./reporteu2.component.css']
})
export class Reporteu2Component implements OnInit {
  ubicacionCounts: ubicacionCountDTO[] = [];
  dataSource: MatTableDataSource<ubicacionCountDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['departamento','cantidad']

  constructor(private uS: UbicacionService) { }

  ngOnInit(): void {
    this.uS.getDepartamentoCount().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getDepartamentoCount(): void {
    this.uS.getDepartamentoCount()
      .subscribe((data: ubicacionCountDTO[]) => {
        this.ubicacionCounts = data;
      });
  }
}
