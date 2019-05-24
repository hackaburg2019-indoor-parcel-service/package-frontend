import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';

import { RouterModule} from '@angular/router';

import { ParcelInteractionModule } from './Modules/parcel-interaction/parcel-interaction.module';
import { DashboardComponent } from './Modules/mainModule/Components/dashboard/dashboard.component'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule,
    ParcelInteractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
