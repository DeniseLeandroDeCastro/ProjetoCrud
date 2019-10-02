import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  mensagemErro = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginService.onLogin(this.usuario, this.senha)) {
      this.mensagemErro = '';
      this.router.navigate(['/alunos']);
    } else {
      this.mensagemErro = 'Usuário ou senha inválidos!';
    }
  }
}
