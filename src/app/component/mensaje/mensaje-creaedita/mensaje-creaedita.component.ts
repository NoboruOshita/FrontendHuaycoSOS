import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { mensaje } from 'src/app/model/mensaje';
import { usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/service/login.service';
import { MensajeService } from 'src/app/service/mensaje.service';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-mensaje-creaedita',
  templateUrl: './mensaje-creaedita.component.html',
  styleUrls: ['./mensaje-creaedita.component.css']
})
export class MensajeCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  var_mensaje:mensaje = new mensaje();
  mensaje:string = 'Completa los campos';
  idUsuario1Seleccionado: number = 0;
  idUsuario2Seleccionado:number=0;
  id: number = 0;
  edicion: boolean = false;
  lista:usuario[]=[];

  constructor(
    private ls:LoginService ,private dS:usuarioService,private aS:MensajeService, private router: Router,    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();

    });
    this.dS.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
      idMensaje: new FormControl(),
      descripcion: new FormControl(),
      emisor:new FormControl(),
      receptor:new FormControl()

    });


  }

  aceptar(): void {
    this.var_mensaje.idMensaje=this.form.value['idMensaje'];
    this.var_mensaje.descripcion = this.form.value['descripcion'];

      if (this.idUsuario1Seleccionado>0) {
         let a = new usuario();
         a.idUsuario = this.idUsuario1Seleccionado;
         this.var_mensaje.usuario1=a;


           let c = new usuario();
           c.idUsuario = this.idUsuario2Seleccionado;
          this.var_mensaje.usuario2=c;



        this.aS.insert(this.var_mensaje).subscribe(() => {
        this.aS.list().subscribe(data => {
              this.aS.setList(data);
            })
          })

    this.router.navigate(['pages/mensajes']);
    }


  }

  //para editar
  init() {
    if(this.edicion){
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idMensaje: new FormControl(data.idMensaje),
          descripcion: new FormControl(data.descripcion),
          receptor:new FormControl(data.usuario1.idUsuario),
          emisor:new FormControl(data.usuario2.idUsuario)
        });
      });
      }
  }
}
