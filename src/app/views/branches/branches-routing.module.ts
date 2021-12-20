import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { BranchesAddComponent } from './branches-add/branches-add.component';
import { BranchesTableComponent } from './branches-table/branches-table.component';

const routes: Routes = [
  {
    path: 'branches-table',
    component: BranchesTableComponent
  },
  {
    path: 'branches-add',
    component: BranchesAddComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
