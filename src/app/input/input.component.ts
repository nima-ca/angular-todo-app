import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  task: string = '';
  @Output('onAdd') taskAdded = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  addTask(): void {
    if (!this.task.trim()) return;

    this.taskAdded.emit(this.task);
    this.task = '';
  }
}
