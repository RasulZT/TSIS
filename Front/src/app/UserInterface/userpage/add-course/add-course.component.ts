import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit{

  addCoursesForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
  })


  constructor(private authService: AuthService,
              private router: Router, private courseService: CourseService) {
  }

  ngOnInit(): void {
  }

  get courseName(){
    return this.addCoursesForm.get('name')
  }

  get description(){
    return this.addCoursesForm.get('description')
  }

  get level(){
    return this.addCoursesForm.get('level')
  }


  addCourse() {
    this.courseService.postCourse(this.addCoursesForm.value)
  }

  goBack(){
    this.router.navigate(["/add"])
  }
}
