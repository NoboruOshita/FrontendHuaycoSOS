import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { role } from 'src/app/model/role';
import { usuario } from 'src/app/model/usuario';
import { roleService } from 'src/app/service/role.service';
import { usuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-role-creaedita',
  templateUrl: './role-creaedita.component.html',
  styleUrls: ['./role-creaedita.component.css']
})
export class RoleCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  var_role:role = new role();
  role:string = 'Completa los campos';
  idUsuario1Seleccionado: number = 0;
  id: number = 0;
  edicion: boolean = false;
  lista:usuario[]=[];
  lista_roles:string[]=[];
  role_seleccionado:string='Bienvenido';

  constructor(private dS:usuarioService,private aS:roleService, private router: Router,    private route: ActivatedRoute) {
    this.lista_roles.push("ADMIN");
    this.lista_roles.push("DAMNIFICADO");
    this.lista_roles.push("DONADOR");
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();

    });
    this.dS.list().subscribe(data => { this.lista = data });



    this.form = new FormGroup({
      id: new FormControl(),
      role: new FormControl(),
      usuario:new FormControl(),

    });
  }

  aceptar(): void {
    this.var_role.id=this.form.value['id'];
    this.var_role.rol = this.role_seleccionado;

      if (this.idUsuario1Seleccionado>0) {
         let a = new usuario();
         a.idUsuario = this.idUsuario1Seleccionado;
         this.var_role.user=a;




        this.aS.insert(this.var_role).subscribe(() => {
        this.aS.list().subscribe(data => {
              this.aS.setList(data);
            })
          })

    this.router.navigate(['pages/roles']);
    }


  }

  //para editar
  init() {
    if(this.edicion){
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          role: new FormControl(data.rol),
          usuario: new FormControl(data.user ? data.user.idUsuario : null),

        });
      });
      }
  }
}
