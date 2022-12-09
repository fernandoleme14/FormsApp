import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  mensagens = {
    email: [
      { tipo: 'required', mensagem: 'O campo Email é obrigatório!'},
      { tipo: 'email', mensagem: 'O campo Email deve conter o @!'}
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo Senha é obrigatório!'},
      { tipo: 'minlength', mensagem: 'O campo Senha deve ter o tamanho mínimo 6!'}
    ]
  };

  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

}
