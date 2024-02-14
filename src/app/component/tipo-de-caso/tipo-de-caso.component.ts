import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-de-caso',
  templateUrl: './tipo-de-caso.component.html',
  styleUrls: ['./tipo-de-caso.component.css']
})
export class tipo_de_casoComponent implements OnInit{

constructor(public route:ActivatedRoute){

}
  ngOnInit(): void {

  }
}
