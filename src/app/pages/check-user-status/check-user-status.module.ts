import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckUserStatusPageRoutingModule } from './check-user-status-routing.module';

import { CheckUserStatusPage } from './check-user-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckUserStatusPageRoutingModule
  ],
  declarations: [CheckUserStatusPage]
})
export class CheckUserStatusPageModule {}
