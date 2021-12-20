import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { StudentsPaymentsComponent } from './students-payments/students-payments.component';
import { StafSalaryComponent } from './staf-salary/staf-salary.component';
import { TeachersSalaryComponent } from './teachers-salary/teachers-salary.component';
import { PaymentsRoutingModule } from './payments-routing';
    

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    PaymentsRoutingModule
  ],
  declarations: [ StudentsPaymentsComponent, StafSalaryComponent,TeachersSalaryComponent]
})
export class PaymentsModule { }
