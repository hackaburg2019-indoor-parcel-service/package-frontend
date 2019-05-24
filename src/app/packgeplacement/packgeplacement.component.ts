import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packgeplacement',
  templateUrl: './packgeplacement.component.html',
  styleUrls: ['./packgeplacement.component.sass']
})
export class PackgeplacementComponent implements OnInit {
  title: String = 'Paket-Abgabe';
  buttonname: String = "Paket-Abgabe";
  
  constructor() { }

  ngOnInit() {
  }

}
