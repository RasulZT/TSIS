import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleComponent} from "./schedule/schedule.component";
import {UsercoursesComponent} from "./usercourses/usercourses.component";
import {UserhomeComponent} from "./userhome/userhome.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [

  {path: '', component: UserhomeComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'courses', component: UsercoursesComponent},
  {path: 'add', component: AddComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
