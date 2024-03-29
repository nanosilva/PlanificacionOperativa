import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): any{
    if(this.authentication.isLoggedIn()){
     
    }
  }
  logLout(usuario:any) {
    alert("Desea cerrar sesión?")
    if('usuario'){sessionStorage.removeItem('usuario')
    console.log('logout');
    
    

}
  };

  isLoggedIn() {
    let usuario = sessionStorage.getItem('usuario')
    console.log(!(usuario === null))
    return !(usuario === null)
  }

}