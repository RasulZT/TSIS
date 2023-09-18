import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MydropdownComponent } from './mydropdown/mydropdown.component';
import {NgbDropdown, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        MydropdownComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbDropdown,
    NgbDropdownToggle,
    FormsModule
  ]
})
export class SharedModule { }
