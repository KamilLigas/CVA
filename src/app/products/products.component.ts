import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {ProductButtonComponent} from './product-button/product-button.component';

export interface IProduct {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
  form?: FormGroup;
  productsList: IProduct[] = [
    {
      id: 1,
      name: 'Produkt 1',
      description: 'Produkt 1 - najlepszy'
    },
    {
      id: 2,
      name: 'Produkt 2',
      description: 'Produkt 2 - najlepszy'
    },
    {
      id: 3,
      name: 'Produkt 3',
      description: 'Produkt 3 - najlepszy'
    },
    {
      id: 4,
      name: 'Produkt 4',
      description: 'Produkt 4 - najlepszy'
    },
    {
      id: 5,
      name: 'Produkt 5',
      description: 'Produkt 5 - najlepszy'
    },
    {
      id: 6,
      name: 'Produkt 6',
      description: 'Produkt 6 - najlepszy'
    },
  ];

  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    this.form = this.formBuilder.group({product: ''});

  }

  ngOnInit() {
    this.listenOnFormGroupChanges();
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  private listenOnFormGroupChanges(): void  {
    this.form.valueChanges
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((formGroupValue: {product: IProduct}) => console.log(formGroupValue.product));
  }

}
