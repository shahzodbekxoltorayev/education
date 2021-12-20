import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { LessonsTableComponent } from './lessons-table/lessons-table.component';
import { RoomTableComponent } from './room-table/room-table.component';

const routes: Routes = [
  {
 
    path: 'lessons-table',
    component: LessonsTableComponent
  },
  {
    path: 'room-table',
    component: RoomTableComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
