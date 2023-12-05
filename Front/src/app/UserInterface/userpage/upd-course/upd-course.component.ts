import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-upd-course',
  templateUrl: './upd-course.component.html',
  styleUrls: ['./upd-course.component.scss']
})
export class UpdCourseComponent implements OnInit{
  courses: any[] = []
  upd: boolean = false;
  updCoursesForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
  })
  id: number = 0;

  constructor(private authService: AuthService,
              private router: Router, private courseService: CourseService) {
  }
  ngOnInit(): void {
    this.courseService.getCourses().subscribe((res: any) => {
      this.courses = res;
    })
  }

  goBack(){
    this.router.navigate(["/add"])
  }

  courseUpdate(course: any) {
    this.upd = true;
    this.id = course.id;
    this.updCoursesForm.setValue({
      name: course.name,
      description: course.description,
      level: course.level,
    })
    console.log(this.id)
  }

  cancel() {
    this.upd = false;
  }

  saveChanges() {
    let data = this.updCoursesForm.value
    this.courseService.putCourse(this.id, data)
    this.upd = false;
  }

  get courseName(){
    return this.updCoursesForm.get('name')
  }

  get description(){
    return this.updCoursesForm.get('description')
  }

  get level(){
    return this.updCoursesForm.get('level')
  }
}


