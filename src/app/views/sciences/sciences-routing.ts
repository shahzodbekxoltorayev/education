import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ScienceAddComponent } from './science-add/science-add.component';
import { ScienceTableComponent } from './science-table/science-table.component';

const routes: Routes = [
  {
    path: 'sciences-table',
    component: ScienceTableComponent
  },
  {
    path: 'sciences-add',
    component: ScienceAddComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SciencesRoutingModule { }
