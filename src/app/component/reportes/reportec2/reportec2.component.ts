import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { cuentaUsuarioDTO } from 'src/app/model/cuentaUsuarioDTO';
import { cuentabancariaService } from 'src/app/service/cuentabancaria.service';

@Component({
  selector: 'app-reportec2',
  templateUrl: './reportec2.component.html',
  styleUrls: ['./reportec2.component.css']
})
export class Reportec2Component implements OnInit {
  cuentaCounts: cuentaUsuarioDTO[] = [];
  dataSource: MatTableDataSource<cuentaUsuarioDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['usuario','cantidad']

  constructor(private cS: cuentabancariaService) { }

  ngOnInit(): void {
    this.cS.getCuentaMaxByUsuario().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getCuentaMaxByUsuario(): void {
    this.cS.getCuentaMaxByUsuario()
      .subscribe((data: cuentaUsuarioDTO[]) => {
        this.cuentaCounts = data;
      });
  }
}
