import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeVerificationPageRoutingModule } from './code-verification-routing.module';

import { CodeVerificationPage } from './code-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeVerificationPageRoutingModule
  ],
  declarations: [CodeVerificationPage]
})
export class CodeVerificationPageModule {}
