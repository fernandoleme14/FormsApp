import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rgprod',
  templateUrl: './rgprod.page.html',
  styleUrls: ['./rgprod.page.scss'],
})
export class RgprodPage implements OnInit {

  formProduto = this.formBuilder.group({

    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    validade: ['', Validators.required],
    preco: ['', Validators.required]

  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
