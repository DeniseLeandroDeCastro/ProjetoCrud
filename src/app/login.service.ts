import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  onLogin(usuario: string, senha: string): boolean {
    if (usuario === 'Denise' && senha === '123') {
      sessionStorage.setItem('autenticado', 'sim');
      return true;
    } else {
      return false;
    }
  }
}
