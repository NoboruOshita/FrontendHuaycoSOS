import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  role:string="";
  cuenta_activa:boolean=false;
  image_logo:string="assets/img/HuaycoSoSLogo.png"
  ngOnInit(): void {
    this.role=this.ls.showRole();

  }
  constructor(private router:Router,private ls:LoginService){

    const currentRoute = window.location.pathname;
    if (currentRoute == '/home') {
      this.router.navigate(['/business/offers']);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 150);
    }
  }


}
