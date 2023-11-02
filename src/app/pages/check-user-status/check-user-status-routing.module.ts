import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckUserStatusPage } from './check-user-status.page';

const routes: Routes = [
  {
    path: '',
    component: CheckUserStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckUserStatusPageRoutingModule {}
