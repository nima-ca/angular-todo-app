import { Component } from '@angular/core';

type Task = {
  title: string;
  id: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo-app';

  tasks: Task[] = [];

  dataHandler(data: string): void {
    this.tasks.push({
      title: data,
      id: Math.trunc(Math.random() * 10000000),
    });
  }

  deleteHandler(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
