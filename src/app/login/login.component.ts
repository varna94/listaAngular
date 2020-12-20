import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailValido: boolean = true;
  emailVazio: boolean = false;
  senhaVazia: boolean = false;
  senhaValida: boolean = true;
  emailLogin: any = '';
  password: any = '';
  infoLogin: any;

  listaLogin: AppComponent[] = [];


  constructor(private router: Router, private listaglobal: AppComponent) { }

  ngOnInit(): void {
    if (localStorage.hasOwnProperty('lista')) {
      this.listaLogin = JSON.parse(localStorage.getItem('lista') || '{}');
      console.log("lista - " + this.listaLogin);
    } else {
      this.listaLogin = [];
    }
    // console.log(this.listaglobal.lista);
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
  validaEmailKD(em: any) {
    this.emailVazio = false;
    this.emailValido = true;
  }
  validaSenha(senha: any) {
    this.password = senha.currentTarget.value;
    if (this.password === '') {
      this.senhaVazia = true;
    } else if (this.password < 6) {
      this.senhaValida = false;
    }
  }
  validaSenhaKD() {
    this.senhaVazia = false;
    this.senhaValida = true;
  }



  entrar() {
    if (this.senhaValida && !this.senhaVazia && this.emailValido && !this.emailVazio) {
      if (this.listaLogin.indexOf(this.emailLogin) > -1 && this.listaLogin.indexOf(this.password) > -1) {
        this.infoLogin = { 'email': this.emailLogin, 'senha': this.password };
        // localStorage.setItem('login', this.emailLogin);
        // localStorage.setItem('password', this.password);

        console.log(this.infoLogin);
        this.router.navigate(['lista']);
      } else {
        alert('Dados não encontrados, por favor cadastra-se primeiro!');
      }

    } else {
      alert('Preencha os campos corretamente!');
    }
  }
}



