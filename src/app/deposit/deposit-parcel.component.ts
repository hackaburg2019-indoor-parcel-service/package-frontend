import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deposit-parcel',
  templateUrl: './deposit-parcel.component.html',
  styleUrls: ['./deposit-parcel.component.sass']
})
export class DepositParcelComponent implements OnInit {
  myControl = new FormControl();
  constructor() { }
  public companys: String[] = ['TGW Software Services', 'Bertrandt', 'Division'];
  
  ngOnInit() {
  }

}
