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
  isToggled: boolean = false;
  @Input() task: Task;
  @Output('onDelete') taskDeleted = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onToggleModal() {
    this.isToggled = !this.isToggled;
  }

  onDeleteTask(id: number) {
    this.taskDeleted.emit(id);
  }
}
