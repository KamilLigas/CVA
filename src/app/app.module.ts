import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatChipsModule, MatExpansionModule, MatTooltipModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductButtonComponent } from './products/product-button/product-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatTooltipModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
