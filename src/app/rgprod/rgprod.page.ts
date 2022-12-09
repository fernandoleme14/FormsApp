import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rgprod',
  templateUrl: './rgprod.page.html',
  styleUrls: ['./rgprod.page.scss'],
})
export class RgprodPage implements OnInit {

  formProduto: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo nome é obrigatório!'},
      { tipo: 'minlength', mensagem: 'O campo nome deve ter o tamanho mínimo 2!'}
    ],
    descricao: [
      { tipo: 'required', mensagem: 'O campo nome é obrigatório!'}
    ],
    validade: [
      { tipo: 'required', mensagem: 'O campo nome é obrigatório!'}
    ],
    preco: [
      { tipo: 'required', mensagem: 'O campo nome é obrigatório!'}
    ]
  };

  constructor(private formBuilder: FormBuilder) {
    this.formProduto = this.formBuilder.group({

      nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      descricao: ['', Validators.required],
      validade: ['', Validators.required],
      preco: ['', Validators.required]

    });
   }

  ngOnInit() {
  }

}
