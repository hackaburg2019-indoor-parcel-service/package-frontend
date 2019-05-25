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
  id: number;
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
  filteredCompanys: Observable<Company[]>;

  public companys: Company[] = [
    {name: 'TGW Software Services', id: 1, logo: 'assets/img/tgw.png'},
    {name: 'Bertrandt', id: 2, logo: 'assets/img/bertrandt.png'},
    {name: 'Diovision', id: 3, logo: 'assets/img/diovision.png' }
 ];
 public depositboxes: Depositbox[] = [
  {id: 1, displayName: 'Depostibox-1'},
  {id: 2, displayName: 'Depostibox-2'},
  {id: 4, displayName: 'Depostibox-3'},
  {id: 3, displayName: 'Depostibox-4'}
 ];

 constructor(
   private deliveryService: DeliveryService,
   private snackBar: MatSnackBar,
   private router: Router) {
   this.filteredCompanys = this.formControll.controls.companyControll.valueChanges
   .pipe(
     startWith(''),
     map(company => company ? this._filterCompany(company) : this.companys.slice())
     );
 }
  ngOnInit() {
  }
  private _filterCompany(value: string): Company[] {
    const filtrVal = value.toString();
    return this.companys.filter(company => company.name.toLowerCase().indexOf(filtrVal) == 0);
  }
  onFormSubmit() {
    if (this.formControll.valid) {
      console.log(this.formControll.get('companyControll').value);
      console.log(this.formControll.get('depositControll').value);
      const newPickup: IApiPostDelivery = {
        customer: this.formControll.get('companyControll').value,
        locker: this.formControll.get('depositControll').value
      };
      this.deliveryService.createDelivery(newPickup).subscribe((res) => {
        console.log('success');
        this.snackBar.open('successful deployed', 'Close', {
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
