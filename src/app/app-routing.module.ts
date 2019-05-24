import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { DepositParcelComponent } from './deposit/deposit-parcel.component';
import { PickUpParcelComponent } from './pickup/pick-up-parcel.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'depositParcel', component: DepositParcelComponent},
  {path: 'pickUpParcel', component: PickUpParcelComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, DemoMaterialModule, ReactiveFormsModule, FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
