import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RgprodPage } from './rgprod.page';

const routes: Routes = [
  {
    path: '',
    component: RgprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RgprodPageRoutingModule {}
