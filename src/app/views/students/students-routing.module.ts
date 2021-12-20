import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentGraduateComponent } from './student-graduate/student-graduate.component';
import { StudentsTableComponent } from './students-table/students-table.component';

const routes: Routes = [
  {
    path: 'students-table',
    component: StudentsTableComponent
  },
  {
    path: 'student-add',
    component: StudentAddComponent
  },
  {
    path: 'students-graduate',
    component: StudentGraduateComponent
  } 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
