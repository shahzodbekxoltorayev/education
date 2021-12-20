import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { StafSalaryComponent } from './staf-salary/staf-salary.component';
import { StudentsPaymentsComponent } from './students-payments/students-payments.component';
import { TeachersSalaryComponent } from './teachers-salary/teachers-salary.component';

const routes: Routes = [
  {
    path: 'teachers-salary',
    component: TeachersSalaryComponent
  },
  {
    path: 'staf-salary',
    component: StafSalaryComponent
  },
 
  {
    path: 'students-payments',
    component: StudentsPaymentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
