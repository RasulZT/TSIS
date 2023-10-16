import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsercoursesComponent} from "./usercourses/usercourses.component";
import {UserhomeComponent} from "./userhome/userhome.component";
import {AddComponent} from "./add/add.component";
import {RaspisanieComponent} from "./raspisanie/raspisanie.component";
import {CourseInfoComponent} from "./course-info/course-info.component";

const routes: Routes = [

  {path: '', component: UserhomeComponent},
  {path: 'schedule', component: RaspisanieComponent},
  {path: 'courses', component: UsercoursesComponent},
  {path: 'add', component: AddComponent},
  {path: 'course', component: CourseInfoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
