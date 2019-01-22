import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { CarsList } from './cars-list/cars-list.component';
import { FavouriteCar } from './favourite-car/favourite-car.component';

@NgModule({
  declarations: [
    CarsList,
    FavouriteCar
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CarsList,
    FavouriteCar
  ]
})
export class Components { }
