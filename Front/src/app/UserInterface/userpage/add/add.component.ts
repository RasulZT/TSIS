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
  showAddStudent: boolean = false;
  showAdditional: boolean = false;
  showAddCourse: boolean = false;
  showAddTeacher: boolean = false;
  showUpdateStudent: boolean = false;
  showUpdateCourse: boolean = false;
  updCourseFields: boolean = false;

  username: string = ""
  password: string = ""
  name: string = ""

  description: string = ""
  level: string = ""

  courses: any[] = [];
  selectedCourses: any[] = [];



  constructor(private authService: AuthService,
              private router: Router, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((res: any) => {
      this.courses = res;
    })
  }

  studentAddTable() {
    this.showAddStudent = true;
    this.showAdditional = true;
  }

  courseAddTable() {
    this.showAddCourse = true;
    this.showAdditional = true;
  }
  teacherAddTable() {
    this.showAddTeacher = true;
    this.showAdditional = true;
  }

  registerStudent() {
    let data = {
      username: this.username,
      password: this.password,
      name: this.name,
      role: "Student"
    }
    console.log(this.selectedCourses)
    this.authService.register(data)
      .subscribe(response => {
        let userId = response.userId;

        this.authService.setCourses(userId, this.selectedCourses)
          .subscribe(coursesResponse => {},
              error => {
          });
      }, error => {});

    this.cancel();
  }

  addCourse() {
    let data = {
      name: this.name,
      description: this.description,
      level: this.level,
    }
    console.log(this.selectedCourses)
    this.courseService.postCourse(data)
    this.cancel();
  }

  registerTeacher() {
    let data = {
      username: this.username,
      password: this.password,
      name: this.name,
      role: "Teacher"
    }
    console.log(this.selectedCourses)
    this.authService.register(data)
      .subscribe(response => {
        let userId = response.userId;

        this.authService.setCourses(userId, this.selectedCourses)
          .subscribe(coursesResponse => {},
            error => {
            });
      }, error => {});
    this.cancel();
  }

  courseUpdTable() {
    this.showAdditional = true;
    this.showUpdateCourse = true;
  }



  updateSelectedCourses(id: number) {
    if (this.selectedCourses.includes(id)) {
      this.selectedCourses = this.selectedCourses.filter(selectedCourse => selectedCourse !== id);
    } else {
      this.selectedCourses.push(id);
    }
  }

  cancel() {
    this.showAdditional = false;
    this.showAddStudent = false;
    this.showAddCourse = false;
    this.showAddTeacher = false;
    this.showUpdateCourse = false;
    this.updCourseFields = false;
    this.selectedCourses = [];
    this.name = '';
    this.username = '';
    this.password = '';
    this.description = '';
    this.level = '';

  }

  updCourse() {
    this.showUpdateCourse = false;
    this.updCourseFields = true;
  }

  cancelUpd() {
    this.updCourseFields = false;
    this.showUpdateCourse = true;
  }
}
