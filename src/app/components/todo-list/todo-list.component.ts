import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoList implements OnInit {
  todos: String[];
  name: any;

  constructor() {
    this.todos = [];
    this.name = ''
  }

  ngOnInit() {
    setTimeout(() => {
      this.todos = [
        'Get up',
        'Drink coffee',
        'Take a shower',
        'Go to work'
      ];
    }, 6000);
  }

  onKeyup($event) {
    console.log(this.name);
    console.log($event.target.value);
  }
}
