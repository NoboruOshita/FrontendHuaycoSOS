import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { caso } from 'src/app/model/Caso';
import { donacion } from 'src/app/model/donacion';
import { usuario } from 'src/app/model/usuario';
import { CasoService } from 'src/app/service/Caso.service';
import { DonacionService } from 'src/app/service/donacion.service';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-donacion-creaedita',
  templateUrl: './donacion-creaedita.component.html',
  styleUrls: ['./donacion-creaedita.component.css']
})
export class DonacionCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  var_donacion:donacion = new donacion();
  donacion:string = 'Completa los campos';
  idCasoSeleccionado: number = 0;
  idUsuarioSeleccionado:number=0;
  listaCaso:caso[]=[];
  listaUs:usuario[]=[];
  mensaje:string='';
  id: number = 0;
  edicion: boolean = false;

  constructor(private donS:DonacionService,private router: Router,private route: ActivatedRoute,private casoS:CasoService, private usS:usuarioService) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.usS.list().subscribe(data=>{this.listaUs=data;
    });
    this.casoS.list().subscribe(data => { this.listaCaso = data});

    this.form = new FormGroup({
      idDonacion: new FormControl(),
      tipo: new FormControl(),
      viveres:new FormControl(),
      cantidad:new FormControl(),
      caso: new FormControl(),
      usuario: new FormControl()
    });
  }

  aceptar(): void {
    this.var_donacion.idDonacion= this.form.value['idDonacion']
    this.var_donacion.tipo = this.form.value['tipo']
    this.var_donacion.viveres=this.form.value['viveres']
    this.var_donacion.cantidad=this.form.value['cantidad']
    this.var_donacion.caso=this.form.value['caso']
    this.var_donacion.usuario=this.form.value['usuario']

    if(this.idUsuarioSeleccionado>0 || this.idUsuarioSeleccionado<0/*&& this.idCasoSeleccionado>0*/){
      console.log(this.idUsuarioSeleccionado, this.idCasoSeleccionado);

      let uss = new usuario()
      uss.idUsuario = this.idUsuarioSeleccionado
      this.var_donacion.usuario = uss

      let t = new caso()
      t.idCaso = this.idCasoSeleccionado
      this.var_donacion.caso= t


      if(this.edicion){
        this.donS.update(this.var_donacion).subscribe(()=>{
          this.donS.list().subscribe(data=>{
            this.donS.setList(data);
          })
        })
      }else{

        this.donS.insert(this.var_donacion).subscribe(()=>{
          this.donS.list().subscribe(data => {
            this.donS.setList(data);

            console.log(this.form);
          })
        })
      }
      this.router.navigate(['/pages/donaciones']);
    }
    else{
      this.mensaje = 'Complete los campos requeridos!';
      console.log("VARCASO",this.var_donacion);
    }
  }

  //para editar
  init() {
      this.donS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idDonacion:new FormControl(data.idDonacion),
          tipo: new FormControl(data.tipo),
          viveres: new FormControl(data.viveres),
          cantidad: new FormControl(data.cantidad),
          caso: new FormControl(data.caso),
          usuario:new FormControl(data.usuario)
        });
      });

  }
}
