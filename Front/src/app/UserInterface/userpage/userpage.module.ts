import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UsercoursesComponent } from './usercourses/usercourses.component';


@NgModule({
  declarations: [
    UserhomeComponent,
    UserheaderComponent,
    ScheduleComponent,
    UsercoursesComponent
  ],
  imports: [
    CommonModule,
    UserpageRoutingModule
  ]
})
export class UserpageModule { }
