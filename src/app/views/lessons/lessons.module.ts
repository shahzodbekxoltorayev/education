import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
    
import { LessonsRoutingModule } from './lessons-routing';
import { LessonsTableComponent } from './lessons-table/lessons-table.component';
import { RoomTableComponent } from './room-table/room-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    LessonsRoutingModule
  ],
  declarations: [ LessonsTableComponent, RoomTableComponent]
})
export class LessonsModule { }
