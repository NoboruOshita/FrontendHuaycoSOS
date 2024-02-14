import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { caso } from 'src/app/model/Caso';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { tipo_de_caso } from 'src/app/model/tipo-de-caso';
import { usuario } from 'src/app/model/usuario';
import { CasoService } from 'src/app/service/Caso.service';
import { UbicacionService } from 'src/app/service/Ubicacion.service';
import { tipo_de_casoService } from 'src/app/service/tipo-de-caso.service';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-caso-creaedita',
  templateUrl: './caso-creaedita.component.html',
  styleUrls: ['./caso-creaedita.component.css']
})
export class CasoCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  var_caso: caso=new caso();
  idUsuarioSeleccionado:number=0
  idTipoSeleccionado: number=0
  idUbicacionSeleccionado: number=0
  listaUs:usuario[]=[];
  listaT:tipo_de_caso[]=[];
  listaU:Ubicacion[]=[];
  idCaso:number=0
  mensaje:string=''
  edicion: boolean= false

  constructor(private cS:CasoService,
    private usS:usuarioService ,private tcS:tipo_de_casoService,
    private uS:UbicacionService, private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idCaso = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usS.list().subscribe(data=>{this.listaUs=data});
    this.tcS.list().subscribe(data => { this.listaT = data; console.log(data)});
    this.uS.list().subscribe(data => { this.listaU = data });

    this.form = new FormGroup({
      idCaso: new FormControl(),
      titulo: new FormControl(),
      argumento:new FormControl(),
      idUsuario:new FormControl(),
      idTipoDeCaso: new FormControl(),
      idUbicacion: new FormControl()
    });
  }

  aceptar():void{
    this.var_caso.idCaso= this.form.value['idCaso']
    this.var_caso.titulo = this.form.value['titulo']
    this.var_caso.argumento=this.form.value['argumento']
    this.var_caso.usuario=this.form.value['idUsuario']
    this.var_caso.tipoDeCaso=this.form.value['idTipoDeCaso']
    this.var_caso.ubicacion=this.form.value['idUbicacion']

    if(this.idUsuarioSeleccionado>0 && this.idTipoSeleccionado>0 && this.idUbicacionSeleccionado>0){

      let uss = new usuario()
      uss.idUsuario = this.idUsuarioSeleccionado
      this.var_caso.usuario = uss

      let t = new tipo_de_caso()
      t.idTipoDeCaso = this.idTipoSeleccionado
      this.var_caso.tipoDeCaso= t

      let ub = new Ubicacion()
      ub.idUbicacion = this.idUbicacionSeleccionado
      this.var_caso.ubicacion = ub

      if(this.edicion){
        this.cS.update(this.var_caso).subscribe(()=>{
          this.cS.list().subscribe(data=>{
            this.cS.setList(data);
          })
        })
      }else{
        this.cS.insert(this.var_caso).subscribe(()=>{
          this.cS.list().subscribe(data => {
            this.cS.setList(data);
          })
        })
      }
      this.router.navigate(['/pages/caso']);
    }
    else{
      this.mensaje = 'Complete los campos requeridos!';
    }
  }
  //para editar
  init() {
    this.cS.listId(this.idCaso).subscribe((data) => {
      this.form = new FormGroup({
        idCaso:new FormControl(data.idCaso),
        titulo: new FormControl(data.titulo),
        argumento: new FormControl(data.argumento),
        usuario: new FormControl(data.usuario),
        tipoDeCaso: new FormControl(data.tipoDeCaso),
        ubicacion:new FormControl(data.ubicacion)
      });
    });
  }
}
