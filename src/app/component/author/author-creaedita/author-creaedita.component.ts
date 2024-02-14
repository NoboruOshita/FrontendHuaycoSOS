import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Author } from 'src/app/model/author';
import * as moment from 'moment';
import { AuthorService } from 'src/app/service/author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-author-creaedita',
  templateUrl: './author-creaedita.component.html',
  styleUrls: ['./author-creaedita.component.css'],
})
export class AuthorCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  author: Author = new Author();
  mensaje: string = 'Completa bro';
  maxFecha: Date = moment().add(-1, 'days').toDate();

  id: number = 0;
  edicion: boolean = false;

  constructor(
    private aS: AuthorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      nameAuthor: new FormControl(),
      emailAuthor: new FormControl(),
      birthDateAuthor: new FormControl(),
    });
  }

  aceptar(): void {
    this.author.idAuthor = this.form.value['id'];
    this.author.nameAuthor = this.form.value['nameAuthor'];
    this.author.emailAuthor = this.form.value['emailAuthor'];
    this.author.birthDateAuthor = this.form.value['birthDateAuthor'];

    if (
      this.form.value['nameAuthor'].length > 1 &&
      this.form.value['emailAuthor'].length > 1
    ) {

      if(this.edicion){
        //actualice
        this.aS.update(this.author).subscribe(()=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }else{
        this.aS.insert(this.author).subscribe(data=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }

      this.router.navigate(['authors']);
      this.mensaje = 'Buen Trabajo' + this.form.value['nameAuthor'].length;
    } else {
      this.mensaje = 'Complete los campos requeridos!';
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idAuthor),
          nameAuthor: new FormControl(data.nameAuthor),
          emailAuthor: new FormControl(data.emailAuthor),
          birthDateAuthor: new FormControl(data.birthDateAuthor),
        });
      });
    }
  }
}
