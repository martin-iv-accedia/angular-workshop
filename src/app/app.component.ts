import { Component } from '@angular/core';

import Car from './models/Car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Car[];
  selectedCar: Car;

  constructor() {
    this.cars = [
      { name: 'BMW', model: 'M3' },
      { name: 'Mitsubishi', model: 'Lancer EVO' },
      { name: 'Audi', model: 'S8' },
      { name: 'VW', model: 'Golf R32' },
      { name: 'Dodge', model: 'Challenger SS' },
      { name: 'Toyota', model: 'Supra' }
    ];
  }

  onCarSelection(car: Car) {
    console.log(`app.component#onCarSelection => ${car.name} ${car.model}`);
    this.selectedCar = car;
  }
}
