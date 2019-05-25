import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Company {
  id: number;
  name: string;
  logo: string;
}
@Component({
  selector: 'app-deposit-parcel',
  templateUrl: './deposit-parcel.component.html',
  styleUrls: ['./deposit-parcel.component.sass']
})
export class DepositParcelComponent implements OnInit {
  companyControll = new FormControl();
  filteredCompanys: Observable<Company[]>;
  
  public companys: Company[] = [
    {name: 'TGW Software Services', id: 1, logo: 'assets/img/tgw.png'},
    {name: 'Bertrandt', id: 2, logo: 'assets/img/bertrandt.png'},
    {name: 'Diovision', id: 3, logo: 'assets/img/diovision.png' }
 ];
 constructor() { 
   this.filteredCompanys = this.companyControll.valueChanges
   .pipe(
     startWith(''),
     map(company => company ? this._filterCompany(company) : this.companys.slice())
     );
 }
  ngOnInit() {
  }
  private _filterCompany(value: String): Company[] {
    const filtrVal = value.toString();
    return this.companys.filter(company => company.name.toLowerCase().indexOf(filtrVal) ==0);
  } 
}
