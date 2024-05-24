import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error_inicio: boolean = false;
  usuario: any = {
    email: "",
    password: "",
  }

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    let formulario: any = document.getElementById("login");
    let formularioValido: boolean = formulario.reportValidity();
    if (formularioValido) {
      this.loginservice.authenticateUser(this.usuario).subscribe(data =>
        this.iniciarSesion(data));
     

    }

  }

  iniciarSesion(resultado: any) {
    if (resultado) {
      sessionStorage.setItem("usuario", JSON.stringify(resultado));
      this.router.navigate(["/**"]);
    }
    else {
      this.error_inicio = true
    }
  }
  cerrarSesion() {
    sessionStorage.removeItem("usuario")
  }
}


