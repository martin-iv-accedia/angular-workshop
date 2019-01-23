import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges
} from '@angular/core';

import Car from '../../models/Car';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html'
})
export class CarsList implements OnInit, OnChanges {
  @Input() cars: Car[];
  @Output() carSelected = new EventEmitter();


  onCarSelection(car: Car) {
    this.carSelected.emit(car);
  }

  ngOnInit() {
    console.warn('OnInit');
  }

  ngOnChanges(changes) {
    console.warn('OnChanges => ', changes);
  }
}
