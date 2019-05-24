import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpParcelComponent } from './pick-up-parcel.component';

describe('PickUpParcelComponent', () => {
  let component: PickUpParcelComponent;
  let fixture: ComponentFixture<PickUpParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickUpParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
