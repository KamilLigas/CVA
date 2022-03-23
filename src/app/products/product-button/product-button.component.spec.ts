import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTooltipModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { ProductButtonComponent } from './product-button.component';

describe('ProductButtonComponent', () => {
  let component: ProductButtonComponent;
  let fixture: ComponentFixture<ProductButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductButtonComponent ],
      imports: [
        MatTooltipModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
