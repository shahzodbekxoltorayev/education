import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
   
import { SciencesRoutingModule } from './sciences-routing';
import { ScienceTableComponent } from './science-table/science-table.component';
import { ScienceAddComponent } from './science-add/science-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    SciencesRoutingModule
  ],
  declarations: [ ScienceTableComponent, ScienceAddComponent]
})
export class SciencesModule { }
