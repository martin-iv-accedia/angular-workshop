import { Component } from '@angular/core';

import Car from '../../models/Car';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html'
})
export class CarsList {
  cars: Car[];

  constructor() {
    this.cars = [];
  }

  ngOnInit() {
    this.cars = [
      {name: 'BMW', model: 'M3'},
      {name: 'Mitsubishi', model: 'Lancer EVO'},
      {name: 'Audi', model: 'S8'},
      {name: 'VW', model: 'Golf R32'},
      {name: 'Dodge', model: 'Challenger SS'},
      {name: 'Toyota', model: 'Supra'}
    ];
  }
}
