import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  @Input() title: string;
  @Input() isToggled: boolean;
  @Output() onToggle = new EventEmitter<boolean>();
  @Output() onUpdate = new EventEmitter<string>();

  onToggleModal(): void {
    this.onToggle.emit(!this.isToggled);
  }

  onUpdateInput(event: Event): void {
    this.title = (event.target as HTMLInputElement).value;
  }

  onEditTask(): void {
    this.onUpdate.emit(this.title);
    this.onToggleModal();
  }

  constructor() {}

  ngOnInit(): void {}
}
