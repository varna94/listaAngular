import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router) { }

  lista: Array<String> = [];
  listaExibir: Array<String> = [];


  sigIn() {
    this.router.navigate(['login']);
  }
  sigUp() {

    localStorage.clear();
    this.router.navigate(['']);
  }

}
