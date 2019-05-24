import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositParcelComponent } from './Components/deposit-parcel/deposit-parcel.component';
import { PickUpParcelComponent } from './Components/pick-up-parcel/pick-up-parcel.component';

@NgModule({
  declarations: [DepositParcelComponent, PickUpParcelComponent],
  imports: [
    CommonModule
  ]
})
export class ParcelInteractionModule { }
