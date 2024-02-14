import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { cuentaUsuarioDTO } from 'src/app/model/cuentaUsuarioDTO';
import { cuentabancariaService } from 'src/app/service/cuentabancaria.service';

@Component({
  selector: 'app-reportec1',
  templateUrl: './reportec1.component.html',
  styleUrls: ['./reportec1.component.css']
})
export class Reportec1Component implements OnInit {
  cuentaCounts: cuentaUsuarioDTO[] = [];
  dataSource: MatTableDataSource<cuentaUsuarioDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['usuario','cantidad']

  constructor(private cS: cuentabancariaService) { }

  ngOnInit(): void {
    this.cS.getCuentaCountByUsuario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getCuentaCountByUsuario(): void {
    this.cS.getCuentaCountByUsuario()
      .subscribe((data: cuentaUsuarioDTO[]) => {
        this.cuentaCounts = data;
      });
  }
}
