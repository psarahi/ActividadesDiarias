import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { IonicStorageModule } from '@ionic/storage';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonBottomDrawerModule,
    RegistroPageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
