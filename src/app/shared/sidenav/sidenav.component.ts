import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MatSidenav;
    constructor() {}

    ngOnInit() {
        this.sidenav.open();
    }
}
