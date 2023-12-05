import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsercoursesComponent} from "./usercourses/usercourses.component";
import {UserhomeComponent} from "./userhome/userhome.component";
import {AddComponent} from "./add/add.component";
import {AddStudentComponent} from "./add-student/add-student.component";
import {AddTeacherComponent} from "./add-teacher/add-teacher.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {UpdCourseComponent} from "./upd-course/upd-course.component";
import {DeleteCourseComponent} from "./delete-course/delete-course.component";

const routes: Routes = [

  {path: '', component: UserhomeComponent},
  // {path: 'schedule', component: RaspisanieComponent},
  {path: 'courses', component: UsercoursesComponent},
  {path: 'add', component: AddComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'addTeacher', component: AddTeacherComponent},
  {path: 'addCourse', component: AddCourseComponent},
  {path: 'updCourse', component: UpdCourseComponent},
  {path: 'deleteCourse', component: DeleteCourseComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
