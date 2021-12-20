import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { DirectorComponent } from './director/director.component'; 
import { OtherStaffComponent } from './other-staff/other-staff.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {
    path: 'director',
    component: DirectorComponent
  },
  {
    path: 'administrator',
    component: AdministratorComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: 'other-staff',
    component: OtherStaffComponent
  },
  {
    path: 'add-staff',
    component: AddStaffComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
