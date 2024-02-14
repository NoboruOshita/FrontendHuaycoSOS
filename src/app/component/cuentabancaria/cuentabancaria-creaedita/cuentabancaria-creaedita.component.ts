
import { Component, OnInit } from '@angular/core';
import { cuentabancaria } from 'src/app/model/cuentabancaria';
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
import { cuentabancariaService } from 'src/app/service/cuentabancaria.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { usuario } from 'src/app/model/usuario';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cuentabancaria-creaedita',
  templateUrl: './cuentabancaria-creaedita.component.html',
  styleUrls: ['./cuentabancaria-creaedita.component.css']
})
export class cuentabancariaCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  var_cuentabancaria:cuentabancaria = new cuentabancaria();
  mensaje:string = '';
  cuentabancaria:string = 'Completa los campos';
  idUsuarioSeleccionado:number=0;
  listaUs:usuario[]=[];
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;

  constructor(private bS: cuentabancariaService, private router: Router,private usS :usuarioService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();

    });
    this.usS.list().subscribe(data => { this.listaUs = data });

    this.form = new FormGroup({
      idCuentabancaria: new FormControl(),
      numero: new FormControl(),
      cvv:new FormControl(),
      vencimiento:new FormControl(),
      usuario:new FormControl()
    });
  }

  aceptar(): void {
    this.var_cuentabancaria.idCuentabancaria= this.form.value['idCuentabancaria']
    this.var_cuentabancaria.numero = this.form.value['numero']
    this.var_cuentabancaria.cvv=this.form.value['cvv']
    this.var_cuentabancaria.vencimiento=this.form.value['vencimiento']
    this.var_cuentabancaria.usuario=this.form.value['usuario']

    if(this.idUsuarioSeleccionado>0|| this.idUsuarioSeleccionado<0){

      let uss = new usuario()
      uss.idUsuario = this.idUsuarioSeleccionado
      this.var_cuentabancaria.usuario = uss

      if(this.edicion){
        this.bS.update(this.var_cuentabancaria).subscribe(()=>{
          this.bS.list().subscribe(data=>{
            this.bS.setList(data);
          })
        })
      }else{

        this.bS.insert(this.var_cuentabancaria).subscribe(()=>{
          this.bS.list().subscribe(data => {
            this.bS.setList(data);

            console.log(this.form);
          })
        })
      }
      this.router.navigate(['/pages/cuentabancarias']);
  }
  else{
    this.mensaje = 'Complete los campos requeridos!';
    console.log("VARCASO",this.var_cuentabancaria);
  }
}

  //para editar
  init() {
    if(this.edicion){
      this.bS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idCuentabancaria: new FormControl(data.idCuentabancaria),
          numero: new FormControl(data.numero),
          cvv:new FormControl(data.cvv),
          vencimiento:new FormControl(data.vencimiento),
          usuario:new FormControl(data.usuario)
        });
      });
      }
  }
}
