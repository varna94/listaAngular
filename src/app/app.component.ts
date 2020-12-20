import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router) { }

  lista: Array<String> = ["Maria", "maria@mailinator.com", "123456", "Jose", "jose@mailinator.com", "123456"];
  listaExibir: Array<String> = ["nome: Maria", "email: maria@mailinator.com", "nome: Jose", "email: jose@mailinator.com"];

  sigIn() {
    localStorage.setItem("listaExibir", JSON.stringify(this.listaExibir));
    localStorage.setItem("lista", JSON.stringify(this.lista));
    this.router.navigate(['login']);
  }
  sigUp() {

    localStorage.clear();
    this.router.navigate(['']);
  }

}
