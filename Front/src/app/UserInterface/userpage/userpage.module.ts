import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UsercoursesComponent } from './usercourses/usercourses.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddComponent } from './add/add.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        UserhomeComponent,
       ScheduleComponent,
        UsercoursesComponent,
        SidebarComponent,
        AddComponent
    ],
  exports: [
    SidebarComponent

  ],
    imports: [
        CommonModule,
        UserpageRoutingModule,
        FormsModule
    ]
})
export class UserpageModule { }
