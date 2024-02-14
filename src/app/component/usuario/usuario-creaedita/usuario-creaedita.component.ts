import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { usuario } from 'src/app/model/usuario';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  usuario: usuario = new usuario();
  idUsuario:number=0;
  username: string="";
  password: string="";
  enabled:boolean=false;
  nombres: string="";
  apellidos: string="";
  edad:number=0;
  telefono:number=999999999;
  correo: string="";

  mensaje: string = '';
  edicion:boolean=false;

  constructor(private uS:usuarioService,private router:Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idUsuario = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      idUsuario: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      enabled: new FormControl(),
      nombres: new FormControl(),
      apellidos: new FormControl(),
      edad: new FormControl(),
      telefono: new FormControl(),
      correo:new FormControl()
    });
  }

  aceptar():void{
    this.usuario.idUsuario =  this.form.value['idUsuario'];
    this.usuario.username = this.form.value['username'];
    this.usuario.password = this.form.value['password'];
    this.usuario.enabled = this.form.value['enabled'];
    this.usuario.nombres = this.form.value['nombres'];
    this.usuario.apellidos = this.form.value['apellidos'];
    this.usuario.edad = this.form.value['edad'];
    this.usuario.telefono = this.form.value['telefono'];
    this.usuario.correo = this.form.value['correo'];

    if (this.form.value['username'].length > 0 &&
    this.form.value['password'].length > 0 &&
    this.form.value['enabled'] != null && this.form.value['nombres'].length > 0 &&
    this.form.value['apellidos'].length > 0 && this.form.value['edad'].length > 0
    && this.form.value['correo'].length > 0) {

      if (this.edicion) {
        this.uS.update(this.usuario).subscribe(()=>{
          this.uS.list().subscribe(data=>{
            this.uS.setList(data);
          })
        })
      } else {
        this.uS.insert(this.usuario).subscribe((data)=>{
          this.uS.list().subscribe(data=>{
            this.uS.setList(data);
          })
        })
      }
      this.router.navigate(['pages/usuario']);
    } else {
      this.mensaje='Complete los campos requeridos!!!';
    }
  }
  init(){
    if (this.edicion) {
      this.uS.listId(this.idUsuario).subscribe(data => {
        this.form = new FormGroup({
          idUsuario: new FormControl(data.idUsuario),
          username: new FormControl(data.username),
          password: new FormControl(data.password),
          enabled: new FormControl(data.enabled),
          nombres: new FormControl(data.nombres),
          apellidos: new FormControl(data.apellidos),
          edad: new FormControl(data.edad),
          telefono: new FormControl(data.telefono),
          correo:new FormControl(data.correo)
        })
      })
    }
  }
}

