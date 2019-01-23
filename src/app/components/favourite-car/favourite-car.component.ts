import {
  Component,
  Input,
  OnInit,
  OnChanges
} from '@angular/core';

import Car from '../../models/Car';

@Component({
  selector: 'favourite-car',
  templateUrl: './favourite-car.component.html'
})
export class FavouriteCar implements OnInit, OnChanges {
  @Input() car: Car;
  defaultCar: Car;

  constructor() {
    this.defaultCar = {
      name: 'VW',
      model: 'Polo 1.2 TSI DSG 105 hp (CB **** KB)'
    };
  }

  ngOnInit() {
    console.warn('OnInit');
  }

  ngOnChanges(changes) {
    if (changes.car.firstChange) {
      this.car = this.defaultCar;
    }
    console.warn('OnChanges => ', changes);
  }
}
