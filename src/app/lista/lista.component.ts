import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private listaglobal: AppComponent) { }
  lista: AppComponent[] = [];
  listObj: Object = {};
  ngOnInit(): void {
    this.lista = JSON.parse(localStorage.getItem('listaExibir') || '{}');
    this.listObj = Object.assign({}, this.lista);
  }

}
