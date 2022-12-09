import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo nome é obrigatório!'},
      { tipo: 'minlength', mensagem: 'O campo nome deve ter o tamanho mínimo 4!'}
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório!'}
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo Email é obrigatório!'},
      { tipo: 'email', mensagem: 'O campo Email deve conter o @!'}
    ],
    senha: [
      { tipo: 'required', mensagem: 'O campo Senha é obrigatório!'},
      { tipo: 'minlength', mensagem: 'O campo Senha deve ter o tamanho mínimo 6!'}
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'O campo Confirma senha é obrigatório!'}
    ]
  };

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      cpf: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmaSenha:  ['', Validators.required]
    });
   }

   salvarRegistro(){
    console.log('Formulario: ', this.formRegistro.valid);
   }

  ngOnInit() {
  }

}
