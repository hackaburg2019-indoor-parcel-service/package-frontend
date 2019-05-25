import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  title = 'indoor-parcel-service';

  availableColors: ChipColor[] = [
    {name: 'Deposit parcel', color: 'primary'},
    {name: 'Pick up parcel', color: 'primary'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
