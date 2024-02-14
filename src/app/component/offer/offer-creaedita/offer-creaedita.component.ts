import { Component, OnInit } from '@angular/core';
import { offer } from 'src/app/model/offer';

import { FormGroup, FormControl } from '@angular/forms';
import { offerService } from 'src/app/service/offer.service';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offer-creaedita',
  templateUrl: './offer-creaedita.component.html',
  styleUrls: ['./offer-creaedita.component.css']
})
export class OfferCreaeditaComponent  implements OnInit {

  form: FormGroup = new FormGroup({});
  offer1:offer = new offer();
  mensaje:string = 'Completa los campos';
  boton_guardar:string="Save";
  id: number = 0;
  edicion: boolean = false;

  constructor( private aS: offerService, private router: Router,    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      points: new FormControl(),
      businessId: new FormControl(),

    });
  }

  aceptar(): void {
    this.offer1.id=this.form.value['id'];
    this.offer1.title = this.form.value['title'];
    this.offer1.description = this.form.value['description'];
    this.offer1.points = this.form.value['points'];
    this.offer1.businessId = this.form.value['businessId'];

    if (
      this.form.value['title'].match(/^\+?\d+$/) > 0 &&
      this.form.value['description'].length > 0 &&
      this.form.value['points'].length > 0 &&
      this.form.value['businessId'].length>0
    ) {
      if(this.edicion){
        //actualice
        this.aS.update(this.offer1).subscribe(()=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
            this.router.navigate(['/business/offers']);
          })
        })
      }else{
        this.aS.insert(this.offer1).subscribe(data=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['/business/offers']);
      this.mensaje = 'Buen Trabajo';
    } else {
      this.mensaje = 'Complete los campos requeridos!*';
    }
  }

  //para editar
  init() {
    if (this.edicion) {
      this.boton_guardar="Update";
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          title: new FormControl(data.title),
          description: new FormControl(data.description),
          points:new FormControl(data.points),
          businessId:new FormControl(data.businessId),
        });
      });
    }
  }




}
