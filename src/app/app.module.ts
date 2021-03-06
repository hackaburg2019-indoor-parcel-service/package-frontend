import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';

import { RouterModule} from '@angular/router';

import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatNativeDateModule, MatFormFieldModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {DemoMaterialModule} from './material-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PickUpParcelComponent } from './pickup/pick-up-parcel.component';
import { DepositParcelComponent } from './deposit/deposit-parcel.component';
import { SidenavComponent } from './shared/sidenav';
import { CoreModule } from './core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PickUpParcelComponent,
    DepositParcelComponent,
    SidenavComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    MatNativeDateModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
