import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackgeplacementComponent } from './packgeplacement.component';

describe('PackgeplacementComponent', () => {
  let component: PackgeplacementComponent;
  let fixture: ComponentFixture<PackgeplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackgeplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackgeplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
