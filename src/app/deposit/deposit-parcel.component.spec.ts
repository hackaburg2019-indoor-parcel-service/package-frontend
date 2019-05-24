import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositParcelComponent } from './deposit-parcel.component';

describe('DepositParcelComponent', () => {
  let component: DepositParcelComponent;
  let fixture: ComponentFixture<DepositParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
