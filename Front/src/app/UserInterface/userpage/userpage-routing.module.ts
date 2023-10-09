import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleComponent} from "./schedule/schedule.component";
import {UsercoursesComponent} from "./usercourses/usercourses.component";
import {UserhomeComponent} from "./userhome/userhome.component";

const routes: Routes = [

  {path: '', component: UserhomeComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'courses', component: UsercoursesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
