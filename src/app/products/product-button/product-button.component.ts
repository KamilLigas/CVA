import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IProduct } from '../products.component';

@Component({
  selector: 'app-product-button',
  templateUrl: './product-button.component.html',
  styleUrls: ['./product-button.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductButtonComponent), multi: true
    }
  ]
})
export class ProductButtonComponent implements ControlValueAccessor {
  value: IProduct;

  @Input() product?: IProduct;

  propagateChange: any = () => {};

  selectProduct(product: IProduct): void {
    this.value = product;
    this.propagateChange(this.value);
  }

  writeValue(value: IProduct): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}

  setDisabledState(isDisabled: boolean): void {}


  onClickEvent(): void {
    this.value = this.product;
    this.propagateChange(this.value);
  }

}
