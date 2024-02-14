import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit{
  role: any;
  ngOnInit(): void {
    this.role=this.ls.showRole();
  }

  constructor(private ls:LoginService,public route:ActivatedRoute){}
}
