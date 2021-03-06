import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingFormComponent } from './shippingform.component';

describe('ShippingformComponent', () => {
  let component: ShippingFormComponent;
  let fixture: ComponentFixture<ShippingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
