import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupGraduateComponent } from './group-graduate/group-graduate.component';
import { GroupTableComponent } from './group-table/group-table.component';

const routes: Routes = [
  {
    path: 'group-table',
    component: GroupTableComponent
  },
  {
    path:'group-add',
    component: GroupAddComponent
  },
  {
    path: 'group-graduate',
    component: GroupGraduateComponent
  }
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
