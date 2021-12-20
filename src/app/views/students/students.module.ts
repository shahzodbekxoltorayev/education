import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
  
import { StudentsTableComponent } from './students-table/students-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    StudentsRoutingModule
  ],
  declarations: [ StudentsTableComponent]
})
export class StudentsModule { }
