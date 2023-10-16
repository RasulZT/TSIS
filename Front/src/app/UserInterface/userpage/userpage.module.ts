import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsercoursesComponent } from './usercourses/usercourses.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddComponent } from './add/add.component';
import {FormsModule} from "@angular/forms";
import { JournalComponent } from './journal/journal.component';
import { TasksComponent } from './tasks/tasks.component';
import {DropDownListModule} from "@syncfusion/ej2-angular-dropdowns";
import {ScheduleModule} from "@syncfusion/ej2-angular-schedule";
import { RaspisanieComponent } from './raspisanie/raspisanie.component';


@NgModule({
    declarations: [
        UserhomeComponent,
       ScheduleComponent,
        UsercoursesComponent,
        SidebarComponent,
        AddComponent,
        JournalComponent,
        TasksComponent,
        RaspisanieComponent,
    ],
  exports: [
    SidebarComponent

  ],
  imports: [
    CommonModule,
    UserpageRoutingModule,
    DropDownListModule,
    ScheduleModule,
    FormsModule
  ]
})
export class UserpageModule { }
