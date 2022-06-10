import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  @Input() isToggled: boolean;
  @Output() onToggle = new EventEmitter<boolean>();

  onToggleModal(): void {
    this.onToggle.emit(!this.isToggled);
  }

  constructor() {}

  ngOnInit(): void {}
}
