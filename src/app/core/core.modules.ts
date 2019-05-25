import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  ApiService,
  DeliveryService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    DeliveryService
  ],
  declarations: []
})
export class CoreModule { }
