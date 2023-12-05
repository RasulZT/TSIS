import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsercoursesComponent } from './usercourses/usercourses.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { JournalComponent } from './journal/journal.component';
import { TasksComponent } from './tasks/tasks.component';
import { RaspisanieComponent } from './raspisanie/raspisanie.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdCourseComponent } from './upd-course/upd-course.component';
import { UpdTeacherComponent } from './upd-teacher/upd-teacher.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';


@NgModule({
    declarations: [
        UserhomeComponent,
        UsercoursesComponent,
        SidebarComponent,
        AddComponent,
        JournalComponent,
        TasksComponent,
        RaspisanieComponent,
        AddStudentComponent,
        AddTeacherComponent,
        AddCourseComponent,
        UpdCourseComponent,
        UpdTeacherComponent,
        DeleteCourseComponent,
    ],
  exports: [
    SidebarComponent

  ],
    imports: [
        CommonModule,
        UserpageRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UserpageModule { }
