import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BureauDetudesPageRoutingModule } from './bureau-detudes-routing.module';

import { BureauDetudesPage } from './bureau-detudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BureauDetudesPageRoutingModule
  ],
  declarations: [BureauDetudesPage]
})
export class BureauDetudesPageModule {}
