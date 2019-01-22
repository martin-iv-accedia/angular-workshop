import { Component, Input } from '@angular/core';

import Car from '../../models/Car';

@Component({
  selector: 'favourite-car',
  templateUrl: './favourite-car.component.html'
})
export class FavouriteCar {
  @Input() car: Car;
  defaultCar: Car;

  constructor() {
    this.defaultCar = {
      name: 'VW',
      model: 'Polo 1.2 TSI DSG 105 hp (CB **** KB)'
    };
  }
}
