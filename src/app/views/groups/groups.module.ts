import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupGraduateComponent } from './group-graduate/group-graduate.component';
import { GroupTableComponent } from './group-table/group-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    GroupsRoutingModule
  ],
  declarations: [ GroupAddComponent, GroupGraduateComponent, GroupTableComponent]
})
export class GroupsModule { }
