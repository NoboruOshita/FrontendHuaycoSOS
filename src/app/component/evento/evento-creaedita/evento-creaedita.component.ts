import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { usuario } from 'src/app/model/usuario';
import { evento } from 'src/app/model/evento';
import { usuarioService } from 'src/app/service/usuario.service';
import { EventoService } from 'src/app/service/evento.service';
@Component({
  selector: 'app-evento-creaedita',
  templateUrl: './evento-creaedita.component.html',
  styleUrls: ['./evento-creaedita.component.css']
})
export class EventoCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  var_evento:evento = new evento();
  evento:string = 'Completa los campos';
  idUsuario1Seleccionado: number = 0;
  id: number = 0;
  edicion: boolean = false;
  maxFecha: Date = moment().add(-1, 'days').toDate();
  minFecha: Date = moment().toDate();
  lista:usuario[]=[];


  constructor(private aS:EventoService,private doS:usuarioService , private router: Router,    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.doS.list().subscribe(data => { this.lista = data });


    this.form = new FormGroup({
      idEvento: new FormControl(),
      descripcion: new FormControl(),
      ubicacion: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      user:new FormControl(),
      donador:new FormControl()

    });
  }

  aceptar(): void {
    this.var_evento.idEvento=this.form.value['idEvento'];
    this.var_evento.descripcion = this.form.value['descripcion'];
    this.var_evento.ubicacion = this.form.value['ubicacion'];
    this.var_evento.inicio = this.form.value['inicio'];
    this.var_evento.fin = this.form.value['fin'];

    if (this.idUsuario1Seleccionado>0) {
      let a = new usuario();
      a.idUsuario = this.idUsuario1Seleccionado;
      this.var_evento.user=a;




        this.aS.insert(this.var_evento).subscribe(() => {
        this.aS.list().subscribe(data => {
              this.aS.setList(data);
            })
          })

    this.router.navigate(['pages/eventos']);



  }
}

  //para editar
  init() {
    if(this.edicion){
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idEvento:new FormControl(data.idEvento),
          descripcion: new FormControl(data.descripcion),
          ubicacion: new FormControl(data.ubicacion),
          inicio: new FormControl(data.inicio),
          fin: new FormControl(data.fin),
          donador:new FormControl(data.user.idUsuario)
        });
      });
    }
  }
}


