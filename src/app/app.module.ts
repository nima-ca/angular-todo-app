import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TaskComponent } from './task/task.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [AppComponent, InputComponent, TaskComponent, EditModalComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
