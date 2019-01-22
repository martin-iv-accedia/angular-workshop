import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import Car from '../../models/Car';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html'
})
export class CarsList {
  @Input() cars: Car[];
  @Output() carSelected = new EventEmitter();


  onCarSelection(car: Car) {
    this.carSelected.emit(car);
  }
}
