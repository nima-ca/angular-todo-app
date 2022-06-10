import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
