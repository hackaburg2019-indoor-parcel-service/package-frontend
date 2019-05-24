import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { DepositParcelComponent } from './Modules/parcel-interaction/Components/deposit-parcel/deposit-parcel.component';
import { PickUpParcelComponent } from './Modules/parcel-interaction/Components/pick-up-parcel/pick-up-parcel.component';
import { DashboardComponent } from './Modules/mainModule/Components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'depositParcel', component: DepositParcelComponent},
  {path: 'pickUpParcel', component: PickUpParcelComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
