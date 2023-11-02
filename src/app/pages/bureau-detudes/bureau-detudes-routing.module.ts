import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BureauDetudesPage } from './bureau-detudes.page';

const routes: Routes = [
  {
    path: '',
    component: BureauDetudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BureauDetudesPageRoutingModule {}
