import { OnInit,Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'
import { offer } from 'src/app/model/offer';
import { MatTableDataSource } from '@angular/material/table';
import { offerService } from 'src/app/service/offer.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEliminarComponent } from '../offer-creaedita/dialog-eliminar/dialog-eliminar.component';

@Component({
  selector: 'app-offer-listar',
  templateUrl: './offer-listar.component.html',
  styleUrls: ['./offer-listar.component.css']
})
export class OfferListarComponent implements OnInit {

  cantidadElementos: number = 0;
  mensaje: string="";
  lista: offer[]=[];
  dataSource:MatTableDataSource<offer>=new MatTableDataSource();
  displayedColumns:string[]=['id','title','description','points','businessId','accion01']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  }

  constructor(
    public dialog:MatDialog,
    private aS: offerService
  ) {
   this.mensaje="Elige una opcion";
  }

  ngOnInit(): void {
    this.aS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.lista = data;
      this.dataSource.paginator=this.paginator;
      this.paginator.length=this.lista.length;
    })

    this.aS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.lista = data; // Actualizar lista
      this.dataSource.paginator=this.paginator;
      this.paginator.length=this.lista.length;
    })



    this.aS.list().subscribe(data => {

      for( var i = 0 ; i < data.length ; i++){

           data[i].points  = 20;
      }

      this.dataSource.data = data; // asíncrona

      });

  }

  openDialog(id: number){
    const dialogRef = this.dialog.open(DialogEliminarComponent);
    dialogRef.afterClosed().subscribe(result => {
       if(result){
          this.eliminar(id);
       }else{
         this.mensaje="El Offer no se elimino"
       }
    });
 }

  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
        this.lista = data; // Actualizar lista
      })
    })
    this.mensaje="Offer Eliminado con exito"
  }


}
