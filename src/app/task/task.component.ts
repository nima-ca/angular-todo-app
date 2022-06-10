import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

type Task = {
  title: string;
  id: number;
};

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output('onDelete') taskDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteTask(id: number) {
    this.taskDeleted.emit(id);
  }
}
