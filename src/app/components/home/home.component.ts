import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged=false;

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): any{
    if(this.authentication.isLoggedIn()){
      return this.logged=true
    }
  }
  logLout(usuario:any) {
    if('usuario'){sessionStorage.removeItem('usuario')
    console.log('logout');
    this.logged =false;
    

}
  }}