import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DeliveryService, IApiPostDelivery, IResponse } from '../core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

export interface Company {
  id: number;
  name: string;
  logo: string;
}
export interface Depositbox {
  value: number;
  displayName: string;
}
@Component({
  selector: 'app-deposit-parcel',
  templateUrl: './deposit-parcel.component.html',
  styleUrls: ['./deposit-parcel.component.sass']
})
export class DepositParcelComponent implements OnInit {
 //// companyControll = new FormControl();
 // depostiControll = new FormControl();
  formControll = new FormGroup({companyControll: new FormControl(), 
    depositControll: new FormControl()});
  //companyControll = new FormControl();
  filteredCompanys: Observable<Company[]>;
  
  public companys: Company[] = [
    {name: 'TGW Software Services', id: 1, logo: 'assets/img/tgw.png'},
    {name: 'Bertrandt', id: 2, logo: 'assets/img/bertrandt.png'},
    {name: 'Diovision', id: 3, logo: 'assets/img/diovision.png' }
 ];
 public depositboxes: Depositbox[] = [
  {value: 1, displayName: 'Depostibox-1'},
  {value: 2, displayName: 'Depostibox-2'},
  {value: 4, displayName: 'Depostibox-3'},
  {value: 3, displayName: 'Depostibox-4'}
 ];
 private deliveryService: DeliveryService;
 private snackBar: MatSnackBar;
 private router: Router;
 constructor() {
   //this.formControll.controls.c
   
   this.filteredCompanys = this.formControll.controls.companyControll.valueChanges
   .pipe(
     startWith(''),
     map(company => company ? this._filterCompany(company) : this.companys.slice())
     );
 }
  ngOnInit() {
  }
  private _filterCompany(value: String): Company[] {
    const filtrVal = value.toString();
    return this.companys.filter(company => company.name.toLowerCase().indexOf(filtrVal) == 0);
  }
  onFormSubmit() {
    if (this.formControll.valid) {
      const newPickup: IApiPostDelivery = {
        customer: this.formControll.controls.companyControll.value.name,
        locker: this.formControll.controls.depositControll.value.value
      };
      this.deliveryService.createDelivery(newPickup).subscribe((res) => {
        console.log('success');
        this.snackBar.open('successful opened', 'Close', {
          duration: 2000
        }
        );
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      }, (err: IResponse<any>) => {
        this.snackBar.open(`${err.message}`, 'Close', {
          duration: 2000
        });
      });
    }
  }
}
