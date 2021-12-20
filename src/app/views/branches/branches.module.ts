import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesAddComponent } from './branches-add/branches-add.component';
import { BranchesTableComponent } from './branches-table/branches-table.component';
   

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    BranchesRoutingModule
  ],
  declarations: [ BranchesAddComponent, BranchesTableComponent]
})
export class BranchesModule { }
