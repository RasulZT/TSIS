import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{


  constructor(private authService: AuthService,
              private router: Router, private courseService: CourseService) {
  }

  ngOnInit(): void {
  }

  addStudent() {
    this.router.navigate(["/addStudent"])
  }

  addTeacher() {
    this.router.navigate(["/addTeacher"])
  }

  addCourse() {
    this.router.navigate(["/addCourse"])
  }

  updCourse() {
    this.router.navigate(["/updCourse"])
  }

  deleteCourse() {
    this.router.navigate(["/deleteCourse"])
  }
}
