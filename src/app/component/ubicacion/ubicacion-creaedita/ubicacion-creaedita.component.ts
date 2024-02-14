import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { UbicacionService } from 'src/app/service/Ubicacion.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-ubicacion-creaedita',
  templateUrl: './ubicacion-creaedita.component.html',
  styleUrls: ['./ubicacion-creaedita.component.css']
})
export class UbicacionCreaeditaComponent implements OnInit{
  form: FormGroup=new FormGroup({});
  ubicacion:Ubicacion=new Ubicacion();
  mensaje:string="";
  maxFecha:Date= moment().add(-1,'days').toDate();
  id: number=0;
  edicion: boolean=false;

  constructor(private aS:UbicacionService,private router:Router,
      private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
    this.form=new FormGroup({
      idUbicacion:new FormControl(),
      departamento:new FormControl(),
      distrito:new FormControl(),
      direccion: new FormControl()
    });
  }
  aceptar(): void{
    this.ubicacion.idUbicacion=this.form.value['idUbicacion'];
    this.ubicacion.departamento=this.form.value['departamento'];
    this.ubicacion.distrito=this.form.value['distrito'];
    this.ubicacion.direccion=this.form.value['direccion'];
    if (
      this.form.value['departamento'].length > 0 &&
      this.form.value['direccion'].length > 0
    ){
    if(this.edicion){
        this.aS.update(this.ubicacion).subscribe(()=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }else{
          this.aS.insert(this.ubicacion).subscribe((data) => {
            this.aS.list().subscribe((data) => {
              this.aS.setList(data);
            })
          })
      }

      this.router.navigate(['pages/ubicaciones']);
      this.mensaje = 'Buen Trabajo';
    } else {
      this.mensaje = 'Complete los campos requeridos!';
    }
  }
  init(){
    if(this.edicion){
      this.aS.listId(this.id).subscribe((data) =>{
        this.form=new FormGroup({
          idUbicacion:new FormControl(data.idUbicacion),
          departamento: new FormControl(data.departamento),
          distrito: new FormControl(data.distrito),
          direccion: new FormControl(data.direccion),
        })
      })
    }
  }
  }
