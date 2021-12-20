import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
 
import { CustomFormsModule } from 'ngx-custom-validators';  
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';



import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { FormWizardModule } from 'src/app/shared/components/form-wizard/form-wizard.module';
import { TextMaskModule } from 'angular2-text-mask';

import { ImageCropperModule } from 'ngx-img-cropper';
import { StaffRoutingModule } from './staff-routing.module'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { DirectorComponent } from './director/director.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministratorComponent } from './administrator/administrator.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { OtherStaffComponent } from './other-staff/other-staff.component';
import { TeachersComponent } from './teachers/teachers.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    StaffRoutingModule,
    NgbModule,
    NgxDatatableModule,
    NgxPaginationModule,
    SharedComponentsModule,
    FormWizardModule,
    TextMaskModule,
    TagInputModule,
    ImageCropperModule,
    SharedModule,
    CustomFormsModule
  ],
  declarations: [ DirectorComponent , AdministratorComponent, AddStaffComponent, OtherStaffComponent, TeachersComponent]
})
export class StaffModule { }
