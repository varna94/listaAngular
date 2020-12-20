import { ListaComponent } from './../lista/lista.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  nomeValido: boolean = true;
  emailValido: boolean = true;
  emailVazio: boolean = false;

  emailVazioConf: boolean = false;
  emailConf: boolean = true;

  senhaVazia: boolean = false;
  senhaValida: boolean = true;

  senhaVaziaConf: boolean = false;
  senhaConf: boolean = true;
  emailLogin: any = '';
  password: any = '';
  name: any = '';

  infoLogin: any;
  listaCadastro: AppComponent[] = [];
  listaExibirCadastro: Array<String> = [];

  constructor(private router: Router, private listaglobal: AppComponent,) { }
  ngOnInit(): void {

  }
  validaNome(nome: any) {
    this.name = nome.currentTarget.value;
    if (this.name === '') {
      this.nomeValido = false;
    }

  }
  validaNomeKD() {
    this.nomeValido = true;
  }

  validaEmail(email: any) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    this.emailLogin = email.currentTarget.value;
    if (this.emailLogin === '') {

      this.emailVazio = true;
    } else if (!filter.test(this.emailLogin)) {
      this.emailValido = false;
      // $("#inputEmail").focus();
    }
    console.log('flag - ' + this.emailVazio);
  }
  validaEmailConfirm(emailConf: any) {
    if (emailConf.currentTarget.value === '') {
      this.emailVazioConf = true;
    } else if (emailConf.currentTarget.value === this.emailLogin) {
      this.emailConf = true;
    } else {
      this.emailConf = false;
    }
  }
  validaEmailKDConf(emailConf: any) {
    if (emailConf.currentTarget.value === this.emailLogin) {
      this.emailConf = true;
    } else {
      this.emailConf = false;
    }
    this.emailVazioConf = false;
  }

  validaEmailKD() {

    this.emailVazio = false;
    this.emailValido = true;
  }

  validaSenha(senha: any) {
    this.password = senha.currentTarget.value;
    if (this.password === '') {
      this.senhaVazia = true;
    } else if (this.password.length < 6) {
      this.senhaValida = false;
    }
  }

  validaSenhaKD() {
    this.senhaVazia = false;
    this.senhaValida = true;

  }

  validaSenhaConfirm(senha: any) {
    if (senha.currentTarget.value === '') {
      this.senhaVaziaConf = true;
    } else if (senha.currentTarget.value < 6) {
      this.senhaConf = false;
    }
  }
  validaSenhaKDConf(senhaConfKd: any) {
    if (senhaConfKd.currentTarget.value === '') {
      this.senhaVaziaConf = true;
    } else if (senhaConfKd.currentTarget.value === this.password) {
      this.senhaConf = true;
    } else {
      this.senhaConf = false;
    }
    this.senhaVaziaConf = false;
  }

  submit() {

    if (localStorage.hasOwnProperty('lista') && localStorage.hasOwnProperty('listaExibir')) {
      this.listaCadastro = JSON.parse(localStorage.getItem('lista') || '{}');
      this.listaExibirCadastro = JSON.parse(localStorage.getItem('listaExibir') || '{}');

      this.listaCadastro.push(this.name);
      this.listaCadastro.push(this.emailLogin);
      this.listaCadastro.push(this.password);

      this.listaExibirCadastro.push('name: ' + this.name);
      this.listaExibirCadastro.push('email: ' + this.emailLogin);

      localStorage.setItem('lista', JSON.stringify(this.listaCadastro));
      localStorage.setItem('listaExibir', JSON.stringify(this.listaExibirCadastro));

    } else {
      this.listaglobal.lista.push(this.name);
      this.listaglobal.lista.push(this.emailLogin);
      this.listaglobal.lista.push(this.password);

      this.listaglobal.listaExibir.push('name: ' + this.name);
      this.listaglobal.listaExibir.push('email: ' + this.emailLogin);

      localStorage.setItem('lista', JSON.stringify(this.listaglobal.lista));
      localStorage.setItem('listaExibir', JSON.stringify(this.listaglobal.listaExibir));
    }

    console.log('listaGlobal -- ' + this.listaglobal.lista);
    this.router.navigate(['lista']);
  }
}
