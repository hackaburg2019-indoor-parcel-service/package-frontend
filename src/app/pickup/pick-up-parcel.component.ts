import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DeliveryService, IApiPostPickDelivery, IResponse } from '../core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-up-parcel',
  templateUrl: './pick-up-parcel.component.html',
  styleUrls: ['./pick-up-parcel.component.sass']
})
export class PickUpParcelComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private deliveryService: DeliveryService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      token: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ])
    });
  }

  ngOnInit() {

  }

  onFormSubmit() {
    if (this.userForm.valid) {
      const newPickup: IApiPostPickDelivery = {
        token: this.userForm.get('token').value.toString()
      };
      this.deliveryService.pickup(newPickup).subscribe((res) => {
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
