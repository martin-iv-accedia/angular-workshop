import { Component } from '@angular/core';

import Car from '../../models/Car';

@Component({
  selector: 'favourite-car',
  templateUrl: './favourite-car.component.html'
})
export class FavouriteCar {
  car: Car;

  constructor() {
    this.car = {
      name: 'VW',
      model: 'Polo 1.2 TSI DSG 105 hp (CB **** KB)'
    };
  }
}
